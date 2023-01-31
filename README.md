Sample repo showing a ts-jest problem with preact and preact-testing-library
To reproduce run

```
yarn install
yarn jest
```

You will get 
```
$ NODE_OPTIONS=--experimental-vm-modules jest
 FAIL  src/foo.test.tsx
  ● Test suite failed to run

    Must use import to load ES Module: /Users/user/test-ts-jest/node_modules/preact/dist/preact.mjs

    > 1 | import { createRef, FunctionComponent } from 'preact';
        | ^
      2 | import React from 'preact/compat';
      3 | import { useState } from 'preact/compat';
      4 |

      at Runtime.requireModule (node_modules/jest-runtime/build/index.js:943:21)
      at Object.<anonymous> (src/foo.tsx:1:1)
      at Object.<anonymous> (src/foo.test.tsx:1:1)

(node:23660) ExperimentalWarning: VM Modules is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
```
