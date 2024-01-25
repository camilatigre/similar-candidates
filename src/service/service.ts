import { JaroWinklerDistance } from "natural";

const calculateSimilarityScore = (
  clientTokens: string,
  serverTokens: string
) => {
  const score = JaroWinklerDistance(clientTokens, serverTokens, {});

  console.log(Number(score.toFixed(2)));

  return Number(score.toFixed(2));
};

export const matchProposals = () => {
  if (
    calculateSimilarityScore(
      "propostas contra armamento",
      "contra armamento"
    ) >= 0.7
  ) {
    console.log("Mais de 70% de similaridade em propostas!");
  } else {
    console.log("Não encontramos propostas similares.");
  }
};
