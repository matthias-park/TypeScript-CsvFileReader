import { MatchReader } from "./MatchReader";
import {MatchResult } from './MatchResult';

const reader = new MatchReader("football.csv");
reader.read();

console.log(reader.data);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man united" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
