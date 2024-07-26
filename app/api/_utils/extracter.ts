

import { YoutubeTranscript } from 'youtube-transcript';

export const getTranscript = async (url: string) => {

try {
  const transcript = await YoutubeTranscript.fetchTranscript(url);
  return transcript;

}catch (error) {
  console.error(error);
  return null;
}
    
}