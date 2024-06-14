#!/bin/sh
npm run build
cp -r dist/* build/
echo "build complete, now nginx will serve"