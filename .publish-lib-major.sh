#!/bin/bash

# build the doc and create x.0.0 version
bunx @angular/cli build --base-href /c3-components/ c3-components-docs
git add .
git-cz
git push
npm version major --prefix projects/c3-components
bunx @angular/cli build c3-components
cd dist/c3-components
npm publish
