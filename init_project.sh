#!/bin/bash

# Directories to be created
directories=(
  "public/css"
  "public/img"
  "public/js"
  "src/controllers"
  "src/middleware"
  "src/routes"
  "src/types"
  "src/views/admin"
  "src/views/website"
)

# Create directories if they don't exist
for dir in "${directories[@]}"; do
  if [ ! -d "$dir" ]; then
    mkdir -p "$dir"
    echo "Created directory: $dir"
  fi
done

# Files to be created
files=(
  "src/app.ts"
  "src/index.ts"
  "src/views/website/index.html"
  "src/views/admin/index.html"
)

# Create files if they don't exist
for file in "${files[@]}"; do
  if [ ! -f "$file" ]; then
    touch "$file"
    echo "Created file: $file"
  fi
done

echo "Initialization complete."

