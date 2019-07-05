
Demo of how umd foreign-libs behave on node

TL;DR - not a good idea

# Run the Demo

```
clj -m cljs.main -co '{:foreign-libs [{:file "my-foreign-lib.js" :provides ["my.foreignlib"]}]}'  -c test -re node  --repl

```

Once the repl starts

`(require 'my.foreignlib)`

Note that the 'node' test of the umd module fails, ie this bit: `typeof exports === 'object' && typeof module !== 'undefined' `

so it prints out 'not node?'

Now, do the require again:

`(require 'my.foreignlib)`

and see that the foreign lib script is re-run.