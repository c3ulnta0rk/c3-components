#!/bin/bash
bunx @angular/cli build --base-href /c3-components/ c3-components-docs 
git add . 
git-cz 
git push
