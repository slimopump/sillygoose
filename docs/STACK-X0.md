# Stack-X0 Strategy

Wallet/profile focus: [@stack-x0](https://polymarket.com/@stack-x0), wallet `0x9a07c6583fb9defd31a102add491d35621c404e1`.

Buy-only crypto Up/Down farming:

```
For each active crypto up/down slot (BTC/ETH/SOL/XRP, 5m or 15m):

  1. Read direction from CEX lead vs slot open (spot vs open gap)
  2. Identify the FAVORITE side (book prices it 52–57¢)
  3. If favorite ask ∈ [0.50, 0.70] and conviction OK:
       → TAKER BUY ~$15–$60 (~50–100 shares)
  4. Hold to resolution → redeem $1 if correct, $0 if wrong
  5. Never sell, never hedge opposite side
```

## Screenshots

![Stack-X0 profile](screenshots/Profile_ss.png)

The profile screenshot shows Stack-X0’s account context: portfolio/cash, one-day PnL, and recent mid-band buys such as ETH Down `46.0¢` / `53.6¢` and BTC Down `49.0¢`.

![Stack-X0 winning history](screenshots/winning.png)

The winning screenshot shows the cash-flow pattern: buys around the mid-band (`48–55¢`) and green `Redeem` rows such as `+$78.79`, `+$96.25`, `+$87.29`, `+$28.42`, and `+$127.86`.

## Why it can be profitable

- Mid-band prices (~55¢) pay roughly **+80% gross** on wins vs **−100%** on losses.
- The edge depends on CEX direction plus book confirmation filtering out flat coin-flips.
- The ask cap at **70¢** avoids buying thin upside.
- Single-side exposure keeps expectancy clean: no lottery leg, no hedge bleed, no sell spread.
- Repeating across many 5m/15m slots and four assets compounds a small positive expectancy.

## Quick start

```bash
cp .env.example .env
npm run stack-x0:sim
npx tsx scripts/run-stack-x0.ts
```

## Validation checklist

- [ ] One side only per slot (favorite)
- [ ] Asks in **[0.50, 0.70]** (often ~52–57¢)
- [ ] Notionals ~**$15–$60** / ~**50–100** shares
- [ ] No sells, no opposite buys
- [ ] Redeem on resolution

## Risks

1. Late gap flips after entry → full premium loss
2. Entries near 70¢ need higher hit rates
3. Fees on FOKs reduce edge — track filled price + win rate
4. Flat opens (no CEX gap) should be skipped via min-gap config

Tune `STACK_X0_MIN_GAP_USD`, clip notional, and the ask band as live fills dictate.
