#!/bin/bash

cd issues-back/
npm install
npm run-script test2
cat test_2.json
#npm run-script build
cd ../
cd tasks-back/
npm install
npm run-script test2
cat test_2.json
#npm run-script build
cd ../
cd tests-back/
npm install
npm run-script test2
cat test_2.json
#npm run-script build
cd ../