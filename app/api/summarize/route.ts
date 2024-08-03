import { NextResponse } from "next/server";
import { createModel } from "../_ai/createModel";
import { queryModel } from "../_ai/generateText";
import { summarizeController } from "../_controller.ts/summarize-controller";

export async function POST(req: Request) {
  // const data = await req.json();
  // const prompt = data.prompt;
  // const url = data.url;

  // const model = createModel();

  // const response = await queryModel(model, prompt);

  // return NextResponse.json({ message: "data", response });

  try {
    const data = await req.json();
    const url = data.url;

    if (!url) {
      console.log("No URL");
      return NextResponse.error().json();
    }

    const chunks = await summarizeController(url);

    if (!chunks) {
      console.log("No Chunks");
      return NextResponse.error().json();
    }

    if (chunks instanceof Error) {
      console.log("Chunks Error");
      return NextResponse.error().json();
    }

    const model = createModel();

    const response = await queryModel(
      model,
      "You are an AI summarizer. Your output should be in markdown.",
      chunks
    );

    // return NextResponse.json({ message: "data", response });

    return NextResponse.json({ message: "data", response });
  } catch (error) {
    console.error(error);

    return NextResponse.error().json();
  }
}
