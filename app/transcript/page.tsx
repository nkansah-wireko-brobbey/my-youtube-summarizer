import { TabsWrapper } from "@/components/tabs-wrapper";
import YoutubeThumbnail from "@/components/youtube-thumbnail";

export default function Transcript() {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-5 mb-6">
        YouTube<span className="text-primary">.Snap.</span>{" "}
      </h1>
      <div className="flex justify-center gap-5">
        <div>
            <YoutubeThumbnail/>
        </div>
        <div className="w-full max-w-3xl flex-1 h-[800px]">
            <TabsWrapper/>
        </div>
      </div>
    </>
  );
}
