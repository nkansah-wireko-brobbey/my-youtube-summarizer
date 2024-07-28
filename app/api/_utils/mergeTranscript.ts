import { Transcript } from "./computeDuration";

export const mergeTranscript = (
  transcripts: Transcript[],
  chunkSize: number
) => {
  // merge maxTranscripts number of transcripts

  const mergedTranscripts: Transcript[] = [];

  for (let i = 0; i < transcripts.length; i += chunkSize) {
    const chunk = transcripts.slice(i, i + chunkSize);

    const mergedText = chunk.map((t) => t.text).join(" ");
    const totalDuration = chunk.reduce((sum, t) => sum + t.duration, 0);
    const earliestOffset = Math.min(...chunk.map((t) => t.offset));
    const lang = chunk[0].lang; // Assuming all have the same language

    mergedTranscripts.push({
      text: mergedText,
      duration: totalDuration,
      offset: earliestOffset,
      lang: lang,
    });
  }

  return mergedTranscripts;
};
