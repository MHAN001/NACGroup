#!/bin/bash

BASEDIR=$(dirname "$0")
mysql -u admin -p'Nacg1234' -h nacg.cjebk6yr79rx.us-east-2.rds.amazonaws.com -P 3306 nacg < ${BASEDIR}/reconstruct_db.sql