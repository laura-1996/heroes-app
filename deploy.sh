#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn build

# navigate into the build output directory
cd dist


git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:laura-1996/heroes-app.git master:gh-pages

cd -