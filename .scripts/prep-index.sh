#!/usr/bin/env bash

# Run this before dev and build because it appears to be a huge hassle to
# set a PUBLIC_URL like in create-react-app in Svelte without requiring
# some Rollup plugins...

set -euo pipefail

URL_TO_SET=${PUBLIC_URL:-""}
URL_TO_SET=$(echo "$URL_TO_SET" | sed 's/\//\\\//g')

sed s/%PUBLIC_URL%/"$URL_TO_SET"/g ./src/index.template.html > ./public/index.html
