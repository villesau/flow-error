**Flow error**
Repro steps:
1. run `yarn` or `npm install`
2. checkout branch `inlined-declaration`
3. run `yarn flow` -> no error like intended
4. checkout branch `with-libdef`
5. run `yarn flow` -> error, not intended
