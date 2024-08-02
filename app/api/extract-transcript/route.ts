import { NextRequest, NextResponse } from 'next/server'
import { computeDuration, Transcript } from '../_utils/computeDuration';

import { extracterTranscriptController } from '../_controller.ts/extracter-transcript-controller';

 
export async function POST(
  req: Request,
) {

  // 

  try{

    const data = await req.json();

    const url = data.url;

    console.log(url);
    
    if (!url) {
      return NextResponse.error()
    }
    
    const transcript = await extracterTranscriptController(url);

    
    if (!transcript) {
      return NextResponse.error();
    }

    const  transcriptLength = (typeof transcript  === 'object') ? (transcript as Transcript[]).length : 0;
  
   return NextResponse.json({ message: "data", newTranscripts: transcript , transcriptLength });

  }catch(error) {

    console.error(error);

    return NextResponse.error();
  }

}



