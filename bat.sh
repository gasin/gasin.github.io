#!/bin/bash

cp -r "C:\Users\gasin\Documents\html\gasin.github.io" "C:\Users\gasin\Documents"
cd "C:\Users\gasin\Documents\gasin.github.io"
git add --all
git commit -m "update"
git push -u origin master

exit 0