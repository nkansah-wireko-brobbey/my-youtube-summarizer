import { Transcript } from "./computeDuration";

export const filterTranscript = (transcripts: Transcript[]) => {

    const filteredTranscripts = transcripts.filter((transcript) => {
        return transcript.text !== "" && transcript.text !== " " && transcript.text !== "[Music]";
        });

    return filteredTranscripts;
}
    