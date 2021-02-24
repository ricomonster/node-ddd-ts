#!/bin/bash

undoMigration() {
  echo " -> Starting undo migration..."
  echo ""
  npx sequelize db:migrate:undo
  echo " -> Undo migration completed."
  echo ""
}

if ls ./src/infra/database/migrations/*.ts &> /dev/null; then
  undoMigration
else
  echo "No migration to undo."
fi