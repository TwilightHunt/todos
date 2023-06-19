#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commin -m 'deploy'
git push -f git@github.com:TwilightHunt/todos.git master:gh-pages

cd -