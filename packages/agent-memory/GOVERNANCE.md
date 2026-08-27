# Governance

This document describes how decisions are made in the agentmemory project.

The model here is a near-copy of the [Linux Foundation Minimum Viable Governance (MVG)](https://github.com/todogroup/ospolog/blob/main/governance/minimum-viable-governance.md) pattern, scoped to the project's current single-maintainer reality with a concrete plan to diversify maintainership over the next two release cycles.

## Mission

Ship a persistent, local-first memory runtime for AI coding agents that:

- Requires zero external databases.
- Runs under any MCP-compatible client.
- Stays compatible with the open [Model Context Protocol](https://modelcontextprotocol.io).
- Keeps every user's data on the user's machine by default.

## Roles

### Users

Anyone who runs agentmemory. No process obligation beyond the license. Feedback via [GitHub issues](https://github.com/rohitg00/agentmemory/issues) and [discussions](https://github.com/rohitg00/agentmemory/discussions) is the input channel.

### Contributors

Anyone who opens an issue, comments on an issue, opens a pull request, or otherwise helps the project. See [CONTRIBUTING.md](./CONTRIBUTING.md) for the how-to.

### Maintainers

A Maintainer has commit access to the repository, responsibility for reviewing PRs, and a vote on project-level decisions. The current list is tracked in [MAINTAINERS.md](./MAINTAINERS.md).

A Maintainer is expected to:

- Respond to PRs they are review-owner for within a reasonable window (goal: 3 working days for first comment).
- Uphold the [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md).
- Avoid merging their own non-trivial PRs without a second reviewer once the maintainer count is greater than one.
- Disclose conflicts of interest (employer, paid relationships to users).

### Maintainer acceptance process

A Contributor becomes a Maintainer by:

1. Sustained, high-signal contributions over the prior 6 months (multiple merged PRs across more than one subsystem, plus review comments on others' PRs).
2. A Maintainer nominates the Contributor in a public PR editing `MAINTAINERS.md`.
3. The PR stays open for 7 calendar days to collect objections.
4. If no standing objection from an existing Maintainer, the PR merges and the new Maintainer is added.

A Maintainer steps down by opening a PR that moves their entry to the `Emeritus` section. This is always accepted.

## Decision-making

### Default: lazy consensus on PRs

Most decisions happen inside pull requests. A PR merges when any Maintainer approves it and no other Maintainer blocks it. Silence is assent after 72 hours of no objection.

### Non-PR decisions

Anything that is not a normal code change — charter changes, governance edits, maintainer additions/removals, project scope, breaking API changes, relicensing — happens in a GitHub Issue labeled `governance` with a proposal in the first comment.

- Minor scope decisions: rough consensus in the issue thread, captured by a Maintainer in a summary comment.
- Formal votes: Maintainers react `+1` / `-1` / `0` to the summary comment. Simple majority of Maintainers with a minimum of two distinct voters carries. If only one Maintainer exists, a 7-day public comment window substitutes for a vote.

### Breaking changes

A breaking change to the REST / MCP surface requires:

1. A tracking issue labeled `breaking` opened at least one minor release cycle ahead of the change.
2. A deprecation path in the codebase (warning log, feature flag, or adapter) for at least one minor release.
3. The change landing in the CHANGELOG under a clearly marked `Breaking` sub-section.

## Release process

Releases follow [Semantic Versioning](https://semver.org). See the [release process](./CONTRIBUTING.md#release-process) in `CONTRIBUTING.md` and the automated `.github/workflows/publish.yml` pipeline for the mechanics.

## Conflicts of interest

Maintainers employed by a company that sells a product competing with agentmemory, or by a company whose business depends on agentmemory's roadmap, should disclose that relationship in `MAINTAINERS.md` next to their name. Nothing prohibits such maintainership; transparency is the requirement.

## Amending this document

This document changes by PR. Edits follow the Non-PR decisions path above: open a `governance` issue, collect feedback, then open the PR citing the issue.

## Related documents

- [LICENSE](./LICENSE) — Apache-2.0
- [CONTRIBUTING.md](./CONTRIBUTING.md) — how to contribute
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) — community behavior
- [SECURITY.md](./SECURITY.md) — how to report a vulnerability
- [MAINTAINERS.md](./MAINTAINERS.md) — who has commit access
- [ROADMAP.md](./ROADMAP.md) — where the project is heading
