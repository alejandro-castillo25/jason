import { AppContext } from "@/AppContext";
import { useContext, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GetIcon } from "./Icons";
import { Button } from "@/components/ui/button";

import {
  getPathCurrentParentOnly,
  getObjectLength,
  getMarginLeft,
  isValidPointNotation,
  evalFormat,
} from "./util";

import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

function GetFomattedValue({
  children,
}: {
  children: string | number | boolean | null | undefined;
}) {
  function Format(value: typeof children) {
    // if (typeof value === "string" && value.includes("@"))
    //   return (
    //     <span className="text-purple-400">
    //       {`"`}
    //       {value}
    //       {`"`}
    //     </span>
    //   );

    // if (typeof value === "string" && value.startsWith("$"))
    //   return (
    //     <span className="text-yellow-400">
    //       {`"`}
    //       {value}
    //       {`"`}
    //     </span>
    //   )
    if (typeof value === "string")
      return (
        <span className="text-green-400">
          {`"`}
          {value}
          {`"`}
        </span>
      );

    if (typeof value === "boolean")
      return <span className="text-red-400">{value.toString()}</span>;
    if (typeof value === "number" || typeof value === "bigint")
      return <span className="text-orange-400">{value.toString()}</span>;
    if (value === null) return <span className="text-red-600">{"null"}</span>;
    if (value === undefined)
      return <span className="text-gray-400">{"undefined"}</span>;

    return value;
  }

  return <>{Format(children)}</>;
}

interface HandleJasonProps {
  jason: Record<string, unknown>;
  root?: boolean;
  path?: string;
}

function HandleJason({ jason, root = false, path = " " }: HandleJasonProps) {
  const res: Array<JSX.Element> = [];

  const [jasonBracketGuides, _setJasonBracketGuides] =
    useContext(AppContext)?.jasonBracketGuides!;
  const [jasonItemsOffset, _setJasonItemsOffset] =
    useContext(AppContext)?.jasonItemsOffset!;
  const [jasonPaths, _setJasonPaths] = useContext(AppContext)?.jasonPaths!;

  const [jasonWordWrap, _setJasonWordWrap] =
    useContext(AppContext)?.jasonWordWrap!;

  const [jasonPathsOnlyParent, _setjasonPathsOnlyParent] =
    useContext(AppContext)?.jasonPathsNearPathOnly!;

  type ObjectType = "array" | "object";

  if (root) {
    const objType: ObjectType = Array.isArray(jason) ? "array" : "object";

    return (
      <>
        <AccordionItem
          value={path}
          className="border-b-0 relative"
          key={"root"}
        >
          <AccordionTrigger
            className="jason-item bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80"
            onContextMenu={(e) => {
              e.preventDefault();
              const $optionsDialog: HTMLButtonElement =
                document.querySelector("#itemOptionsDialog")!;

              $optionsDialog.setAttribute("data-type", objType);

              $optionsDialog.setAttribute("data-path", path);

              $optionsDialog.click();
            }}
          >
            <span
              className="m-0 mr-3.5 h-[2.5rem] w-[2.5rem]  aspect-square bg-black/15 hover:bg-black/25 flex items-center justify-center rounded-(--radius)"
              onClick={(e) => {
                e.preventDefault();
                const $dialog: HTMLButtonElement =
                  document.querySelector("#itemOptionsDialog")!;

                $dialog.setAttribute("data-type", objType);
                $dialog.setAttribute("data-path", path);

                $dialog.click();
                // insertJasonItem({
                //   name: "MHM",
                //   path,
                //   array: objType === "array",
                //   value: "Hii",
                // });
              }}
            >
              <GetIcon
                name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className="scale-75 w-full h-full"
              />
            </span>
          </AccordionTrigger>

          <AccordionContent
            className={`${getMarginLeft(jasonItemsOffset)} w-max p-0 ${
              jasonBracketGuides && "border-l-1"
            } border-l-primary/45 flex flex-col`}
          >
            <HandleJason jason={jason} path={path} />
          </AccordionContent>
        </AccordionItem>
      </>
    );
  }

  for (const [k, v] of Object.entries(jason)) {
    let itemPath = `${path}.${k}`;
    if (Array.isArray(jason)) itemPath = `${path}[${k}]`;
    if (!isValidPointNotation(k)) itemPath = `${path}["${k}"]`;

    if (v === null || typeof v !== "object") {
      res.push(
        <Button
          className={`jason-item ${
            jasonWordWrap ? "max-w-[92vw]" : ""
          } bg-[var(--secondary)] p-2 rounded-(--radius) w-max text-[1rem] mt-0.5 h-auto text-w`}
          variant="secondary"
          key={itemPath}
        >
          <div className="w-full h-full text-left text-wrap">
            <span className="font-semibold">{k}</span>
            <span className="text-gray-300">{" :  "}</span>

            {jasonPaths && (
              <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                {jasonPathsOnlyParent
                  ? getPathCurrentParentOnly(itemPath)
                  : itemPath}{" "}
                <br />
              </i>
            )}

            <span className={"whitespace-break-spaces"}>
              {<GetFomattedValue>{v as any}</GetFomattedValue>}
            </span>
          </div>
        </Button>
      );
    } else {
      const objType: ObjectType = Array.isArray(v) ? "array" : "object";
      const isEmpty: boolean = getObjectLength(v) === 0;
      res.push(
        <AccordionItem
          value={itemPath}
          className={`border-b-0 mt-0.5`}
          key={itemPath}
        >
          <AccordionTrigger
            className={`jason-item break-all ${
              jasonWordWrap ? "max-w-[92vw]" : ""
            } flex gap-0 bg-(--secondary) p-1 m-0 text-[1rem] hover:no-underline hover:bg-secondary/80 ${
              isEmpty ? "text-foreground/50" : ""
            } w-max`}
            onContextMenu={(e) => {
              e.preventDefault();
              const $optionsDialog: HTMLButtonElement =
                document.querySelector("#itemOptionsDialog")!;

              $optionsDialog.setAttribute("data-type", objType);

              $optionsDialog.setAttribute("data-path", itemPath);

              $optionsDialog.click();
            }}
          >
            <span
              className="m-0 mr-3.5 h-[2rem] aspect-square bg-black/15 hover:bg-black/25 w-[2rem] flex items-center justify-center rounded-(--radius)"
              onClick={(e) => {
                e.preventDefault();
                const $optionsDialog: HTMLButtonElement =
                  document.querySelector("#itemOptionsDialog")!;

                $optionsDialog.setAttribute("data-type", objType);

                $optionsDialog.setAttribute("data-path", itemPath);

                $optionsDialog.click();
                // insertJasonItem({
                //   name: "MHM",
                //   path: itemPath,
                //   array: objType === "array",
                //   value: "Hii",
                // });
              }}
            >
              <GetIcon
                name={objType === "object" ? "ObjectIcon" : "ArrayIcon"}
                className="scale-75 w-[1.5rem] h-[1.5rem]"
              />
            </span>
            <span className="mr-auto h-full flex items-center flex-wrap">
              <span>
                {k}
                <span className="text-gray-300">{" :"}</span>
              </span>

              {jasonPaths && (
                <i className="ml-4 opacity-30 font-normal text-[.95rem]">
                  {jasonPathsOnlyParent
                    ? getPathCurrentParentOnly(itemPath)
                    : itemPath}
                </i>
              )}
            </span>
          </AccordionTrigger>
          {!isEmpty && (
            <AccordionContent
              className={` flex flex-col ${getMarginLeft(
                jasonItemsOffset
              )} w-max p-0 ${
                jasonBracketGuides && "border-l-1"
              } border-l-primary/45 group-hover:border-amber-300`}
            >
              <HandleJason jason={v as typeof jason} path={itemPath} />
            </AccordionContent>
          )}
        </AccordionItem>
      );
    }
  }

  return res;
}

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

type EditItemType =
  | "object"
  | "array"
  | "string"
  | "number"
  | "boolean"
  | "null"
  | "value"
  | "undefined";

interface JasonItem {
  key?: string;
  value: any;
  path: string;
  array?: boolean;
}

function AddItemDialog({
  dialogAddItemTypeProp,
  dialogOptionsType,
}: {
  dialogAddItemTypeProp: EditItemType;
  dialogOptionsType: EditItemType;
}) {
  const [jason0, setJason] = useContext(AppContext)?.jason!;
  // const [valueType, setValueType] = useState<EditItemType>("string");

  const formSchemaString = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z.string().trim().min(1, {
            message: "You can't add an item with an empty key!",
          }),
    value: z.string(),
  });

  const formSchemaNumber = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z.string().trim().min(1, {
            message: "You can't add an item with an empty key!",
          }),
    value: z.number({
      invalid_type_error: "That's not the right number!",
    }),
  });

  const formSchemaBoolean = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z.string().trim().min(1, {
            message: "You can't add an item with an empty key!",
          }),
    value: z.boolean(),
  });

  const formSchemaNull = z.object({
    key:
      dialogOptionsType === "array"
        ? z.string().optional()
        : z.string().trim().min(1, {
            message: "You can't add an item with an empty key!",
          }),
    value: z.null().or(z.boolean()),
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

    return { path, dataType };
  }

  function onSubmitString(values: z.infer<typeof formSchemaString>) {
    const { key, value } = values;
    const { path, dataType } = getOptionsDialogData();

    console.log(values, path, dataType);
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

    console.log(values, path, dataType);
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

    console.log(values, path, dataType);
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

    console.log(values, path, dataType);
    addJasonItem({
      key,
      value,
      path,
      array: dataType !== "object",
    });
    closeAddItemDialog();
  }
  function resetAllForms() {
    formString.reset();
    formNumber.reset();
    formBoolean.reset();
    formNull.reset();
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
        className={`flex flex-col ${
          dialogAddItemTypeProp === "value" ? "min-h-[52vh]" : ""
        }`}
      >
        <DialogHeader className="max-w-full ">
          <DialogTitle className="text-2xl flex items-center justify-start max-sm:justify-center mb-5">
            {"Add "}
            {dialogAddItemTypeProp === "object"
              ? "Object"
              : dialogAddItemTypeProp === "array"
              ? "Array"
              : "Value"}
            {dialogAddItemTypeProp === "object" ? (
              <GetIcon name="ObjectIcon" className="inline ml-2" />
            ) : dialogAddItemTypeProp === "array" ? (
              <GetIcon name="ArrayIcon" className="inline ml-2" />
            ) : (
              <GetIcon name="Value" className="inline ml-2" />
            )}
          </DialogTitle>

          {dialogAddItemTypeProp === "value" && (
            <Tabs defaultValue="string" className=" flex items-center">
              <TabsList className="">
                <TabsTrigger
                  value="string"
                  className="data-[state=active]:text-green-400"
                >
                  String
                </TabsTrigger>
                <TabsTrigger
                  value="number"
                  className="data-[state=active]:text-orange-400"
                >
                  Number
                </TabsTrigger>
                <TabsTrigger
                  value="boolean"
                  className="data-[state=active]:text-red-400"
                >
                  Boolean
                </TabsTrigger>
                <TabsTrigger
                  value="null"
                  className="data-[state=active]:text-red-500"
                >
                  Null
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
                            dialogOptionsType === "array" ? "hidden" : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            Key:
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
                    <FormField
                      control={formString.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-green-400">
                            Value:
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              required={false}
                              autoComplete="off"
                              spellCheck={false}
                              placeholder="String"
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
                            dialogOptionsType === "array" ? "hidden" : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            Key:
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
                    <FormField
                      control={formNumber.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-orange-400!">
                            Value:
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              step="any"
                              inputMode="numeric"
                              autoComplete="off"
                              spellCheck={false}
                              placeholder="Number"
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
                            dialogOptionsType === "array" ? "hidden" : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            Key:
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
                    <FormField
                      control={formBoolean.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-red-400!">
                            Value: ({field.value.toString()})
                          </FormLabel>
                          <FormControl>
                            {/* <div className="border-1 rounded-(--radius) flex items-center justify-center h-[2.25rem]"> */}
                            <Switch
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              className="data-[state=checked]:bg-red-400 "
                            />
                            {/* </div> */}
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
                            dialogOptionsType === "array" ? "hidden" : ""
                          }
                        >
                          <FormLabel className="text-(--primary)!">
                            Key:
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
                    <FormField
                      control={formNull.control}
                      name="value"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-red-500!">
                            Value:
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
            <>
              <form
                className="flex flex-col gap-3.5 my-1.5"
                onSubmit={(e) => e.preventDefault()}
              >
                {" "}
                <Label htmlFor="key" className="text-(--primary)">
                  Key:
                </Label>
                <Input
                  type="text"
                  id="dialogInputKey"
                  placeholder="Key"
                  autoComplete="off"
                  spellCheck={false}
                  className="w-full"
                />
                <DialogClose asChild>
                  <Button
                    type="submit"
                    variant={"default"}
                    className="mt-2"
                    onClick={(e) => {
                      const $optionsDialog: HTMLButtonElement =
                        document.querySelector("#itemOptionsDialog")!;
                      const $dialogInputKey: HTMLButtonElement =
                        document.querySelector("#dialogInputKey")!;

                      const path = $optionsDialog.getAttribute("data-path")!;

                      const key = $dialogInputKey.value.trim();

                      if (key.length === 0) {
                        e.preventDefault();
                        return;
                      }

                      if (dialogAddItemTypeProp === "object") {
                        addJasonItem({
                          key,
                          path,
                          value: {},
                        });

                        return;
                      }
                      if (dialogAddItemTypeProp === "array") {
                        addJasonItem({
                          key,
                          path,
                          value: [],
                        });

                        return;
                      }
                      // if (dialogAddItemTypeProp === "") {
                      // alert("VALUE")
                      // }
                    }}
                  >
                    Ok
                  </Button>
                </DialogClose>
              </form>
            </>
          )}
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export function Main() {
  const [dialogType, setDialogType] = useState<EditItemType>("object");

  const [dialogTitle, setDialogTitle] = useState<string>("Edit Object");

  const [dialogAddItemType, setDialogAddItemType] =
    useState<EditItemType>("object");

  const [jason0, setJason] = useContext(AppContext)?.jason!;

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

  return (
    <>
      <main className="min-w-[100%] flex-grow p-3">
        <AddItemDialog
          dialogAddItemTypeProp={dialogAddItemType}
          dialogOptionsType={dialogType}
        />
        <Dialog>
          <DialogTrigger
            tabIndex={-1}
            id="itemOptionsDialog"
            className="hidden"
            data-path={""}
            data-type={""}
            autoFocus={false}
            onClick={() => {
              const $dialog: HTMLButtonElement =
                document.querySelector("#itemOptionsDialog")!;

              const objType = $dialog.getAttribute("data-type") as EditItemType;

              setDialogType(objType);
              setDialogTitle(
                `Edit ${
                  objType === "object"
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
              <DialogTitle className="text-2xl">{dialogTitle}</DialogTitle>
              <section className="flex flex-col gap-3.5 my-1.5">
                <Button
                  variant="default"
                  onClick={() => {
                    if (dialogType === "array") {
                      const $optionsDialog: HTMLButtonElement =
                        document.querySelector("#itemOptionsDialog")!;

                      const path = $optionsDialog.getAttribute("data-path")!;

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
                  Add Object
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    if (dialogType === "array") {
                      const $optionsDialog: HTMLButtonElement =
                        document.querySelector("#itemOptionsDialog")!;

                      const path = $optionsDialog.getAttribute("data-path")!;

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
                  Add Array
                </Button>
                <Button
                  variant="default"
                  onClick={() => {
                    setDialogAddItemType("value");

                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;

                    const $addItemDialog: HTMLButtonElement =
                      document.querySelector("#addItemDialog")!;
                    $optionsDialog.click();
                    $addItemDialog.click();
                  }}
                >
                  <GetIcon name="Value" />
                  Add Value
                </Button>
                <Button variant="secondary">
                  <GetIcon name="FromText" />
                  Add From Text
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => {
                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;
                    $optionsDialog.click();
                  }}
                >
                  <GetIcon name="Copy" />
                  Copy Path
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    const $optionsDialog: HTMLButtonElement =
                      document.querySelector("#itemOptionsDialog")!;
                    $optionsDialog.click();
                  }}
                >
                  <GetIcon name="Trash" />
                  Remove
                </Button>
              </section>
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <Jason />
      </main>
    </>
  );
}
