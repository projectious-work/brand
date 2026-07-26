#!/usr/bin/env bash
set -euo pipefail

template="brand/portfolio/social-preview-template.svg"
examples="brand/portfolio/examples.yaml"

test -f "$template"
test -f "$examples"
grep -q 'width="1280" height="640"' "$template"
grep -q '\[PROJECT\]' "$template"
grep -q '\[CATEGORY\]' "$template"
grep -q '\[STATUS\]' "$template"

for label in \
  "Usable project" \
  "Working prototype" \
  "Applied research" \
  "Supporting asset" \
  "Idea / implementation starting" \
  "Archived"
do
  grep -q "$label" content/docs/portfolio/status.md
done

grep -q "TRADEMARK.md" content/docs/portfolio/social-previews.md
grep -q "brand/PROVENANCE.md" content/docs/portfolio/social-previews.md
grep -q "Do not fabricate" content/docs/portfolio/diagrams.md

for project in aibox processkit ai-market-research KubeClaw
do
  grep -q "project: $project" "$examples"
done
