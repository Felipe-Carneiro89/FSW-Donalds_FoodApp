import { dirname } from "path";
import { fileURLToPath } from "url";
import simpleImportSort from "eslint-plugin-simple-import-sort"; 11.2k (gzipped: 3.9k)
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
