import { Transcript, computeDuration } from "../_utils/computeDuration";
import { getTranscript } from "../_utils/extracter";
import { filterTranscript } from "../_utils/filterTranscript";
import { mergeTranscript } from "../_utils/mergeTranscript";


export const extracterTranscriptController = async (url: string) => {
    try {

        const transcript = await getTranscript(url);
        const filteredTranscripts = filterTranscript(transcript as Transcript[]);
        const mergedTranscripts = mergeTranscript(filteredTranscripts as Transcript[], 5);
        const mergedTranscriptsWithDuration = computeDuration(mergedTranscripts as Transcript[]);
        return mergedTranscriptsWithDuration as Transcript[];

    } catch (error) {
        console.error(error);
        return new Error("Error in extracterTranscriptController");
    }
}