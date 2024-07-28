import { z } from "zod";
import Markdown from "markdown-to-jsx";

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
      {transcripts?.map((transcript, index) => {
        return (
          <div key={transcript.offset}>
            <div className="rounded-lg bg-card py-4 shadow-sm mt-4">
              <div className="flex items-start justify-between">
                {/* <div className="text-lg font-medium"><Markdown>{transcript.text}</Markdown></div> */}
                <p className="text-md text-muted-foreground w-4/5">
                  {transcript.text}
                </p>
                <div className="text-xs px-2 py-1 rounded-lg bg-primary">
                  {transcript.startTime} - {transcript.endTime}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
