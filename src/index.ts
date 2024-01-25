import { OrthographyTokenizer, JaroWinklerDistance } from "natural";

const tokenizer = new OrthographyTokenizer({ language: "Portuguese" });

console.log(
  tokenizer.tokenize(
    "encontre propostas de candidatos relacionado ao candidto x"
  )
);

const calculateSimilarityScore = (
  clientTokens: string,
  serverTokens: string
) => {
  const score = JaroWinklerDistance(clientTokens, serverTokens, {});

  console.log(Number(score.toFixed(2)));

  return Number(score.toFixed(2));
};

if (
  calculateSimilarityScore("propostas contra armamento", "contra armamento") >=
  0.7
) {
  console.log("passou hein");
} else {
  console.log("ih ala n passou");
}

// user precisa digitar nome do candidato em sua pesquisa

// 1- identifico o candidato por nome e ver se existe mais de um
// 2. identifico  propostas (coluna?)
// 3. busco propostas semelhantes (com linguagem natural )
// 4. salvo score de comparacao
// 5. retorno os 3 candidatos e suas propostas com maior score
