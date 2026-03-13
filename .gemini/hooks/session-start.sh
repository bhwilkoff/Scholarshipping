#!/bin/bash
# session-start.sh
#
# Silently orients Gemini at the start of every session.
# Output is injected into Gemini's context before the first user message.
# Kept deliberately short to minimize token cost.

GEMINI_MD="GEMINI.md"
SCRATCHPAD="SCRATCHPAD.md"

# Verify project files exist — if not, this is probably a fresh clone
if [ ! -f "$GEMINI_MD" ]; then
  echo "TEMPLATE NOTICE: GEMINI.md not found. Fill in the project identity section before starting work."
  exit 0
fi

echo "=== PROJECT CONTEXT ==="
echo ""
cat "$GEMINI_MD"
echo ""

# Inject only the Current State block from SCRATCHPAD — not the full file.
# This keeps session-start tokens low while still orienting Gemini.
if [ -f "$SCRATCHPAD" ]; then
  echo "=== CURRENT STATE (from SCRATCHPAD.md) ==="
  echo ""
  # Extract lines between "## Current State" and the first "---" separator
  awk '/^## Current State/{found=1; next} found && /^---/{exit} found{print}' "$SCRATCHPAD"
  echo ""
fi

echo "=== END OF SESSION CONTEXT ==="
