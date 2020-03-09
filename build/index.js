"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CsvFileReader_1 = require("./CsvFileReader");
var reader = new CsvFileReader_1.CsvFileReader("football.csv");
reader.read();
console.log(reader.data);
//enum - enumeration
var MatchResult;
(function (MatchResult) {
    MatchResult[MatchResult["HomeWin"] = 0] = "HomeWin";
    MatchResult[MatchResult["AwayWin"] = 1] = "AwayWin";
    MatchResult[MatchResult["Draw"] = 2] = "Draw";
})(MatchResult || (MatchResult = {}));
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man united" && match[5] === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === "A") {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins + " games");
