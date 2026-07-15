import type { Strategy } from "./types.ts";
import { simulationStrategy } from "./simulation.ts";
import { lateEntry } from "./late-entry.ts";
import { stackX0 } from "./stack-x0.ts";

export const strategies: Record<string, Strategy> = {
  "simulation": simulationStrategy,
  "late-entry": lateEntry,
  "stack-x0": stackX0,
};

export const DEFAULT_STRATEGY = "simulation";

export type { Strategy, StrategyContext } from "./types.ts";
