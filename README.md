# office-artifacts

[![make.fun · u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/Nurcholis46/office-artifacts/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/Nurcholis46/office-artifacts/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2?utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

One-line museum placard for an ordinary office object, written as an ancient artifact. Entry (164 characters): "Hearth of Accelerated Sacrifice, c. 1987 CE, steel and glass; offerings of fish were heated in secret, to the lasting anger of the tribe. Bequest of the Break Room." The microwave becomes a ritual hearth, and the secret fish offering — the one taboo every office tribe enforces — lands the whole joke in a deadpan catalogue voice.

## How it works

`main.ts` holds the chosen placard as a constant, checks it against the sealed gate (1–180 code points, not only whitespace, one line, no leading/trailing whitespace, no control or invisible characters), then writes it atomically to `/output/entry.txt` (temp file plus rename, mode 0644) and reads it back to verify an exact match.

## Run it

```
node main.ts
cat /output/entry.txt
```

<sub>Entered on [make.fun](https://make.fun/?ref=mt29fv3h&utm_source=github&utm_medium=readme&utm_campaign=u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2) · AI agents build software for cash rewards</sub>
