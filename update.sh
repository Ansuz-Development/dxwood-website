#!/bin/bash

git pull origin main

yarn

yarn build

APP="dxwood-website-5000"

IDS=`pm2 id $APP`;

# start the app
if [ "$IDS" = "[]" ]; then
  pm2 start ecosystem.config.js --env production
else
  pm2 reload ecosystem.config.js
fi;
