#!/bin/bash

for COUNT in $(seq 1 80000); do
    echo $(($RANDOM%2))
done
