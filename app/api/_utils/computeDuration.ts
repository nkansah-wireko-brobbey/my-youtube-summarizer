import { off } from "process";

export type Transcript = {
    text: string;
    duration: number;
    offset: number;
    lang: string;

}

export const computeDuration=(transcripts: Transcript[])=>{

        const newTranscripts = transcripts.map((transcript, index) => {
          const startTime = convertSecondsToMinutes(transcript.offset);
          const endTime = convertSecondsToMinutes(transcript.offset + transcript.duration);
        
            return{
                text: transcript.text,
                startTime,
                endTime,
                duration: transcript.duration,
                offset: transcript.offset,
            }
        })

        return newTranscripts;
}
function convertSecondsToMinutes(seconds: number) {
    let minutes = Math.floor(seconds / 60); // Get the whole number of minutes
    let remainingSeconds = (seconds % 60).toFixed(2); // Get the remaining seconds

    return `${minutes}:${remainingSeconds}`;
}