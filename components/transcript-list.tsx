import { z } from "zod";

export const transcriptSchema = z.object({
  text: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  duration: z.number(),
  offset: z.number(),
});

export const transcriptListSchema = z.array(transcriptSchema);

export type Transcript = z.infer<typeof transcriptSchema>;


export default function TranscriptList({
  transcripts,
}: {
  transcripts?: Transcript[];
}) {

    console.log("Transcript List Page");
    // console.log(transcripts);
  return (
    <>
    {transcripts?.length === 0 && <div> No Transcripts Found</div>}
      {transcripts?.map((transcript, index) => { return (
        <div key={transcript.offset}>
          <div className="rounded-lg bg-card py-4 shadow-sm mt-4">
            <div className="flex items-center justify-between">
              <div className="text-lg font-medium">{transcript.text}</div>
              <div className="text-xs px-2 py-1 rounded-lg bg-primary">
                {transcript.startTime} - {transcript.endTime}
              </div>
            </div>
            <p className="text-md mt-4 text-muted-foreground">
              {transcript.text}
            </p>
          </div>
        </div>)
      })}
    </>
  );
}
