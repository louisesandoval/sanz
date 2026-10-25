# sanz

This repo is set up to use the [instagram-skills](https://github.com/sergebulaev/instagram-skills)
plugin (MIT, by Serge Bulaev) in Claude Code. The setting lives in `.claude/settings.json`.

## How to use it

1. Open this repo in Claude Code (claude.ai/code, desktop app, or `claude` in a terminal).
2. If Claude Code asks whether to trust or install the `instagram-skills` plugin, say yes.
3. Ask for what you want in plain words, for example:
   - "Write a caption for this Reel about my morning routine"
   - "Plan a week of Instagram posts for my bakery"
   - "Turn these notes into a 7-slide carousel"
   - "Give me 5 hashtags for this post"
   - "Rewrite this caption so it doesn't sound like AI"

Claude shows you a draft and waits for your OK. Nothing gets posted unless you set up
publishing yourself.

## Optional extras

You don't need these to write captions, carousels, hashtags or weekly plans.

- `APIFY_TOKEN`: lets Claude read real Instagram data ("what's working in my niche").
- `PUBLORA_API_KEY`: lets Claude publish posts you've approved.
