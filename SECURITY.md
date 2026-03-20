# Security Policy

## Purpose

This document defines how to report security issues for this repository during Phase 1.

Even though the project is still early, security concerns are still important. Reports are welcome for vulnerabilities in repository code, dependencies, build tooling, project configuration, or any published project material that could create a meaningful security risk.

## Reporting a vulnerability

Please do **not** open a public GitHub issue for a suspected vulnerability.

For the current Phase 1 stage of the project, report security concerns privately via [email](mailto:jp.coutm@gmail.com).

If a report is accidentally made in public, reduce further disclosure as much as possible and notify the maintainer privately.

## What to include

When reporting a vulnerability, include as much of the following as you can:

- a short description of the issue
- the affected file, path, dependency, or feature
- steps to reproduce
- the possible impact
- screenshots, logs, proof of concept, or references if relevant
- any suggested fix or mitigation, if you have one

## Disclosure expectations

This project currently operates on a best-effort basis and does not offer a formal response-time SLA.

That said, maintainers will try to:

- acknowledge good-faith reports as soon as reasonably possible
- assess whether the report is valid and relevant to the repository
- coordinate a fix or mitigation before broad public disclosure when appropriate

Please keep reports private until the maintainer has had a reasonable chance to investigate and respond.

## Current project scope

At the current Phase 1 stage, the repository is primarily:

- a static Astro application
- repository infrastructure and documentation
- build, lint, formatting, and type-check tooling

There are currently no user accounts, backend services, or private production infrastructure in the repository.

Still, security reports are relevant for issues such as:

- vulnerable dependencies
- unsafe configuration defaults
- accidental credential exposure
- injection risks in future content handling
- security-sensitive build or deployment assumptions
