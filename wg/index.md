---
title: Working Groups
layout: page.njk
date: Last Modified
eleventyImport:
  collections: ["wg"]
---

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
