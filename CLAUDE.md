# CLAUDE.md

This file provides guidance for AI assistants (Claude Code and similar tools) working in this repository.

## Repository Overview

This is a new, empty repository (`topkosol/testrepo`). No source code, build system, or framework has been committed yet. This CLAUDE.md will evolve as the project grows.

---

## Repository State

- **Status**: Initial / empty — no source files, dependencies, or build configuration exist.
- **First commit**: This CLAUDE.md file itself.

Once the project is bootstrapped with actual code, this file should be updated to reflect the real structure, stack, and conventions.

---

## Git Conventions

### Branch Naming

| Prefix | Purpose |
|--------|---------|
| `main` or `master` | Stable, production-ready code |
| `feature/<short-description>` | New features |
| `fix/<short-description>` | Bug fixes |
| `chore/<short-description>` | Maintenance, tooling, dependency updates |
| `claude/<task-id>` | Branches created by Claude Code for specific tasks |

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<optional scope>): <short summary>

<optional body>

<optional footer>
```

Common types: `feat`, `fix`, `docs`, `chore`, `refactor`, `test`, `ci`.

Examples:
- `feat(auth): add JWT token refresh`
- `fix(api): handle null response from upstream`
- `docs: update CLAUDE.md with project structure`

### Pull Requests

- Keep PRs focused and small — one logical change per PR.
- Write a clear description explaining **what** changed and **why**.
- Reference related issues (e.g., `Closes #12`).
- All CI checks must pass before merging.

---

## Development Workflow

### General Flow

1. Create a branch from `main` (or the specified base branch).
2. Make changes with clear, atomic commits.
3. Push the branch and open a pull request.
4. Address review feedback.
5. Merge once approved and CI passes.

### For AI Assistants (Claude Code)

- Always read files before editing them — never modify code you haven't reviewed.
- Prefer editing existing files over creating new ones.
- Keep changes minimal and focused on the stated task.
- Do not add unrequested features, refactors, comments, or type annotations.
- Do not introduce `_unused` variables, backwards-compatibility shims, or dead code stubs.
- Follow the existing code style of the file being edited.
- When asked to implement something, plan before coding.
- Push to the branch specified in the task instructions — never push to `main` without explicit permission.

---

## Code Style

> **Note**: No language or framework has been chosen yet. Update this section once the stack is decided.

General principles (language-agnostic):

- Consistency over personal preference — match the surrounding code.
- Prefer clarity over cleverness.
- Avoid magic numbers and unexplained constants; use named values.
- Delete code that is no longer used rather than commenting it out.
- Write self-documenting code; add comments only where the logic is non-obvious.

---

## Testing

> **Note**: No test framework is configured yet. Update this section when tests are added.

Expectations once tests exist:

- All tests must pass before merging.
- New features should include appropriate tests.
- Bug fixes should include a regression test.
- Run the full test suite locally before pushing.

---

## CI / CD

> **Note**: No CI pipeline is configured yet. Update this section when CI is added.

---

## Security

- Never commit secrets, API keys, tokens, or credentials.
- Add sensitive file patterns to `.gitignore` (e.g., `.env`, `*.pem`, `secrets/`).
- Validate all external inputs at system boundaries.
- Keep dependencies up to date and audit regularly.

---

## Updating This File

This file should be kept current. When the project evolves — new language, framework, test runner, CI system, directory structure — update the relevant sections here. AI assistants should treat this file as the authoritative source of project conventions.
