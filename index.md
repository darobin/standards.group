---
title: Welcome!
layout: page.njk
tags:
  - home
eleventyImport:
  collections: ["wg"]
---

**standards.group** is defining the next-generation web platform via collaborative standards that focus
on user agency and move at product speed.

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
