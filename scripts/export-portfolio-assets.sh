#!/usr/bin/env bash
set -euo pipefail

# Resolve the repository root so this script works from any working
# directory (the Hugo project lives in src/, so cwd is not always root).
cd "$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

source_dir="brand/portfolio"
output_dir="brand/portfolio/exports"

if ! command -v resvg >/dev/null 2>&1; then
  echo "resvg is unavailable; SVG sources remain canonical."
  exit 0
fi

mkdir -p "$output_dir"
for source in "$source_dir"/*.svg
do
  name="$(basename "$source" .svg)"
  if ! resvg "$source" "$output_dir/$name.png"
  then
    echo "Could not export $source; SVG source remains canonical."
  fi
done
