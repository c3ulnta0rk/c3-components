git add . \
&& git-cz \
&& git push \
&& bunx @angular/cli build c3-components \
&& cd dist/c3-components \
&& npm publish
