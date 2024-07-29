import { TabsWrapper } from "@/components/tabs-wrapper";
import {
  transcriptListSchema,
  transcriptSchema,
} from "@/components/transcript-list";
import YoutubeThumbnail from "@/components/youtube-thumbnail";

export default async function Transcript({
  searchParams,
}: {
  searchParams: {
    vid: string;
  };
}) {
  console.log(searchParams);
  console.log("API URL:");
  console.log(process.env.API_URL);
  const url = new URL(`${process.env.API_URL}`);
  console.log(url);
  const staticData = await fetch(url.origin + "/api/extract-transcript", {
    cache: "no-cache",
    method: "POST",
    body: JSON.stringify({ url: searchParams.vid }),
    headers: { "Content-Type": "application/json" },
  });
  const data = await staticData.json();
  const transcripts = transcriptListSchema.safeParse(data.newTranscripts).data;
  console.log("Transcript Page");
  // console.log(transcripts);
  console.log(searchParams.vid);
  console.log(decodeURIComponent(searchParams.vid));
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-5 mb-6">
        YouTube<span className="text-primary">.Snap.</span>{" "}
      </h1>
      <div className="flex flex-col md:flex-row justify-center gap-5 flex-wrap">
        <div className="w-full md:w-auto">
          <YoutubeThumbnail src={"https://www.youtube.com/embed/gXuSMjrx_e8"} />
        </div>
        <div className="w-full md:max-w-3xl h-[800px]">
          <TabsWrapper transcriptData={transcripts} />
        </div>
      </div>
    </>
  );
}
