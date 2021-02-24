#!/bin/bash

migration() {
  echo " -> Compiling migration scripts..."
  echo ""
  npx tsc -t es2017 -esModuleInterop -module CommonJS -outDir ./.migration-dist/ ./config/database.ts
  npx tsc -t es2017 -esModuleInterop -module CommonJS -outDir ./.migration-dist/migrations ./src/infra/database/migrations/*.ts
  echo " -> Compilation completed."
  echo ""
  echo " -> Starting migration..."
  echo ""
  npx sequelize db:migrate
  echo " -> Migration completed."
  echo ""
}

if ls ./src/infra/database/migrations/*.ts &> /dev/null; then
  migration
else
  echo "No migration to run."
fi