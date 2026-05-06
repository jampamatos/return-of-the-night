# ADR 0001: Bootstrap Strategy

## Status

Accepted

## Context

**Return of the Night** is starting from a foundation-building stage whose purpose is to establish the technical and organizational base of the repository rather than to maximize feature delivery speed on day one.

The main platform blueprint defines the project as an open-source RPG digital-book platform built with strong repository hygiene, architectural decision tracking, progressive complexity, and a learning-oriented approach. It favors understanding and maintainability over immediate convenience.

At the time this ADR was written, the Return of the Night source-of-truth described the project in its present form as a private, player-facing campaign wiki and rules reference, with an Astro + Starlight platform plan.

Because of that, there is a real early-stage tension between two valid directions:

1. starting from plain Astro as a simpler and more flexible foundation for a custom reading platform; or
2. starting from Astro + Starlight as a faster path toward a documentation/wiki experience.

This ADR records which direction governs the initial bootstrap.

## Decision

For the initial bootstrap, the project will use **plain Astro**.

**Starlight is explicitly deferred for now.**

This decision applies to the repository foundation stage and should guide the initial scaffold, structure, and tooling choices.

## Rationale

The initial bootstrap is about creating a clean and durable foundation. At this stage, the main priority is not to obtain the fastest possible documentation UI, but to establish a repository that is understandable, maintainable, and well-structured from the beginning.

Choosing plain Astro supports that goal in a few important ways:

- it keeps the base stack simpler during foundation work;
- it helps us understand the framework structure more directly instead of starting inside a more opinionated abstraction layer;
- it preserves architectural flexibility, especially if the project evolves beyond a wiki-like experience into a more custom reader-oriented product;
- it aligns better with the project principles of progressive complexity and learning-oriented decision-making.

This choice also fits the current implementation strategy: start with a solid repository foundation, then build the site shell, then the content engine, and only later move into richer reader behavior and product-specific features.

## Trade-offs

This decision has clear benefits, but also clear costs.

### Benefits

- lower conceptual complexity at bootstrap time;
- stronger direct understanding of the Astro project structure;
- less early coupling to a documentation-specific framework layer;
- more freedom for future custom navigation, reader workflows, and content-driven architecture;
- better fit for a learn-as-we-go implementation style.

### Costs

- slower path to a polished docs/wiki experience;
- more manual work for navigation, structure, and presentation later on;
- fewer built-in conventions for documentation UX in the early stages;
- the initial project may feel more minimal than a Starlight-based setup would.

### Alternative considered

**Astro + Starlight** was seriously considered because it is a strong fit for a private campaign wiki and would likely accelerate the creation of a player-facing reference site.

It was not chosen for the initial bootstrap because the current priority is repository foundation and architectural clarity, not early documentation polish.

## Non-goals

This ADR does **not** mean that:

- Starlight is rejected permanently;
- the final product architecture has already been fully decided;
- the project will never adopt a documentation-oriented layer;
- future work must avoid higher-level tooling;
- the project stops being suitable for wiki-style content.

This ADR only defines the bootstrap strategy.

## When to revisit

This decision should be revisited if one or more of the following become true:

- the project proves to be primarily a documentation/wiki product rather than a custom reading platform;
- later work shows that a documentation-first framework would reduce complexity without harming the product vision;
- manual implementation of documentation structure becomes an unjustified maintenance burden;
- the team concludes that Starlight provides a clearly better fit for the actual editorial workflow and reader experience we want.

Until then, plain Astro remains the official bootstrap strategy.
