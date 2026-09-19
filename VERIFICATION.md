# Verification record — 19 September 2026

- **8/8** Node tests passed: discounted monthly fees, integer-sen validation, partial/overpayments, expired/suspended committee permissions, CSV safety, summary deltas, demo transactions and owner reversals.
- **12/12** Firestore Emulator tests passed: no anonymous/unverified/pending access to club data; own-record query isolation; no self-promotion or member fee changes; owner approval; expired committee denial; payment submission and verification transactions; prevention of fake receipts and member summary writes; activity permissions and own RSVP; bank-details restrictions; owner-only immutable-record reversals; attendance creation and duplicate rejection.
- **Browser workflows passed** in headless Chromium at desktop 1440px and mobile 390px: all principal navigation screens, tournament creation, expense recording, member role switch, payment submission, menu navigation and no page-level horizontal overflow. No JavaScript page errors were recorded. Wide tables deliberately scroll within their panel.
- **Standalone DEMO.html passed** when opened directly as a local file: owner dashboard, member role switch, mobile menu, partial payment submission, no page errors or page-level horizontal overflow.
- Desktop and mobile screenshots were generated and visually inspected for layout. The screenshots show labelled sample data, not club financial records.

## Not yet verified with your accounts

No production GitHub deployment, live Firebase project, email verification/reset delivery or bank QR was available. Complete the README acceptance check with your Firebase project before using real records or inviting members. Emulator tests demonstrate specified rules behaviour; they are not a claim of a comprehensive security audit.
