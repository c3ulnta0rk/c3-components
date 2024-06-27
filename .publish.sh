git add . \
&& git-cz \
&& git push \
&& ng build c3-components --prod \
&& cd dist/c3-components \
&& npm publish 
