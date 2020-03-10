#!/usr/bin/env bash

COLOUR_GREEN="\x1b[32;01m"
COLOUR_RED="\x1b[31;01m"
COLOUR_RESET="\x1b[39;49;00m"

CITD_IP_ADDR=`ipconfig getifaddr en0`

echo -e $COLOUR_GREEN"http://$CITD_IP_ADDR:8080/"$COLOUR_RESET

# open chrome
open http://localhost:8080/

# reset editor
osascript -e 'quit app "Code"'
code src

# start watch script
docker-compose up
