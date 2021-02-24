#!/bin/bash

undoAll() {
  echo " -> Starting undoing all migration..."
  echo ""
  npx sequelize db:migrate:undo:all
  echo " -> Undoing all migration, complete."
  echo ""
}

if ls ./src/infra/database/migrations/*.ts &> /dev/null; then
  undoAll
else
  echo "No migration to undo."
fi