#!/bin/bash
cd /home/kavia/workspace/code-generation/kavia-translatex-38739-31046a72/kavia_translatex
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

