import { generateText } from "ai";

export const queryModel = async (model: any, system: string, prompt: string) => {
  const response = await generateText({
    model,
    system,
    prompt,
  });

  return response;
};
