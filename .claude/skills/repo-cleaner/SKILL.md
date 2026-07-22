---
name: repo-cleaner
description: >
  An automated repository cleaner and structure auditor. Use this to scrub OS junk 
  (.DS_Store, Thumbs.db), delete orphaned log files, clear temporary AI/testing 
  artifacts, and verify that the project structure strictly adheres to professional 
  framework standards (e.g. Next.js App Router).
---

# Repo Cleaner & Prepper

## What this does
Over the course of development, repositories accumulate invisible junk files, stale logs, temporary testing directories, and misplaced configuration files. This skill turns you into an automated repository custodian. It forcefully scrubs unnecessary artifacts and enforces a pristine, professional file structure.

Use this before a major commit, before handing a project off to a client, or whenever the workspace feels cluttered.

## The Workflow

### 1. Scrub OS Junk
Run commands to seek and destroy operating system artifacts that should never be in a clean repository:
```bash
find . -name ".DS_Store" -type f -delete
find . -name "Thumbs.db" -type f -delete
```

### 2. Purge Stray Logs and Temp Files
Find and remove temporary log files that sit at the root or within source directories (excluding legitimate directories like `.git` or `.next`).
```bash
find . -name "*.log" -not -path "*/node_modules/*" -type f -delete
```
*Note: Also look for and remove temporary AI folders (e.g., `/tmp/deep-research/`, `.playwright-cli/`, `.frontend-verify/`) unless they are actively being used for a running task.*

### 3. Audit Framework Structure
Analyze the root directory using `list_dir`. Check the folder structure against the specific framework being used (e.g., Next.js, React, Vite, Node).
- **Enforce Rules**: Ensure source code isn't dumped in the root. For Next.js, ensure routing is properly isolated to `app/` or `pages/`, components are in `components/`, and static assets are in `public/`.
- **Config Check**: Verify that config files (`package.json`, `tsconfig.json`, `next.config.ts`, `eslint.config.js`) exist in the root and haven't been accidentally nested.

### 4. Untracked / Stale File Check
Run `git status`. Look for untracked files or folders that were created for temporary debugging but were never meant to be committed (e.g., `test.js`, `scratch.txt`, `verify.json`). Ask the user if it's safe to delete them, or delete them if you created them for a temporary task.

### 5. Report the Cleanup
Provide a concise output in the chat detailing exactly what was cleaned and verifying the structural integrity of the project.

**Example Output:**
```
**Repo Cleanup Complete** 🧹

- **Scrubbed:** Deleted 14 `.DS_Store` files and 2 `.log` files.
- **Temp Artifacts:** Removed `.playwright-cli` and `verify.json`.
- **Structure Audit:** [PASS] - Root directory conforms to Next.js standards. No rogue files detected.
```

## Token Rules
- **Do not** blindly delete files in `node_modules/` or `.git/`.
- **Do not** delete markdown files (`README.md`, `CLAUDE.md`, `AGENTS.md`) as these are critical documentation/context files.
- **Do** confirm the framework being used before judging the folder structure.
