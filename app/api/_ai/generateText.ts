import { generateText } from "ai";

export const queryModel = async (model: any, prompt: string) => {
  const response = await generateText({
    model: model,
    prompt: prompt,
  });

  return response;
};
