import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Video from "next-video";

type Props = {
  src: string;
  fallback?: string;
};

export default function YoutubeThumbnail({ src, fallback }: Props) {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-lg w-full max-w-sm border">
      <div className="relative aspect-[4/3]">
        <iframe

          src="https://www.youtube.com/embed/jw98oh8HF5o"
          title="5 Reasons Why I Love Being a Software Engineer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <div className="text-white space-y-1">
            <h3 className="text-lg font-medium line-clamp-2">
              Introducing v0: Generative UI
            </h3>
            <div className="text-sm text-muted-foreground line-clamp-1">
              Vercel
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>V</AvatarFallback>
            </Avatar>
            <div className="text-sm text-muted-foreground line-clamp-1">
              Vercel
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <EyeIcon className="w-4 h-4" />
            <span>300K views</span>
            <span>•</span>
            <span>5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}
