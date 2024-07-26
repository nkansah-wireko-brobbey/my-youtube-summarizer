import type { NextApiRequest, NextApiResponse } from 'next'
import { getTranscript } from './_utils/extracter';
import { NextResponse } from 'next/server';

 
export async function GET(

) {

    
   return NextResponse.json({ message: 'Hello, Next.js with App Router!' });
  }
  