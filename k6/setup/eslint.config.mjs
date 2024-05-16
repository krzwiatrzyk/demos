import globals from "globals";
import pluginJs from "@eslint/js";


export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      "import/no-unresolved": 0,
      "no-restricted-globals": 0,
      "import/extensions": 0,
      "no-prototype-builtins": 0,
      "semi": 1,
      "quotes": 2
    }
  }
];