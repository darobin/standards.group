---
title: Welcome!
layout: page.njk
tags:
  - home
eleventyImport:
  collections: ["wg"]
---

The **standards.group** does what no one else in their right mind wants to do: it sets a standard
for standards. The goal is to define the moving parts of standards well enough that whenever groups
of people need to get together to agree on a simple standard, they can adopt the tools, resources,
processes, etc. defined here and not have to worry about reinventing the wheel.

Our approach is designed to pare down what you need to operate as a potentially-credible standard
(or pre-standard, if you want to incubate a specification and then take it to an established
organization) to the strict minimum. If you see something here which you believe you won't need,
think twice: the odds are that you *will* need it, you just haven't had that problem yet.

In addition to that, we maintain a list of groups that operate according to the tooling and 
processes which we maintain and that abide by a shared set of principles. Projects that seek to 
increase decentralization (which is the goal of any digital standard worthy of the name) tend to
lack a shared place to find one another. The list we provide is not "official" by any means — it's
not entirely clear who would have the authority to establish an official list in a decentralized
world — but it offers a way for these groups to discover one another and potentially to coordinate.

## Working Groups

<dl>
{% for wg in collections.wgsByTitle %}
  <dt><a href="{{wg.page.url | url}}">{{ wg.data.title }}</a></dt>
  <dd>
    {{wg.data.description}}
  </dd>
{% else %}
  <dt>We have no active groups at this time.</dt>
{% endfor %}
</dl>
