import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ExternalLink, EyeIcon } from "lucide-react";
import Link from "next/link";


type Props = {
  src: string;
  fallback?: string;
};

export default function YoutubeThumbnail({ src, fallback }: Props) {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-lg w-full max-w-sm border">
      <div className="relative aspect-[4/3]">
        <iframe

          src={src}
          title="5 Reasons Why I Love Being a Software Engineer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <div className="text-white space-y-1">
            <h3 className="text-lg font-medium line-clamp-2">
           
            </h3>
             <div className="text-sm text-muted-foreground line-clamp-1">
              <a href={src} className="flex items-center gap-3" target="_blank">

              Click to watch the video 
              <span className="">
                <ExternalLink size={12}/>
                </span> 
              </a>
                
            </div> 
          </div>
        </div>
      </div>

    </div>
  );
}
