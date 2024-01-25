"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natural_1 = require("natural");
var tokenizer = new natural_1.OrthographyTokenizer({ language: "Portuguese" });
console.log(tokenizer.tokenize("meu cachorro comeu meu lanche"));
// function preprocessText(text) {
//   const tokens = tokenizer.tokenize(text);
//   const filteredTokens = tokens.filter((token) => !stopwords.contains(token));
//   const stemmedTokens = filteredTokens.map((token) =>
//     PorterStemmer.stem(token)
//   );
//   return stemmedTokens.join(" ");
// }
// const similarity = CosineSimilarity();
// function calculateSimilarity(text1, text2) {
//   const score = similarity.compare(
//     preprocessText(text1),
//     preprocessText(text2)
//   );
//   return score;
// }
