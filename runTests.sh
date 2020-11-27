#!/bin/bash

cd issues-back
npm run-script test2
#npm run-script build
cd ..
cd tasks-back
npm run-script test2
#npm run-script build
cd ..
cd tests-back
npm run-script test2
#npm run-script build
cd ..