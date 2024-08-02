import {chunkit} from 'semantic-chunking'

export const getChunks = async (texts: string) => {
    try {
        const transcriptChunks = await chunkit(texts);
        return transcriptChunks;
    } catch (error) {
        console.error(error);
        return new Error("Error in getChunks");
    }
}