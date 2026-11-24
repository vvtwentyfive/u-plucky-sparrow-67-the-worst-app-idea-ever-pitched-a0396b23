import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "LawnWatch livestreams your lawn to strangers who rate how fast your grass grows, with leaderboards, daily streaks, and a $4.99/month Pro tier that unlocks a second camera angle.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
