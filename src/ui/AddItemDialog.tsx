import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { useEffect, useRef, useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Switch } from "@/components/ui/switch";

import {
  editObjectValue,
  evalFormat,
  getPathChild,
  isValidColor,
  isValidPointNotation,
  isValidURL,
} from "./util";

import type { JasonItem, EditItemType, ItemValueType } from "./Main";
import { useAppContext } from "@/AppContext";
import { translateTo } from "./lang";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GetIcon } from "./Icons";
import { Button } from "@/components/ui/button";

interface JasonEditItem {
  oldKey: string;
  newKey: string;
  newValue?: any;
  path: string;
  arrayParent?: boolean;
}

interface AddItemDialogProps {
  jason0: any;
  setJason0: React.Dispatch<React.SetStateAction<any>>;
  dialogAddItemTypeProp: EditItemType;
  dialogOptionsType: EditItemType;

  dialogAddItemEdit: boolean;
  dialogAddItemOldKey: string;
  dialogAddItemValueType: ItemValueType;
  dialogAddItemValue: string;
  dialogAddItemParentType: "object" | "array";
}

//TODO Fix the incosistency of the oldkey & oldValue apprearing
export function AddItemDialog({
  jason0,
  setJason0,
  dialogAddItemTypeProp,
  dialogOptionsType,
  dialogAddItemEdit,
  dialogAddItemOldKey,
  dialogAddItemValueType,
  dialogAddItemValue,
  dialogAddItemParentType,
}: AddItemDialogProps) {
  const [lang, _setLang] = useAppContext()?.lang!;
  const [sharedKey, setSharedKey] = useState("");
  const [dialogAddItemOldKey0, setDialogAddItemOldKey0] =
    useState<string>(dialogAddItemOldKey);

  const itemOptionsDialogRef = useRef<HTMLElement | null>(null);
  const addItemDialogRef = useRef<HTMLElement | null>(null);

  const refreshTree = () => {
    const refreshTreeEvent = new CustomEvent("refreshTree", {
      detail: {
        message: "Refreshing Tree",
      },
      cancelable: false,
      bubbles: true,
      composed: true,
    });

    document.dispatchEvent(refreshTreeEvent);
  };

  const formSchemaObject = z.object({
    key:
      dialogOptionsType === "array" && !dialogAddItemEdit
        ? z.string().optional()
        : z
            .string()
            .trim()
            .min(1, {
              message: translateTo(
                lang,
                "You can't add an item with an empty key!"
              ),
            }),
  });

  const formSchemaString = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z
            .string()
            .trim()
            .min(1, {
              message: translateTo(
                lang,
                "You can't add an item with an empty key!"
              ),
            }),
    value: z.string(),
  });
  const formSchemaNumber = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z
            .string()
            .trim()
            .min(1, {
              message: translateTo(
                lang,
                "You can't add an item with an empty key!"
              ),
            }),
    value: z
      .number({
        invalid_type_error: translateTo(lang, "That's not a right number!"),
      })
      .min(Number.MIN_SAFE_INTEGER, {
        message: translateTo(lang, "This number is too small!"),
      })
      .max(Number.MAX_SAFE_INTEGER, {
        message: translateTo(lang, "This number is too big!"),
      }),
  });

  const formSchemaBoolean = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z
            .string()
            .trim()
            .min(1, {
              message: translateTo(
                lang,
                "You can't add an item with an empty key!"
              ),
            }),
    value: z.boolean(),
  });

  const formSchemaNull = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z
            .string()
            .trim()
            .min(1, {
              message: translateTo(
                lang,
                "You can't add an item with an empty key!"
              ),
            }),
    value: z.null().or(z.boolean()),
  });

  const formObject = useForm<z.infer<typeof formSchemaObject>>({
    resolver: zodResolver(formSchemaObject),
    defaultValues: {
      key: "",
    },
  });

  const formString = useForm<z.infer<typeof formSchemaString>>({
    resolver: zodResolver(formSchemaString),
    defaultValues: {
      key: "",
      value: "",
    },
  });

  const formNumber = useForm<z.infer<typeof formSchemaNumber>>({
    resolver: zodResolver(formSchemaNumber),
    defaultValues: {
      key: "",
      value: 0,
    },
  });
  const formBoolean = useForm<z.infer<typeof formSchemaBoolean>>({
    resolver: zodResolver(formSchemaBoolean),
    defaultValues: {
      key: "",
      value: false,
    },
  });

  const formNull = useForm<z.infer<typeof formSchemaNull>>({
    resolver: zodResolver(formSchemaNull),
    defaultValues: {
      key: "",
      value: null,
    },
  });

  function closeAddItemDialog() {
    addItemDialogRef.current!.click();
    setTimeout(refreshTree, 20);
  }

  useEffect(() => {
    itemOptionsDialogRef.current = document.getElementById("itemOptionsDialog");
    addItemDialogRef.current = document.getElementById("addItemDialog");
  }, []);

  function getOptionsDialogData() {
    const path = itemOptionsDialogRef.current!.getAttribute("data-path")!;
    const dataType = itemOptionsDialogRef.current!.getAttribute("data-type")!;
    const dataParentType =
      itemOptionsDialogRef.current!.getAttribute("data-parent-type")!;

    return { path, dataType, dataParentType };
  }

  function onSubmitObject(values: z.infer<typeof formSchemaObject>) {
    const { key } = values;
    const { path, dataType } = getOptionsDialogData();

    if (dialogAddItemEdit) {
      editJasonItem({
        oldKey: dialogAddItemOldKey,
        newKey: key as string,
        path,
        arrayParent: dialogAddItemParentType === "array",
      });
      closeAddItemDialog();
      return;
    }

    addJasonItem({
      key,
      value: dialogAddItemTypeProp === "array" ? [] : {},
      path,
      array: dataType !== "object",
    });

    closeAddItemDialog();
  }

  function onSubmitString(values: z.infer<typeof formSchemaString>) {
    const { key, value } = values;
    const { path, dataType } = getOptionsDialogData();

    if (dialogAddItemEdit) {
      editJasonItem({
        oldKey: dialogAddItemOldKey,
        newKey: key as string,
        newValue: value,
        path,
        arrayParent: dialogAddItemParentType === "array",
      });

      closeAddItemDialog();
      return;
    }

    addJasonItem({
      key,
      value,
      path,
      array: dataType !== "object",
    });

    closeAddItemDialog();
  }

  function onSubmitNumber(values: z.infer<typeof formSchemaNumber>) {
    const { key, value } = values;
    const { path, dataType } = getOptionsDialogData();

    if (dialogAddItemEdit) {
      editJasonItem({
        oldKey: dialogAddItemOldKey,
        newKey: key as string,
        newValue: value,
        path,
        arrayParent: dialogAddItemParentType === "array",
      });
      closeAddItemDialog();
      return;
    }

    addJasonItem({
      key,
      value,
      path,
      array: dataType !== "object",
    });

    closeAddItemDialog();
  }

  function onSubmitBoolean(values: z.infer<typeof formSchemaBoolean>) {
    const { key, value } = values;
    const { path, dataType } = getOptionsDialogData();

    if (dialogAddItemEdit) {
      editJasonItem({
        oldKey: dialogAddItemOldKey,
        newKey: key as string,
        newValue: value,
        path,
        arrayParent: dialogAddItemParentType === "array",
      });
      closeAddItemDialog();
      return;
    }

    addJasonItem({
      key,
      value,
      path,
      array: dataType !== "object",
    });

    closeAddItemDialog();
  }

  function onSubmitNull(values: z.infer<typeof formSchemaNull>) {
    values.value = null;
    const { key, value } = values;
    const { path, dataType } = getOptionsDialogData();

    if (dialogAddItemEdit) {
      editJasonItem({
        oldKey: dialogAddItemOldKey,
        newKey: key as string,
        newValue: null,
        path,
        arrayParent: dialogAddItemParentType === "array",
      });
      closeAddItemDialog();
      return;
    }

    addJasonItem({
      key,
      value,
      path,
      array: dataType !== "object",
    });
    closeAddItemDialog();
  }
  function resetAllForms() {
    formObject.reset({
      key: dialogAddItemEdit ? dialogAddItemOldKey : "",
    });

    formString.reset({
      key: dialogAddItemEdit ? dialogAddItemOldKey : "",
      value: dialogAddItemEdit ? dialogAddItemValue : "",
    });
    formNumber.reset({
      key: dialogAddItemEdit ? dialogAddItemOldKey : "",
      value: dialogAddItemEdit
        ? Number.isNaN(Number(dialogAddItemValue))
          ? dialogAddItemValue === "true"
            ? 1
            : 0
          : Number(dialogAddItemValue)
        : 0,
    });

    formBoolean.reset({
      key: dialogAddItemEdit ? dialogAddItemOldKey : "",
      value: dialogAddItemEdit ? dialogAddItemValue === "true" : false,
    });
    formNull.reset({
      key: dialogAddItemEdit ? dialogAddItemOldKey : "",
      value: null,
    });
    setDialogAddItemOldKey0(dialogAddItemOldKey);

    setSharedKey("");
  }

  function addJasonItem({ key, value, path, array = false }: JasonItem) {
    const oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!array) {
      eval(
        `oldJason${path.substring(1)}${
          isValidPointNotation(key!) ? `.${key}` : `["${key}"]`
        } = ${evalFormat(value)}`
      );
    } else {
      eval(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);
    }
    setJason0(
      !Array.isArray(jason0) ? { ...oldJason } : [...(oldJason as any[])]
    );
  }

  function editJasonItem({
    oldKey,
    newKey,
    newValue,
    path,
    arrayParent = false,
  }: JasonEditItem) {
    let oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!arrayParent) {
      const _newJasonProp = editObjectValue({
        obj: eval(
          `oldJason${path.substring(
            1,
            path.length -
              getPathChild(path).length +
              (getPathChild(path).startsWith("[") ? 0 : -1)
          )}`
        ),
        oldKey,
        newKey,
        newValue,
      });

      _newJasonProp;

      eval(
        `oldJason${path.substring(
          1,
          path.length -
            getPathChild(path).length +
            (getPathChild(path).startsWith("[") ? 0 : -1)
        )} = _newJasonProp;`
      );
    } else {
      const _newJasonProp = editObjectValue({
        obj: eval(
          `oldJason${path.substring(
            1,
            path.length - getPathChild(path).length
          )}`
        ),
        oldKey,
        newKey: oldKey,
        newValue,
      });

      _newJasonProp;

      eval(
        `oldJason${path.substring(
          1,
          path.length - getPathChild(path).length
        )} = _newJasonProp;`
      );
    }

    setJason0(
      !Array.isArray(jason0) ? { ...oldJason } : [...(oldJason as any[])]
    );
  }

  useEffect(() => {
    formString.setValue("key", sharedKey);
    formNumber.setValue("key", sharedKey);
    formBoolean.setValue("key", sharedKey);
    formNull.setValue("key", sharedKey);
    formString.trigger();
    formNumber.trigger();
    formBoolean.trigger();
    formNull.trigger();
  }, [sharedKey, formString, formNumber, formBoolean, formNull]);

  useEffect(() => {
    setDialogAddItemOldKey0(dialogAddItemOldKey);
  }, [dialogAddItemOldKey]);

  useEffect(() => {
    formString.setValue("key", dialogAddItemOldKey0);
    formNumber.setValue("key", dialogAddItemOldKey0);
    formBoolean.setValue("key", dialogAddItemOldKey0);
    formNull.setValue("key", dialogAddItemOldKey0);
    formString.trigger();
    formNumber.trigger();
    formBoolean.trigger();
    formNull.trigger();
  }, [dialogAddItemOldKey0]);

  return (
    <Dialog
      onOpenChange={() => {
        resetAllForms();
      }}
    >
      <DialogTrigger
        tabIndex={-1}
        id="addItemDialog"
        className="hidden"
        autoFocus={false}
        onClick={() => {}}
      ></DialogTrigger>
      <DialogContent
        aria-describedby={undefined}
        className={` flex flex-col ${
          dialogAddItemTypeProp === "value"
            ? dialogOptionsType === "array" ||
              (dialogAddItemParentType === "array" && dialogAddItemEdit)
              ? "min-h-[18rem]"
              : "min-h-[25rem]"
            : ""
        }`}
      >
        <DialogHeader className="max-w-full ">
          <DialogTitle className="text-2xl flex items-center justify-start max-sm:justify-center mb-5">
            {translateTo(
              lang,
              `${!dialogAddItemEdit ? "Add" : "Edit"} ${
                dialogAddItemTypeProp === "object"
                  ? "Object"
                  : dialogAddItemTypeProp === "array"
                  ? "Array"
                  : "Value"
              }`
            )}
            {dialogAddItemTypeProp === "object" ? (
              <GetIcon
                name="ObjectIcon"
                className="inline ml-2 w-[2rem] h-[2rem]"
              />
            ) : dialogAddItemTypeProp === "array" ? (
              <GetIcon
                name="ArrayIcon"
                className="inline ml-2 w-[2rem] h-[2rem]"
              />
            ) : (
              <GetIcon name="Value" className="inline ml-2 w-[2rem] h-[2rem]" />
            )}
          </DialogTitle>

          {dialogAddItemTypeProp === "value" && (
            <Tabs
              defaultValue={dialogAddItemValueType}
              className=" flex items-center"
            >
              <TabsList className="">
                <TabsTrigger
                  value="string"
                  className="data-[state=active]:text-green-400"
                >
                  {translateTo(lang, "String")}
                </TabsTrigger>
                <TabsTrigger
                  value="number"
                  className="data-[state=active]:text-orange-400"
                >
                  {translateTo(lang, "Number")}
                </TabsTrigger>
                <TabsTrigger
                  value="boolean"
                  className="data-[state=active]:text-red-400"
                >
                  {translateTo(lang, "Boolean")}
                </TabsTrigger>
                <TabsTrigger
                  value="null"
                  className="data-[state=active]:text-red-500"
                >
                  {translateTo(lang, "Null")}
                </TabsTrigger>
              </TabsList>
              <TabsContent value="string" className="w-full" tabIndex={-1}>
                <Form {...formString}>
                  <form
                    onSubmit={formString.handleSubmit(onSubmitString)}
                    className="w-full gap-3 flex flex-col"
                  >
                    <FormField
                      control={formString.control}
                      name="key"
                      render={({ field }) => (
                        <FormItem
                          className={
                            dialogOptionsType === "array" ||
                            (dialogAddItemParentType === "array" &&
                              dialogAddItemEdit)
                              ? "hidden"
                              : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            {translateTo(lang, "Key")}:
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={translateTo(lang, "Key")}
                              autoComplete="off"
                              spellCheck={false}
                              {...field}
                              value={
                                dialogAddItemEdit
                                  ? dialogAddItemOldKey0
                                  : sharedKey
                              }
                              onChange={(e) => {
                                if (dialogAddItemEdit)
                                  setDialogAddItemOldKey0(e.target.value);
                                else setSharedKey(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-(--destructive)" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formString.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-(--primary)!">
                            {translateTo(lang, "Value")}:
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              required={false}
                              autoComplete="off"
                              spellCheck={false}
                              placeholder={translateTo(lang, "String")}
                              className={`max-h-[35vh] ${
                                isValidURL(field.value)
                                  ? "text-blue-400"
                                  : "text-green-400"
                              }`}
                              style={
                                isValidColor(field.value)
                                  ? {
                                      color: field.value,
                                      textShadow: "1.5px 1px 0px #444444",

                                    }
                                  : {}
                              }
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit">Ok</Button>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value="number" className="w-full" tabIndex={-1}>
                <Form {...formNumber}>
                  <form
                    onSubmit={formNumber.handleSubmit(onSubmitNumber)}
                    className="w-full gap-3 flex flex-col"
                  >
                    <FormField
                      control={formNumber.control}
                      name="key"
                      render={({ field }) => (
                        <FormItem
                          className={
                            dialogOptionsType === "array" ||
                            (dialogAddItemParentType === "array" &&
                              dialogAddItemEdit)
                              ? "hidden"
                              : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            {translateTo(lang, "Key")}:
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={translateTo(lang, "Key")}
                              autoComplete="off"
                              spellCheck={false}
                              {...field}
                              value={
                                dialogAddItemEdit
                                  ? dialogAddItemOldKey0
                                  : sharedKey
                              }
                              onChange={(e) => {
                                if (dialogAddItemEdit)
                                  setDialogAddItemOldKey0(e.target.value);
                                else setSharedKey(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-(--destructive)" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formNumber.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-(--primary)!">
                            {translateTo(lang, "Value")}:
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              inputMode="numeric"
                              autoComplete="off"
                              spellCheck={false}
                              placeholder={translateTo(lang, "Number")}
                              className="text-orange-400"
                              {...field}
                              onChange={(e) => {
                                if (e.target.value.length == 0) {
                                  field.onChange(e.target.value);
                                  return;
                                }

                                field.onChange(Number(e.target.value));
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-(--destructive)" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="">
                      Ok
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value="boolean" className="w-full" tabIndex={-1}>
                <Form {...formBoolean}>
                  <form
                    onSubmit={formBoolean.handleSubmit(onSubmitBoolean)}
                    className="w-full gap-3 flex flex-col"
                  >
                    <FormField
                      control={formBoolean.control}
                      name="key"
                      render={({ field }) => (
                        <FormItem
                          className={
                            dialogOptionsType === "array" ||
                            (dialogAddItemParentType === "array" &&
                              dialogAddItemEdit)
                              ? "hidden"
                              : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            {translateTo(lang, "Key")}:
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={translateTo(lang, "Key")}
                              autoComplete="off"
                              spellCheck={false}
                              {...field}
                              value={
                                dialogAddItemEdit
                                  ? dialogAddItemOldKey0
                                  : sharedKey
                              }
                              onChange={(e) => {
                                if (dialogAddItemEdit)
                                  setDialogAddItemOldKey0(e.target.value);
                                else setSharedKey(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-(--destructive)" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formBoolean.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-red-400!">
                            <span className="text-(--primary)!">
                              {translateTo(lang, "Value")}:{" "}
                            </span>
                            {field.value.toString()}
                          </FormLabel>
                          <FormControl>
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-red-400 "
                            />
                          </FormControl>
                          <FormMessage className="text-(--destructive)" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant={"default"}>
                      Ok
                    </Button>
                  </form>
                </Form>
              </TabsContent>
              <TabsContent value="null" className="w-full" tabIndex={-1}>
                <Form {...formNull}>
                  <form
                    onSubmit={formNull.handleSubmit(onSubmitNull)}
                    className="w-full gap-3 flex flex-col"
                  >
                    <FormField
                      control={formNull.control}
                      name="key"
                      render={({ field }) => (
                        <FormItem
                          className={
                            dialogOptionsType === "array" ||
                            (dialogAddItemParentType === "array" &&
                              dialogAddItemEdit)
                              ? "hidden"
                              : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            {translateTo(lang, "Key")}:
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={translateTo(lang, "Key")}
                              autoComplete="off"
                              spellCheck={false}
                              {...field}
                              value={
                                dialogAddItemEdit
                                  ? dialogAddItemOldKey0
                                  : sharedKey
                              }
                              onChange={(e) => {
                                if (dialogAddItemEdit)
                                  setDialogAddItemOldKey0(e.target.value);
                                else setSharedKey(e.target.value);
                              }}
                            />
                          </FormControl>
                          <FormMessage className="text-(--destructive)" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={formNull.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-(--primary)!">
                            {translateTo(lang, "Value")}:
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              disabled
                              autoComplete="off"
                              spellCheck={false}
                              placeholder="Null"
                              className="text-red-500"
                              {...field}
                              value={"null"}
                            />
                          </FormControl>
                          <FormMessage className="text-(--destructive)" />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" variant={"default"}>
                      Ok
                    </Button>
                  </form>
                </Form>
              </TabsContent>
            </Tabs>
          )}

          {dialogAddItemTypeProp !== "value" && (
            <Form {...formObject}>
              <form
                onSubmit={formObject.handleSubmit(onSubmitObject)}
                className="w-full gap-3 flex flex-col"
              >
                <FormField
                  control={formObject.control}
                  name="key"
                  render={({ field }) => (
                    <FormItem className={""}>
                      <FormLabel className="text-(--primary)!">
                        {translateTo(lang, "Key")}:
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Key"
                          autoComplete="off"
                          spellCheck={false}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-(--destructive)" />
                    </FormItem>
                  )}
                />

                <Button type="submit" variant={"default"}>
                  Ok
                </Button>
              </form>
            </Form>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
