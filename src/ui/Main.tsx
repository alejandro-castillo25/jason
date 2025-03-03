import { AppContext } from "@/AppContext";
import { useContext, useEffect, useState } from "react";

import { Accordion } from "@/components/ui/accordion";
import { GetIcon } from "./Icons";
import { Button } from "@/components/ui/button";

import {
  isValidPointNotation,
  evalFormat,
  getPathChild,
  copyToClipboard,
  unwrapIndex,
} from "./util";

import type { Item } from "./util";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { Switch } from "@/components/ui/switch";
import { HandleJason } from "./HandleJason";
import { translateTo } from "./lang";

function Jason() {
  const [jason, _setJason] = useContext(AppContext)?.jason!;
  const [jasonRoot, _setJasonRoot] = useContext(AppContext)?.jasonRoot!;

  return (
    <>
      <Accordion type="multiple" className="w-max">
        <HandleJason
          jason={jason as Record<string, unknown>}
          root={jasonRoot}
        />
      </Accordion>
    </>
  );
}

type EditItemType = "object" | "array" | "value";

type ItemValueType =
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "object"
  | "array";

interface JasonItem {
  key?: string;
  value: any;
  path: string;
  array?: boolean;
}

interface AddItemDialogprops {
  dialogAddItemTypeProp: EditItemType;
  dialogOptionsType: EditItemType;
  dialogAddItemEdit: boolean;
  dialogAddItemOldKey: string;
  dialogAddItemValueType: ItemValueType;
  dialogAddItemValue: string;
  dialogAddItemParentType: "object" | "array";
}

function AddItemDialog({
  dialogAddItemTypeProp,
  dialogOptionsType,
  dialogAddItemEdit,
  dialogAddItemOldKey,
  dialogAddItemValueType,
  dialogAddItemValue,
  dialogAddItemParentType,
}: AddItemDialogprops) {
  const [jason0, setJason] = useContext(AppContext)?.jason!;
  const [lang, _setLang] = useContext(AppContext)?.lang!;
  const [sharedKey, setSharedKey] = useState("");
  const [dialogAddItemOldKey0, setDialogAddItemOldKey0] =
    useState<string>(dialogAddItemOldKey);

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
  //TODO Check if there's a number limit in JSON
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
    const $addItemDialog: HTMLButtonElement =
      document.querySelector("#addItemDialog")!;
    $addItemDialog.click();
  }

  function getOptionsDialogData() {
    const $itemOptionsDialog: HTMLButtonElement =
      document.querySelector("#itemOptionsDialog")!;

    const path = $itemOptionsDialog.getAttribute("data-path")!;
    const dataType = $itemOptionsDialog.getAttribute("data-type")!;
    const dataParentType = $itemOptionsDialog.getAttribute("data-parent-type")!;

    return { path, dataType, dataParentType };
  }

  function onSubmitObject(values: z.infer<typeof formSchemaObject>) {
    const { key } = values;
    const { path, dataType } = getOptionsDialogData();

    if (dialogAddItemEdit) {
      editJasonItem({ key, value: 0, path, array: false });
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
      editJasonItem({ key, value, path, array: false });
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
      editJasonItem({ key, value, path, array: false });
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
      editJasonItem({ key, value, path, array: false });
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
      editJasonItem({ key, value, path, array: false });
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
    setSharedKey("");
  }

  function addJasonItem({ key, value, path, array = false }: JasonItem) {
    const oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!array) {
      console.log(
        `oldJason${path.substring(1)}${
          isValidPointNotation(key!) ? `.${key}` : `["${key}"]`
        } = ${evalFormat(value)}`
      );

      eval(
        `oldJason${path.substring(1)}${
          isValidPointNotation(key!) ? `.${key}` : `["${key}"]`
        } = ${evalFormat(value)}`
      );
    } else {
      console.log(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);

      eval(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);
    }
    setJason({ ...oldJason });
  }

  function editJasonItem({ key, value, path, array = false }: JasonItem) {
    //TODO yuh pretty much self explanatory what to do here now...
    console.log("Editing....", [key, value, path].join(" - "));
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
    <Dialog onOpenChange={() => resetAllForms()}>
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
                            dialogAddItemParentType === "array"
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
                              className="max-h-[33vh] text-green-400"
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
                            dialogAddItemParentType === "array"
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
                            dialogAddItemParentType === "array"
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
                            dialogAddItemParentType === "array"
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

export function Main() {
  const [dialogType, setDialogType] = useState<EditItemType>("object");
  const [isRoot, setIsRoot] = useState<boolean>(false);

  const [dialogTitle, setDialogTitle] = useState<string>("Edit Object");

  const [dialogAddItemType, setDialogAddItemType] =
    useState<EditItemType>("object");

  const [dialogAddItemEdit, setDialogAddItemEdit] = useState<boolean>(false);
  const [dialogAddItemOldKey, setDialogAddItemOldKey] = useState<string>("");
  const [dialogAddItemValueType, setDialogAddItemValueType] =
    useState<ItemValueType>("string");

  const [dialogAddItemParentType, setDialogAddItemParentType] = useState<
    "object" | "array"
  >("object");

  const [dialogAddItemValue, setDialogAddItemValue] = useState<string>("");

  const [jason0, setJason] = useContext(AppContext)?.jason!;
  const [lang, _setLang] = useContext(AppContext)?.lang!;

  function addJasonItem({ key, value, path, array = false }: JasonItem) {
    const oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!array) {
      eval(
        `oldJason${path.substring(1)}.${
          isValidPointNotation(key!) ? `.${key}` : `["${key}"]`
        } = ${evalFormat(value)}`
      );
    } else {
      eval(`oldJason${path.substring(1)}.push(${evalFormat(value)})`);
    }
    setJason({ ...oldJason });
  }

  interface JasonItemRemove {
    path: string;
    arrayElement?: boolean;
  }

  function removeJasonItem({ path, arrayElement = false }: JasonItemRemove) {
    let oldJason = !Array.isArray(jason0)
      ? { ...jason0 }
      : [...(jason0 as Array<any>)];

    if (!arrayElement) {
      eval(`delete oldJason${path.substring(1)};`);
    } else {
      eval(`delete oldJason${path.substring(1)};`);

      eval(
        `oldJason${path.substring(
          1,
          path.length - getPathChild(path).length
        )} = oldJason${path.substring(
          1,
          path.length - getPathChild(path).length
        )}.filter(el => el !== undefined);`
      );
    }
    setJason({ ...oldJason });
  }

  return (
    <>
      <main className="min-w-[100%] flex-grow p-3">
        <AddItemDialog
          dialogAddItemTypeProp={dialogAddItemType}
          dialogOptionsType={dialogType}
          dialogAddItemEdit={dialogAddItemEdit}
          dialogAddItemOldKey={
            isValidPointNotation(dialogAddItemOldKey)
              ? dialogAddItemOldKey
              : unwrapIndex(dialogAddItemOldKey as Item)
          }
          dialogAddItemValueType={dialogAddItemValueType}
          dialogAddItemValue={dialogAddItemValue}
          dialogAddItemParentType={dialogAddItemParentType}
        />
        <Dialog>
          <DialogTrigger
            tabIndex={-1}
            id="itemOptionsDialog"
            className="hidden"
            data-path={""}
            data-type={""}
            data-value={""}
            data-exact-type={""}
            autoFocus={false}
            onClick={() => {
              const $dialog: HTMLButtonElement =
                document.querySelector("#itemOptionsDialog")!;

              const objType = $dialog.getAttribute("data-type") as EditItemType;
              const isRootData = $dialog.getAttribute("data-root")!;
              const parentType = $dialog.getAttribute("data-parent-type") as
                | "object"
                | "array";

              setIsRoot(isRootData === "true");

              setDialogAddItemParentType(parentType);
              setDialogType(objType);
              setDialogTitle(
                `Edit ${
                  isRootData === "true"
                    ? "Root"
                    : objType === "object"
                    ? "Object"
                    : objType === "array"
                    ? "Array"
                    : "Value"
                }`
              );
            }}
          ></DialogTrigger>
          <DialogContent aria-describedby={undefined}>
            <DialogHeader>
              <DialogTitle className="text-2xl">
                {translateTo(lang, dialogTitle)}
              </DialogTitle>
              <section className="flex flex-col gap-3.5 my-1.5">
                <Button
                  onClick={() => {
                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;

                    const dataType = $optionsDialog.getAttribute(
                      "data-type"
                    )! as EditItemType;
                    setDialogAddItemType(dataType);

                    const dataExactType = $optionsDialog.getAttribute(
                      "data-exact-type"
                    )! as ItemValueType;
                    setDialogAddItemValueType(dataExactType);

                    const dataValue =
                      $optionsDialog.getAttribute("data-value")!;

                    setDialogAddItemValue(dataValue);

                    setDialogAddItemEdit(true);

                    const $addItemDialog: HTMLButtonElement =
                      document.querySelector("#addItemDialog")!;

                    const path = $optionsDialog.getAttribute("data-path")!;
                    setDialogAddItemOldKey(getPathChild(path));

                    $optionsDialog.click();
                    $addItemDialog.click();
                  }}
                >
                  <GetIcon name="Edit" />
                  {translateTo(lang, "Edit")}
                </Button>

                {dialogType !== "value" && (
                  <>
                    <Button
                      variant="default"
                      onClick={() => {
                        setDialogAddItemEdit(false);

                        if (dialogType === "array") {
                          const $optionsDialog: HTMLButtonElement =
                            document.querySelector("#itemOptionsDialog")!;

                          const path =
                            $optionsDialog.getAttribute("data-path")!;

                          addJasonItem({
                            path,
                            array: true,
                            value: {},
                            key: "",
                          });

                          $optionsDialog.click();
                          return;
                        }
                        setDialogAddItemType("object");

                        const $optionsDialog: HTMLButtonElement =
                          document.querySelector("#itemOptionsDialog")!;

                        const $addItemDialog: HTMLButtonElement =
                          document.querySelector("#addItemDialog")!;

                        $addItemDialog.click();
                        $optionsDialog.click();
                      }}
                    >
                      <GetIcon name="ObjectIcon" />
                      {translateTo(lang, "Add Object")}
                    </Button>
                    <Button
                      variant="default"
                      onClick={() => {
                        setDialogAddItemEdit(false);

                        if (dialogType === "array") {
                          const $optionsDialog: HTMLButtonElement =
                            document.querySelector("#itemOptionsDialog")!;

                          const path =
                            $optionsDialog.getAttribute("data-path")!;

                          addJasonItem({
                            path,
                            array: true,
                            value: [],
                            key: "",
                          });

                          $optionsDialog.click();
                          return;
                        }
                        setDialogAddItemType("array");
                        const $optionsDialog: HTMLButtonElement =
                          document.querySelector("#itemOptionsDialog")!;

                        const $addItemDialog: HTMLButtonElement =
                          document.querySelector("#addItemDialog")!;

                        $addItemDialog.click();
                        $optionsDialog.click();
                      }}
                    >
                      <GetIcon name="ArrayIcon" />
                      {translateTo(lang, "Add Array")}
                    </Button>
                    <Button
                      variant="default"
                      onClick={() => {
                        setDialogAddItemEdit(false);

                        setDialogAddItemType("value");

                        const $optionsDialog: HTMLButtonElement =
                          document.querySelector("#itemOptionsDialog")!;

                        const $addItemDialog: HTMLButtonElement =
                          document.querySelector("#addItemDialog")!;

                        const dataExactType = $optionsDialog.getAttribute(
                          "data-exact-type"
                        )! as ItemValueType;
                        setDialogAddItemValueType(dataExactType);

                        $optionsDialog.click();
                        $addItemDialog.click();
                      }}
                    >
                      <GetIcon name="Value" />
                      {translateTo(lang, "Add Value")}
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setDialogAddItemEdit(false);
                      }}
                    >
                      <GetIcon name="FromText" />
                      {translateTo(lang, "Add From Text")}
                    </Button>
                  </>
                )}

                {!isRoot && (
                  <>
                    <Button
                      variant="secondary"
                      onClick={async () => {
                        const $optionsDialog: HTMLButtonElement =
                          document.querySelector("#itemOptionsDialog")!;

                        const path = $optionsDialog.getAttribute("data-path")!;
                        //
                        $optionsDialog.click();
                        await copyToClipboard(path.substring(1));
                      }}
                    >
                      <GetIcon name="Copy" />
                      {translateTo(lang, "Copy Path")}
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => {
                        const $optionsDialog: HTMLButtonElement =
                          document.querySelector("#itemOptionsDialog")!;
                        $optionsDialog.click();

                        const path = $optionsDialog.getAttribute("data-path")!;
                        const arrayElement = /^\[\d+\]$/g.test(
                          getPathChild(path)
                        );

                        removeJasonItem({
                          path,
                          arrayElement,
                        });
                      }}
                    >
                      <GetIcon name="Trash" />
                      {translateTo(lang, "Remove")}
                    </Button>
                  </>
                )}
              </section>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Jason />
      </main>
    </>
  );
}
