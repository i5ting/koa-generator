#! /bin/bash

npm link
rm -rf ../koa-generator-demo
mkdir ../koa-generator-demo
cd ../koa-generator-demo && koa2
