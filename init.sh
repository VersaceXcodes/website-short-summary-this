#!/bin/bash
# Start Backend
cd /app/backend
npm start &

# Start Frontend
cd /app/vitereact
npm run dev -- --host &

wait
