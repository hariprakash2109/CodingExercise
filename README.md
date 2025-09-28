
# Design Patterns — TypeScript (6 Use Cases)

This project demonstrates **six** design-pattern use-cases implemented in TypeScript:

- **Behavioral (2)**: Observer, Strategy  
- **Creational (2)**: Factory Method, Builder  
- **Structural (2)**: Adapter, Decorator

## Project structure
Each class/interface is placed in its own file following a simple, consistent naming convention.

```
src/
  behavioural/
    observer/
    strategy/
  creational/
    factory/
    builder/
  structural/
    adapter/
    decorator/
  logger/
  cli/
  common/
  index.ts
```

## How to run (locally)

1. Install dependencies:
```bash
npm install
```

2. Build:
```bash
npm run build
```

3. Run:
```bash
npm start
```

Alternatively for development without building:
```bash
npm run dev
```

## What you will find
- CLI: interactive menu that stays active (event-driven) and allows running each pattern demo.
- Robust logging (async to file), validation helpers, defensive programming and exception handling.
- No hard-coded `while(true)` loops — the CLI uses Node's `readline` event loop.

## GitHub & Submission
I cannot push to your GitHub account. To publish this to GitHub, run:

```bash
git init
git add .
git commit -m "Add design-patterns-ts demo"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

Replace `<YOUR_USERNAME>` and `<REPO_NAME>` accordingly.

---

If you intended another second exercise (this prompt mentioned two exercises), I didn't find it in your message — share Exercise 2 and I'll package it similarly.
