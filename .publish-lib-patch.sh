#!/bin/bash
git add .
git-cz
git push
npm version patch --prefix projects/c3-components
bunx @angular/cli build c3-components
cd dist/c3-components
npm publish
