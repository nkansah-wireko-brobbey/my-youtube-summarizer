// import { getChunks } from "../_ai/getChunks";
import { Transcript } from "../_utils/computeDuration";
import { extracterTranscriptController } from "./extracter-transcript-controller";

export const summarizeController = async (url: string) => {
    try {

        const transcript = await extracterTranscriptController(url);
        if (!transcript || transcript instanceof Error) {
            return new Error("Error in SummarizeController");
        }

        const transcriptScript = transcript.map((transcript: Transcript) => transcript.text).join(" ");

        // const chunks = await getChunks(transcriptScript);

        return transcriptScript;

    } catch (error) {
        console.error(error);
        return new Error("Error in SummarizeController");
    }
}