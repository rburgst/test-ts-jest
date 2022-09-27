Sample repo showing a ts-jest problem with jsdom testEnvironment

To reproduce run

```
pnpm install
pnpm jest
```

You will get 
```
    SyntaxError: Unexpected token 'export'

    > 1 | import { createRef } from 'preact'
        | ^
      2 |
      3 |
      4 | export function foo() {

      at Runtime.createScriptFromCode (node_modules/.pnpm/jest-runtime@29.0.3/node_modules/jest-runtime/build/index.js:1678:14)
      at Object.<anonymous> (src/index.ts:1:1)
      at Object.<anonymous> (src/index.test.ts:1:1)
```

I tried switching the whole project over to ESM but that showed a similar problem (see `esm` branch).