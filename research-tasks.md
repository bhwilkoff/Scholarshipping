# Research Project: Merit-Based Scholarship Expansion

**Objective**: Identify, vet, and integrate 10-15 high-value merit-based scholarships into the `Scholarshipping` database, focusing on "Corporate Merit" (Batch 2).

**Methodology**: Systematic Search and Multi-Stage Screening (Data Curation Protocol).

## Task List
- [x] **[1. Scouter Phase]**: Search for 15+ merit-based scholarships from Corporate providers (e.g., Google, Apple, Microsoft, Amazon, etc.) using `google_web_search`.
    - **Criteria**: Merit/Academic/Leadership/Service focused, $1,000+ award, National or Major Regional.
    - **Output**: Name, Provider, Official URL.
- [x] **[2. Verifier Phase]**: Visit each URL to confirm legitimacy, active 2025/2026 cycle, and extract full details for:
    - Generation Google Scholarship
    - Adobe Design Circle Scholarship
    - McDonald’s HACER National Scholarship
    - Women at Microsoft Scholarship
    - Oracle Corporate Scholars Program
    - Adobe Research Women-in-Technology Scholarship
    - Wells Fargo Scholarship Program for People with Disabilities
    - Black at Microsoft (BAM) Scholarship
    - HOLA at Microsoft Scholarship
    - Microsoft Disability Scholarship
- [x] **[3. Architect Phase]**: Transform verified data into the `js/scholarships.js` format and integrate.
    - **Deduplication**: Ensure no overlap with existing entries.
    - **Verification**: Set `verified: true` and `lastVerified: 2026-03-13`.
- [ ] **[4. Validation]**: Verify the new scholarships appear correctly in the UI.

## Current Status
- **Phase**: 4. Validation
- **Progress**: 90%
