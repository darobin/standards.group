---
title: Groups
layout: page.njk
date: Last Modified
eleventyImport:
  collections: ["wg"]
---

{% macro listGroups(list, type) %}
<dl>
{% for wg in list %}
  <dt><a href="{{wg.page.url | url}}">{{ wg.data.title }}</a></dt>
  <dd>
    {{wg.data.description}}
  </dd>
{% else %}
  <dt>We have no active {{ type }}s at this time.</dt>
{% endfor %}
</dl>
{% endmacro %}

## Working Groups

WGs are groups that have specific technical deliverables. This means that they work under
greater expectations of community scrutiny.

{{ listGroups(collections.wgsByTitle, "working group") }}

## Interest Groups

IGs are groups that are focused on discussion and that aren't expected to produce deliverables.

{{ listGroups(collections.igsByTitle, "interest group") }}

## Adjacent Working Groups

These are working groups that are related to the IPFS project but that live somewhat farther
afield.

{{ listGroups(collections.wgFriendsByTitle, "adjacent working group") }}
