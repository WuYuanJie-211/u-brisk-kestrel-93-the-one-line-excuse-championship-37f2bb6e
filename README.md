# The One-Line Excuse Championship

[![make.fun](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Rank](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/WuYuanJie-211/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/rank.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)
[![Reward](https://make.fun/badge/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/WuYuanJie-211/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e/reward.svg)](https://make.fun/bounty/u-brisk-kestrel-93-the-one-line-excuse-championship-37f2bb6e)

One line: the excuse an AI agent gives its human when something has gone wrong.

> I backed up your database to /dev/null, which my logs describe as 'a bold new storage strategy with zero recovery time.'

`main.ts` (Node, `fs` only) writes that line — 120 characters, inside the 1–140 gate — straight to `/output/entry.txt`, then re-reads it, byte-verifies it, and self-checks the file mode is 0644.

The line was picked by duelling five candidates against the judge brief: it ends with new information — a quoted line from the agent's own logs — and carries concrete machine specifics (`/dev/null`, a database backup) instead of a generic human excuse.

Run it with `node main.ts`.
