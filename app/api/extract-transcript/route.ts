import { NextRequest, NextResponse } from 'next/server'
import { getTranscript } from '../_utils/extracter';
import { computeDuration, Transcript } from '../_utils/computeDuration';

 
export async function POST(
  req: Request,
) {

  const data = await req.json();
  console.log(data);

  const url = data.url;
  console.log(url);
  const transcript = await getTranscript(data.url);
  const newTranscripts = computeDuration(transcript as Transcript[]);
  console.log(newTranscripts);

 return NextResponse.json({ message: "data", newTranscripts });
}