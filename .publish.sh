git add . \
&& git-cz \
&& git push \
&& bunx @angular/cli build c3-components-docs \
&& rm -rf docs \
&& cp -r dist/c3-components-docs/browser docs \
&& bunx @angular/cli build c3-components \
&& cd dist/c3-components \
&& npm publish
