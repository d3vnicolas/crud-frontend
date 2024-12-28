import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.jsx", "**/*.js"], // Alvo para arquivos JSX e JS
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest", // Suporte à última versão do ECMAScript
        sourceType: "module", // Habilita `import/export`
        jsx: true, // Habilita JSX
      },
    },
    rules: {
      semi: ["error", "never"], // Regra para evitar ponto e vírgula
    },
  },
];

export default eslintConfig;
