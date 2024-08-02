import he from "he";

export function cleanText(text: string) {
    console.log("Cleaning Text");
    console.log(text);
  
    // // Add spaces around HTML entities
    // const spacedText = text.replace(/(&[a-zA-Z0-9#]+;)/g, ' $1 ');
    // console.log("Spaced Text");
    // console.log(spacedText);
  
    // // Decode the HTML entities
    // const cleanedText = he.decode(spacedText);
    // console.log("Cleaned Text");
    // console.log(cleanedText);
  
    return text;
    // return he.decode(text);
  }
