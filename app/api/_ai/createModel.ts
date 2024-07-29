import { createOpenAI } from "@ai-sdk/openai";

const createProvider = () => {
  const provider = createOpenAI({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
  });
  return provider;
};

export const createModel = () => {
  const groq = createProvider();
  const model = groq("llama3-8b-8192");

  return model;
};
