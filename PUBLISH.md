# Publishing Guide

> ⚠️ **DO NOT RUN** - This guide is for future reference only. Publishing is DEFERRED until explicitly instructed.

## 📦 Publishing Commands

The monorepo is configured with Lerna for publishing packages to NPM. The following commands are prepared but should **NOT** be executed:

### Primary Publishing Command

```bash
# DO NOT RUN - Prepared for future use
yarn ship
```

This command is aliased to `lerna publish` and will:
- Automatically version packages based on conventional commits
- Generate changelogs
- Create git tags
- Publish to NPM registry
- Push changes to repository

### Alternative Commands

```bash
# DO NOT RUN - Alternative publishing methods
yarn lerna publish                    # Direct lerna publish
yarn lerna publish from-package       # Publish from existing package versions
yarn lerna publish from-git           # Publish from git tags
```

## 🚨 Important Notes

1. **DO NOT EXECUTE** these commands until explicitly instructed
2. **NPM_TOKEN** environment variable must be set for authentication
3. **GitHub repository** must be configured with proper permissions
4. **All tests** must pass before publishing
5. **Documentation** should be updated before release

## 📋 Pre-Publishing Checklist

When publishing is authorized, ensure:

- [ ] All tests pass (`yarn test`)
- [ ] Code is linted (`yarn lint`)
- [ ] Documentation is updated
- [ ] Version numbers are appropriate
- [ ] NPM_TOKEN is configured
- [ ] GitHub repository permissions are set
- [ ] Release notes are prepared

## 🔧 Configuration

The publishing setup uses:
- **Lerna**: 6.6.2 (exact version)
- **Independent versioning**: Each package versions independently
- **Conventional commits**: Automatic changelog generation
- **NPM registry**: Default registry for publishing

## 🚀 When Ready to Publish

1. Ensure all checklist items are complete
2. Run tests one final time: `yarn test`
3. Execute: `yarn ship`
4. Monitor the publishing process
5. Verify packages are available on NPM

---

**Remember: Publishing is currently DEFERRED. Do not execute these commands until instructed.** 