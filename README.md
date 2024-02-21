
# standards.group

The https://standards.group/ website.

## Setting up

Just check out the repo and run the usual `npm install`.

## Editing

Too see edits as you make them, run `npm run watch`. It should tell you where to read your local copy.
The page should autorefresh as you make edits.

### Groups

Groups are under `wg`. To add a group (say, *The Scoobies*), create `wg/scoobies/index.md` and fill out
the following:

```
---
title: The Scoobies
layout: page.njk
date: Last Modified
description: "Write up a description here"
chair: buffy
tags:
  - wg
---

{{ description }}

## Chair

{% personCard chair %}
```

You can add whatever section you wish: it's free-form Markdown. Looking at specific parts:

- The `layout`, `date`, and `tags` should be left as is, as boilerplate.
- The `title` is whatever you want to make it.
- `description` explains what the group is for. The reason it's given in metadata is so that
  the group can be listed or embedded elsewhere along with its description; you can avoid
  repeating yourself by using `{{ description }}` in the body to just insert it there dynamically.
- Groups don't need to have a `chair`, but it can be helpful. If you have one, use the identifier
  of the person from the `people` part of the site. If you then want a little rendering of whoever 
  that is in the body, you can include `{% personCard chair %}`. (This is also optional.)

### People

You can add a person (here, Buffy) by creating `people/buffy/index.md` and filling it out thus:

```
---
title: Buffy Summers
layout: person.njk
date: Last Modified
description: "The Slayer"
pic: buffy.jpg
tags:
  - person
---
```

Some notes:

- As before, `layout`, `date`, and `tags` are best left as is.
- `title` is the person's name and `description` describes them.
- `pic` is an optional picture (which you also need to include).

## Publishing

Just push it to `main` and it'll go live.
