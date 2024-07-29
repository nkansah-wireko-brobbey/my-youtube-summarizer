import { NextResponse } from "next/server";
import { createModel } from "../_ai/createModel";
import { queryModel } from "../_ai/generateText";

export async function POST(
    req: Request,
  ) {

    const data = await req.json();
    const prompt = data.prompt;

    const model = createModel();

    const response = await queryModel(model, prompt);

    return NextResponse.json({ message: "data", response });
   

  }