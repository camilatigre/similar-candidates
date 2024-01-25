import { OrthographyTokenizer } from "natural";
import { matchProposals } from "./service/service";

const tokenizer = new OrthographyTokenizer({ language: "Portuguese" });

matchProposals();

// user precisa digitar nome do candidato em sua pesquisa
