# Multi-Agent Scholarship Expansion Plan

## Objective
Quickly and accurately expand the Scholarshipping database, focusing on the **Merit / Essay / Service** category, to reach a target of 100+ verified entries.

## Agent Roles & Workflow

### 1. Agent: The Scouter (Generalist)
- **Task**: Conduct deep-dive searches on specific platforms (Going Merry, Scholarships360, Fastweb) to find merit scholarships.
- **Output**: A raw markdown list of scholarship names, providers, and official website URLs.
- **Focus**: Class of 2026 eligibility, $1,000+ awards, national or major regional scope.

### 2. Agent: The Verifier (Generalist)
- **Task**: Visit each URL provided by The Scouter.
- **Verification Criteria**:
    - Is the link active?
    - Is the deadline for 2025/2026 visible?
    - Does it match the "Merit" criteria (Academics, Leadership, Service)?
    - Extract details: Amount, Deadline, GPA requirement, Major restrictions, Description.
- **Output**: A structured JSON-like list of verified scholarship objects.

### 3. Agent: The Architect (Main Agent / Gemini CLI)
- **Task**: Integrate the verified data into `js/scholarships.js`.
- **Quality Control**: 
    - Assign unique IDs (starting from 1011 for Merit).
    - Ensure `lastVerified` is set to the current date.
    - Standardize `likelihood` based on award volume/selectivity.
    - Deduplicate against existing entries.

## Execution Batches
- **Batch 1**: National Prestige Awards (Coca-Cola, Reagan, etc.) - *In Progress*
- **Batch 2**: Corporate Merit (Google, Apple, Microsoft, etc.)
- **Batch 3**: Foundation & Niche Merit (Elks, VFW, etc.)
- **Batch 4**: Regional Powerhouses (State-specific merit like Bright Futures)

## Immediate Next Step
Task a `generalist` sub-agent to find 10-15 high-value Merit scholarships specifically from "Scholarships360" or "Going Merry" lists.
