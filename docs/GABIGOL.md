# Gabigol Strategy (favorite mid-band)

Buy-only crypto Up/Down farming: **CEX direction → favorite ask in [50¢, 70¢] → sized taker buy → hold to redeem**. Never sell. Never hedge the opposite side.

**Not financial advice.**

## Loop (source of truth)

```
For each active crypto up/down slot (BTC/ETH/SOL/XRP, 5m or 15m):

  1. Read direction from CEX lead vs slot open (spot vs open gap)
  2. Identify the FAVORITE side (book prices it 52–57¢)
  3. If favorite ask ∈ [0.50, 0.70] and conviction OK:
       → TAKER BUY ~$15–$60 (~50–100 shares)
  4. Hold to resolution → redeem $1 if correct, $0 if wrong
  5. Never sell, never hedge opposite side
```

## Why it can be profitable

- Mid-band prices (~55¢) pay roughly **+80% gross** on wins vs **−100%** on losses — break-even win rate is tractable if CEX+book filters bad coin-flips.
- Caps ask at **70¢** so you do not buy thin residual upside.
- Single-side exposure keeps expectancy clean (no lottery/hedge bleed).
- Repeating across many 5m/15m slots and four assets compounds a small positive expectancy.

See the root [README.md](../README.md) for full math, break-even tables, and screenshots.

## Quick start

```bash
cp .env.example .env
npx tsx index.ts --strategy gabigol --slot-offset 1 --rounds 20 --always-log
npx tsx scripts/run-gabigol.ts
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

Tune `GABIGOL_MIN_GAP_USD`, clip notional, and ask band when aligning [`engine/strategy/gabigol.ts`](../engine/strategy/gabigol.ts) with this doc.
