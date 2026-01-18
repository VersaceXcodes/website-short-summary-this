#!/bin/bash
cd /app/vitereact
npm install
npm run dev -- --host &
echo "Frontend server started"
