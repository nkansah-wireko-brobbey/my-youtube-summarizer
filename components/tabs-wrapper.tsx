import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import TranscriptList, { Transcript } from "./transcript-list"
import { MarkdownConverter } from "./markdown-converter"

type Props = {
    transcriptData?: Transcript[],
    summaryData?: string
}

export function TabsWrapper({transcriptData, summaryData}: Props) {
  return (
    <Tabs defaultValue="summary" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="detailed">Detailed Transcript</TabsTrigger>
        <TabsTrigger value="summary">Summary</TabsTrigger>
      </TabsList>
      <TabsContent value="summary">
        <Card>
          <CardHeader>
            <CardTitle>Summary</CardTitle>
            <CardDescription>
              
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 h-[600px] overflow-y-auto">
            <MarkdownConverter text={summaryData!}/>
          </CardContent>
       
        </Card>
      </TabsContent>
      <TabsContent value="detailed" className="h-full">
        <Card className="h-full flex flex-col">
          <CardHeader>
            <CardTitle>Detailed Transcripts</CardTitle>
            <CardDescription>
              Transcript of the video in detail.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 h-[600px] overflow-y-auto">
            <TranscriptList transcripts={transcriptData} />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
