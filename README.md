# Santai Badminton Club v1.2

Version 1.2 updates the volunteer permissions, attendance workflow, month-specific Planner, attendance payments and vendor receipts. It retains GitHub for source code and Firebase Hosting, Authentication and Firestore for the portal. No OneDrive dependency is added.

## Try the demonstration

Open **DEMO.html** in Edge. Click **Explore demonstration**, then change **View as** to Owner, Administrator, Fee collector, Court coordinator, Shuttle coordinator or Member. All examples are fictional; changes reset on reload. The sample month has explicitly approved example fees. Other unset months show no fee.

The actual website is in `docs/`. Preview it with VS Code Live Server; do not double-click `docs/index.html`. No production build step is needed. `START-HERE.html` contains this guide in a browser-friendly format.

## Permissions

| Role | Visibility | Changes allowed |
|---|---|---|
| Owner | All screens and records | All operations; appoint/remove Administrators |
| Administrator | Same operational screens, including Settings | Club settings, membership/committee management, finance, activities, attendance, stock and year controls; cannot change the Owner or appoint/remove Administrators |
| Committee | All operational records, member accounts, payment screenshots, vendor receipts, stock and Activity log; no Settings screen | Only assigned finance, activities or stock jobs; may propose attendance and add a guest for court review |
| Member | Own account/payment evidence; activities; all-member attendance summary; published statements | Own interest response, fee requests and payment submissions |

Assign several jobs to one volunteer if appropriate. Committee terms have no mandatory expiry. An explicit expired term removes committee visibility and editing rights. Administrator access is broad: assign it only to someone entrusted with club administration. Only the Owner can appoint this role through **Members → Manage**.

All committee members intentionally receive read access to financial details and evidence, as requested. Ordinary members do not. The payment bank details remain available to members where needed for payment. Hiding Settings does not hide the club payment QR.

The **Activity log** screen is visible to every committee member. Settings retains the full private backup and financial-year controls for the Owner and Administrator.

## Court events and attendance

Use **Courts & activities** to create a monthly Monday/Wednesday schedule, normally 21:00–23:00 Malaysia time, or add tournaments and friendlies. The schedule does not reserve courts with the venue. Marking a scheduled booking in this portal should follow the venue's confirmation.

**Cancel event** changes its badge to dark red on light brown and removes **I'm interested**. Events remain in the record. Existing attendance fees are not silently deleted when an event is cancelled: the court coordinator reviews its attendance sheet and marks erroneous attendance Absent. Confirmed Present is blocked for cancelled events and closure months. Once attendance has been confirmed, the event date cannot be changed; create a replacement event instead.

### Attendance sheet

1. A registered member clicks **I'm interested**. Their response appears in that event's attendance sheet automatically; it is not yet confirmed attendance. Other users see fresh data on **Refresh**.
2. Any committee member opens **Attendance** and may propose Present/Absent. A later member response or committee proposal never overwrites the coordinator's final decision.
3. The court coordinator, Owner or Administrator uses **Confirm / edit** to set final Present/Absent. Repeating confirmation updates the same record and does not create duplicate fees.
4. The coordinator can record a registered member even without an interest response. The sheet lists active registered members and previously recorded participants.
5. Only confirmed Present counts in the monthly summary. For a registered member, a fee is raised only if that particular month's Planner arrangement is Attendance. A monthly or exempt arrangement creates no extra attendance charge.

### AhliMendatang guests have no login

On the attendance sheet, choose **+ AhliMendatang / walk-in**. Select the existing returning guest, or enter a new guest name. A guest record is separate from a registered member account: no email, password or sign-in is created. Reuse the same guest record across events and months. For different people with identical names, use a distinguishing initial or nickname.

Adding a guest proposes attendance. The court coordinator then confirms it. Confirmed guest attendance raises the applicable attendance fee, initially RM15. The fee collector records the guest's cash/bank payment against the specific visit. Guests cannot upload their own receipts through the portal because they have no login; finance can attach evidence when recording payment.

An existing genuine registered person who uses attendance-based fees remains a registered member. Changing payment method does not make them an unregistered guest.

### Monthly attendance summary

Every active member can open **Attendance summary** and select the calendar year/month. It lists registered members, including zero attendance after the roster has been synchronised. It counts confirmed Present only, excluding cancelled events.

Under **AhliMendatang**, guests attending **more than three times (4+)** that month appear by name. Guests with one to three visits are combined in the other-walk-in count. This is a reporting threshold, not a fee discount, monthly cap, registration or membership conversion. Registered members stay in the registered-member section. Each confirmed event counts as one visit.

Tables scroll horizontally on smaller screens. Print/save PDF is available. The attendance layouts follow AttendanceSheet.jpg and AttendanceSummary.jpg: a dated event sheet and a monthly date-column grid, with separate registered-member and AhliMendatang sections, blue headers and compact borders. ✓ means confirmed Present; × means confirmed Absent; blank means unconfirmed. An interest response is not a present mark. Cancelled dates show C and do not count. Event-sheet printouts hide committee action controls.

## Month-specific Planner

**Club finances → Planner** is the only interface for monthly fee corrections. Every unset month defaults to **— / No fee / exempt**. Setting one month never changes an adjacent month.

Click a member/month cell, choose Monthly fee, Attendance or No fee/exempt, enter the monthly amount if applicable, and give an approval/correction reason. RM80 is the normal reference rate; enter RM50 for an approved RM50 month. The saved amount immediately creates or updates that month's charge and balance. There is no separate Issue fees step. Attendance/exempt sets the monthly charge to zero. Existing cash payments remain unchanged, so reducing a fee can create credit.

A member's fee request identifies one month. Finance reviews it in **Fee Request Verification**; approval uses the same Planner correction workflow. Requests do not change fees until approved. Existing attendance charges are not automatically repriced by later Planner changes: the court coordinator reviews/reconfirms the affected attendance if correction is intended.

**Rates / closure** records the committee's base rates and announced decisions. Club-wide rates still apply from their effective month until another rate decision; this is separate from individual month-only plans. Closure applies only to the selected month. Existing monthly fees require deliberate Planner correction if waived.

## Finance tabs

| Tab | Purpose |
|---|---|
| Planner | Set/correct each member's fee for one month |
| Payment Summary | Current calculated **PenyataAhli only**; no Print balance section in this tab |
| Payment | Payment register plus attendance fees, paid amounts, pending balances and credits |
| Expenses | Paid expenses and optional vendor receipts |
| Payment Verification | Review member submissions against bank/cash records |
| Fee Request Verification | Approve/reject member requests for a particular month |

### Attendance settlement

Each new attendance payment is allocated to one named participant and event. The Payment tab retains both settled and pending visits. Partial payments are supported: RM5 against RM15 shows RM10 pending; the remaining RM10 settles the visit. A new payment cannot exceed the currently unpaid fee. Concurrent transactions recheck the outstanding amount.

If one bank transfer pays for several visits, record its portions against those visits using the same bank reference; the portions must add up to the transfer. A transfer covering monthly fees and attendance similarly needs separate portions. Reviewers still check for duplicate external bank transfers: different submissions with the same reference are not automatically merged.

Monthly payments may cover multiple months or build an advance credit. Monthly and attendance balances remain separate. All attendance receipts, including those from registered members on an attendance plan, are grouped under AhliMendatang in financial statements.

Finance can **Reverse** an incorrect payment or expense with a reason, then enter the corrected record. Reversal retains the original record and evidence rather than erasing history. If attendance is changed to Absent after payment, its fee becomes zero and the Payment tab displays the resulting credit. No automatic refund or credit transfer is made. Resolve that credit with the fee collector; do not record a fictitious payment to hide it.

### Payment screenshots and vendor receipts

Both are optional PNG/JPEG/WebP images. The browser accepts an image up to 15 MB, compresses it to JPEG (at most 1,600 pixels on its longest side) and caps the saved data URL at 250,000 characters. Check that the amount, date and reference remain readable in the preview; crop an oversized image if necessary. PDF receipts are not supported in this revision: upload a legible image/photo instead.

Images are stored in separate private Firestore documents and loaded on demand, not with every dashboard refresh. Payment evidence is visible to its member and all committee members. Vendor receipts are committee-only. Images are immutable: reject/reverse and re-enter an incorrect record. Neither image type is published in member statements. A screenshot by itself never verifies receipt of money.

## Statements, years and stock

**Preview / publish statements** produces a member-visible PenyataAhli/Print snapshot at the selected cutoff. **Payment Summary** shows the current computed PenyataAhli; Member statements shows the last published snapshot. Republish after corrections. Members may print/save PDF and export the balance table as CSV for sharing through your usual WhatsApp process.

Positive member balance means credit; negative means arrears. Club opening cash is distinct from member carry-forwards. Club cash includes opening funds; the shared statement's current-year surplus/deficit excludes them. Ledger dates use both year and month.

Enter agreed initial balances only once under **Planner → Opening balance**. Later years carry automatically. Do not re-enter the same balance every January. Existing opening entries are not overwritten in the interface; reconcile any erroneous initial entry before going live. Owner/Administrator can close and reopen financial years in Settings. Reopening and changing prior-year records can affect later carry-forwards; review and republish affected statements.

The stock coordinator records shuttle purchases, use and adjustments in individual shuttlecocks (one tube of 12 = 12 units). Buying stock and recording its cash expense are separate tasks. Adjustments correct stock records while retaining history. The Owner/Administrator sets the low-stock threshold in Settings.

## Updating an existing installation

1. Back up the current source and database. Keep private data outside the public GitHub repository.
2. Preserve your existing `docs/firebase-config.js` values and Firebase project selection. Replace the application files with this release.
3. Deploy **both** the new Firestore rules/index configuration and website. Do not run the old website against the new rules. No new database reset is required.
4. In **Settings → Synchronise registered roster**, populate the name-only attendance roster for existing registered members. Future membership approvals/updates maintain it automatically.
5. Review existing Planner months. Previously saved explicit plans now apply only to their own month. Existing issued historical charges remain recorded and visible; they are not silently zeroed. Where a historical charge has no exact-month plan, review that cell and save the intended arrangement. Set any required future months individually.
6. If v1.0/v1.1 has real attendance or guest data, reconcile it before using the new attendance summary. Old `attendance` records have no final `status`, and old guests shared the `walkin` identity. They are not automatically inferred as confirmed visits or matched to new guest IDs. Use the original records to create named guest identities and reconcile/migrate history with support. **Do not blindly re-enter previously charged visits**, which could duplicate financial charges. Existing unallocated attendance receipts are labelled unallocated and are not assumed to settle new visits. Historical migration is not automated in this package.
7. Existing `adhoc` login accounts are not deleted. If they were created for people who never registered, suspend their portal access through Members and disable their Authentication account in Firebase Console after reviewing their history. Preserve financial records; create guest identities for future visits. A real registered attendance-paying member may keep their login.
8. Existing pending attendance-payment submissions without a session allocation need review and re-submission against the correct visit. Monthly submissions remain supported.
9. Check balances and assigned responsibilities before inviting members back. Appoint an Administrator only if needed.

The previously reviewed Excel history has not been imported or changed. Its unresolved dates/classification remain awaiting the Fee Collector's confirmation.

For a v1.0 database, also reconcile the old `summaries/all` club opening into a `yearOpenings` entry for the original start year. The application warns if that old opening appears unmigrated. Do not enter a second opening if prior transactions already carry it forward.

## Firebase and GitHub setup / deployment

1. Use your Firebase project's public web app configuration in `docs/firebase-config.js`. Never place an Admin SDK/service-account private key in browser code.
2. Enable Email/Password Authentication and email verification. Create a default Cloud Firestore Standard database, and use the supplied rules rather than test-mode rules.
3. In the extracted project folder in VS Code's terminal:

```sh
npm ci
npx firebase login
npx firebase use --add
npx firebase deploy --only firestore:rules,firestore:indexes,hosting
```

Select your own Firebase project. `firebase.json` already serves `docs/` with Firebase Hosting; do not overwrite it with a new initializer. If PowerShell blocks `npx.ps1`, use the Command Prompt terminal or `npx.cmd`.

4. Add the resulting Hosting domain to Authentication's authorised domains if needed. Add localhost if using live Authentication in local development.
5. For a new installation, register/verify your own account, find its UID in Firebase Authentication, then use Firebase Console to set that UID's `members` document to `role: owner`, `status: active`, `approvedBy: your UID`, retaining the other registration fields. Existing Owner accounts continue working.
6. Enter the bank details and genuine QR, verify its beneficiary, approve member registrations, assign roles, synchronise the roster, and enter agreed opening balances. Select fees in Planner before publishing statements.
7. Use VS Code Source Control to stage the changed source, enter a commit message such as `Add attendance workflow and monthly fee controls`, commit, and push to GitHub. GitHub holds the source; Firebase Hosting serves this package. Do not commit the club workbook, private backups or real receipt images.

No live deployment has been performed as part of this release.

## Verification and operating limits

Run `npm test` for calculation/workflow tests and `npm run test:rules` for the Firestore Emulator tests (requires Java). Tests use the demo-santai local project, not your live database. Expected access denials in negative tests are normal. See VERIFICATION.md for completed checks.

Before go-live, use separate real test logins for Owner, Administrator, each committee job and Member. Confirm email delivery, appointment/revocation, own-record privacy, read-only committee screens, final attendance permission, payment verification and your real QR beneficiary. Compare financial totals to the agreed source records.

Small compressed images share your Firestore quota with other records; receipts increase storage use. At the image cap, 360 images use approximately 90 MB of image text before other document/index overhead. Monitor usage and agree a retention policy as records grow. No automatic deletion or OneDrive upload is included. Full private backup includes both image collections. Automated restore, bank integration and WhatsApp sending are not included.

This version loads authorised history on Refresh. Date-window pagination is a future improvement if multi-year data grows substantially. Application audit entries are useful operational records, not a tamper-proof log of Firebase Console administrators' actions.
