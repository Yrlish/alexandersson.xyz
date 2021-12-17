#!/bin/bash
set -x

rm -rf node_modules
yarn install --production=true
yarn build
