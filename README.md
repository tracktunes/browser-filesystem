# browser-filesystem

A filesystem for the browser based on HTML5 Filesystem API.

This repository rewrites [bro-fs](https://github.com/vitalets/bro-fs)
from scratch, in Typescript.

The first release targets an API with just the following functions:

```
appendFile()
copy()
getEntry()
init()
mkdir()
readFile()
readdir()
rename()
rmdir()
stat()
unlink()
usage()
writeFile()
```
