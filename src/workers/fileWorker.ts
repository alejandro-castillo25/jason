import JSON5 from "json5"; //?Reverse Supported (Obviously) .json/.jsonc/.json5
import TOML from "smol-toml"; //?Reverse Supported .toml
import Papa from "papaparse"; //? Reverse Supported .csv
import { XMLParser } from "fast-xml-parser"; //? Reverse supported .xml
import yaml from "js-yaml"; //? Reverse supported .yaml/.yml
// @ts-ignore
import css2json from "css2json";
import type { Workers } from "../ui/util";

self.addEventListener("message", (event) => {
  const { file } = event.data;
  const { type } = event.data as { type: Workers };

  const reader = new FileReader();

  reader.onload = () => {
    try {
      let json: any;

      if (type === "json5") json = JSON5.parse(reader.result as string);
      if (type === "toml") json = TOML.parse(reader.result as string);
      if (type === "csv")
        json = Papa.parse(reader.result as string, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
        }).data;
      if (type === "xml") {
        const xmlParser: XMLParser = new XMLParser({
          ignoreAttributes: false,
          allowBooleanAttributes: true,
          attributeNamePrefix: "@_",
        });

        json = xmlParser.parse(reader.result as string);
        
      }

      if (type === "yaml") {
        //! Multiple keys will be overridden
        json = yaml.load(reader.result as string, {
          json: true,
        });
      }

      if (type === "html") {
        const xmlParser: XMLParser = new XMLParser({
          ignoreAttributes: false,
          allowBooleanAttributes: true,

          attributeNamePrefix: "@_",
          htmlEntities: true,
        });

        json = xmlParser.parse(reader.result as string);
      }

      if (type === "css") json = css2json(reader.result as string);

      self.postMessage({ json });
    } catch (error: any) {
      self.postMessage({ error: error.message });
    }
  };

  reader.onerror = () => {
    self.postMessage({ error: "Failed to read file" });
  };

  reader.readAsText(file);
});
