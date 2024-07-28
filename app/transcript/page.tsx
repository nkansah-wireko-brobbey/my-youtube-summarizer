import { TabsWrapper } from "@/components/tabs-wrapper";
import { transcriptListSchema, transcriptSchema } from "@/components/transcript-list";
import YoutubeThumbnail from "@/components/youtube-thumbnail";

export default async function Transcript({
  searchParams,
}: {
  searchParams: {
    vid: string;
  };
}) {
  console.log(searchParams);
  const staticData = await fetch(
    `http://localhost:3000/api/extract-transcript`,
    {
      cache: "no-cache",
      method: "POST",
      body: JSON.stringify({ url: searchParams.vid }),
      headers: { "Content-Type": "application/json" },
    }
  );
  const data = await staticData.json();
  const transcripts = transcriptListSchema.safeParse(data.newTranscripts).data
  console.log("Transcript Page");
    // console.log(transcripts);
    console.log(searchParams.vid);
console.log(decodeURIComponent( searchParams.vid))
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-5 mb-6">
        YouTube<span className="text-primary">.Snap.</span>{" "}
      </h1>
      <div className="flex justify-center gap-5">
        <div>
          <YoutubeThumbnail src={"https://www.youtube.com/watch?v=mLS6w29iFj4"} />
        </div>
        <div className="w-full max-w-3xl flex-1 h-[800px]">
          <TabsWrapper transcriptData={transcripts} />
        </div>
      </div>
    </>
  );
}
