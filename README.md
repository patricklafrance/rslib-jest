# rslib-jest

Reproduction for issue [670](https://github.com/web-infra-dev/rslib/issues/670).

To reproduce:

- `pnpm install`
- `pnpm test`

Error:

```bash
XYZ\node_modules\.pnpm\@rslib+core@0.3.1_typescript@5.5.4\node_modules\@rslib\core\dist\index.js:1
({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import * as __WEBPACK_EXTERNAL_MODULE__compiled_rslog_index_js_c302f6e3__ from "../compiled/rslog/index.js";
                                                                                    ^^^^^^

SyntaxError: Cannot use import statement outside a module

    3 | test("my test", () => {
    4 |     const config = defineConfig({
> 5 |         lib: [{
    |               ^
    6 |             format: "esm"
    7 |         }]
    8 |     });

    at Runtime.createScriptFromCode (node_modules/.pnpm/jest-runtime@29.7.0/node_modules/jest-runtime/build/index.js:1505:14)
    at Object.<anonymous> (tests/myTest.test.ts:5:15)
```

