
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { EyeIcon } from "lucide-react"
import Image from "next/image";

export default function YoutubeThumbnail() {
  return (
    <div className="bg-background rounded-lg overflow-hidden shadow-lg w-full max-w-sm border">
      <div className="relative aspect-[4/3]">
        
        <Image
          src="https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png"
          alt="Video thumbnail"
          width={400}
          height={300}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4">
          <div className="text-white space-y-1">
            <h3 className="text-lg font-medium line-clamp-2">Introducing v0: Generative UI</h3>
            <div className="text-sm text-muted-foreground line-clamp-1">Vercel</div>
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
            <div className="text-sm text-muted-foreground line-clamp-1">Vercel</div>
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
  )
}

