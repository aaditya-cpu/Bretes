"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_express = __toESM(require("express"));
var import_path = __toESM(require("path"));
const app = (0, import_express.default)();
app.use(import_express.default.static(import_path.default.join(__dirname, "..", "public")));
app.use("/bootstrap-css", import_express.default.static(import_path.default.join(__dirname, "..", "node_modules", "bootstrap", "dist", "css")));
app.use("/bootstrap-js", import_express.default.static(import_path.default.join(__dirname, "..", "node_modules", "bootstrap", "dist", "js")));
app.get("/", (req, res) => {
  res.sendFile(import_path.default.join(__dirname, "..", "public", "index.html"));
});
app.listen(3e3, () => {
  console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map
