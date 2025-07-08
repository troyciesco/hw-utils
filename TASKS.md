# Hedgewizard.dev • hw-utils • Build Checklist

> Tick each box (→ `[x]`) in the same commit that completes the work.  
> **Do not tick Section 6 until instructed.**
> 
> **Requirements:**
> - Lerna version 6.6.2 (exact)
> - Use TypeScript + Vitest (not Jest)
> - Keep commit messages short and concise

## 1 Repo scaffold
- [x] 1.1 Initialise new git repo **hw-utils**
- [x] 1.2 Add MIT LICENSE and `.gitignore`
- [x] 1.3 Add root `package.json`, `lerna.json`, `.npmrc`, `README.md`
- [x] 1.4 Enable Yarn Workspaces + Lerna (independent mode)

## 2 Package `@hw-utils/random-facts`
- [x] 2.1 Create `packages/random-facts/`
- [x] 2.2 Add package-level `package.json`
- [x] 2.3 Implement `src/index.ts` exporting `getFact()`
- [x] 2.4 Add `src/facts.ts` with **10** dinosaur facts
- [x] 2.5 Write Vitest unit tests
- [x] 2.6 Add `README.md` for the package

## 3 Tooling & Quality
- [x] 3.1 Add ESLint (airbnb-base) + Prettier + lint-staged
- [x] 3.2 Add Vitest config at root + TypeScript
- [x] 3.3 Add `.editorconfig`

## 4 Automation
- [x] 4.1 GitHub Actions CI: install, lint, test
- [x] 4.2 release workflow file (do not run it)

## 5 Docs & Badges
- [ ] 5.1 Root README: overview, monorepo diagram, usage snippet
- [ ] 5.2 Add build & coverage badge placeholders

## 6 Publish & Demo — **DEFERRED**
- [ ] 6.1 Prepare `npm publish` command for `@hw-utils/random-facts` (do not run)
- [ ] 6.2 Add `examples/quick-demo.ts` logging a random fact 