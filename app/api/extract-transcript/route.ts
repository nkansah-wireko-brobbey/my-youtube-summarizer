import { NextRequest, NextResponse } from 'next/server'
import { getTranscript } from '../_utils/extracter';
import { computeDuration, Transcript } from '../_utils/computeDuration';
import { filterTranscript } from '../_utils/filterTranscript';
import { mergeTranscript } from '../_utils/mergeTranscript';

 
export async function POST(
  req: Request,
) {

  const data = await req.json();
  // console.log(data);

  const url = data.url;
  console.log(url);
  const transcript = await getTranscript(data.url);
  const filteredTranscripts = filterTranscript(transcript as Transcript[]);
  const mergedTranscripts = mergeTranscript(filteredTranscripts as Transcript[], 5);
  const newTranscripts = computeDuration(mergedTranscripts as Transcript[]);
  // console.log(newTranscripts);

 return NextResponse.json({ message: "data", newTranscripts });
}