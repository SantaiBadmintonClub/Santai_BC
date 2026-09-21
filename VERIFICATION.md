# Verification — version 1.1, 20 September 2026

- 9/9 domain/workflow tests passed: ongoing volunteer roles, independent membership/payment plans, discounts, closure months, signed balances and year carry-forward, private cash versus shared surplus, attendance aggregation, recurring court dates, money/CSV safeguards, and payment/stock/publication/year-lock workflows.
- 13/13 Firestore Emulator tests passed: authentication and approval gates, own-record queries, role/scoped access, appointment controls, private immutable bounded proofs, stable payment approval IDs, requests, closed years, publication fields, stock/court permissions, and signed openings.
- Desktop and 390px mobile browser workflows passed in Chromium: navigation, publication preview/publish, member fee-change request, screenshot upload and preview, finance fee approval and payment verification, stock use, monthly court generation, member mobile account access. No JavaScript page errors or page-level horizontal overflow. Tables scroll within their containers.
- Standalone demo was checked as a local file, and desktop/mobile screenshots were visually reviewed. All demonstration records are fictional.

## Production acceptance still required

No live Firebase project, deployment, email delivery, bank QR or real membership login mapping was available. Follow README acceptance checks before using real records. The workbook was reviewed without editing it; historical data has not been imported. Emulator tests verify the listed scenarios, not a comprehensive security audit.
