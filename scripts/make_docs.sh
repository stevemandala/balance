#!/bin/bash
# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This software may be used and distributed according to the terms of the
# GNU General Public License version 2.

# Exit if any error occurs
set -e

usage() {
  echo "Usage: $0"
  echo ""
  echo "Build balance documentation. Must be executed from root of balance repository."
  echo ""
  exit 1
}

while getopts 'h:' flag; do
  case "${flag}" in
    h)
      usage
      ;;
    *)
      usage
      ;;
  esac
done

echo "--------------------------------------------"
echo "Pre-process Docusaurus docs"
echo "--------------------------------------------"
# For idempotency, remove any content between the autogen delimiters
sed -i '/<\!--AUTOGENERATED START-->/,/<\!--AUTOGENERATED END-->/{/^<\!--AUTOGENERATED START-->/!{/<\!--AUTOGENERATED END-->/!d}}' website/docs/docs/overview.md || exit

# Copy the contents of README.md -> website/docs/docs/overview.md
sed -i -e '/<\!--AUTOGENERATED START-->/r README.md' \
    -e 's/<\!--AUTOGENERATED END-->/&/' website/docs/docs/overview.md || exit

exit

echo "-----------------------------------"
echo "Generating API reference via Sphinx"
echo "-----------------------------------"
cd sphinx || exit
make html
cd .. || exit

echo "--------------------------------------------"
echo "Moving Sphinx artifacts to Docusaurus"
echo "--------------------------------------------"
mkdir -p "website/static/api_reference/"
cp -r sphinx/_build/* website/static/api_reference/ || exit

echo "-----------------------------------"
echo "Building tutorial HTML"
echo "-----------------------------------"
jupyter nbconvert tutorials/balance_quickstart.ipynb --execute --to html \
    --output-dir website/static/html/tutorials

echo "-----------------------------------"
echo "Getting Docusaurus deps"
echo "-----------------------------------"
cd website || exit
yarn

echo "-----------------------------------"
echo "Building static Docusaurus site"
echo "-----------------------------------"
NODE_OPTIONS=--openssl-legacy-provider yarn build


echo "--------------------------------------------"
echo "Clean up"
echo "--------------------------------------------"
sed -i '/<\!--AUTOGENERATED START-->/,/<\!--AUTOGENERATED END-->/{/^<\!--AUTOGENERATED START-->/!{/<\!--AUTOGENERATED END-->/!d}}' website/docs/docs/overview.md || exit
