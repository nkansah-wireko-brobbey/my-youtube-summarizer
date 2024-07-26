
import { TranscriptForm } from "@/components/transcript-form"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-center mb-6">YouTube<span className="text-primary">.Snap.</span> </h1>
      <h3 className="pb-4 text-gray-400">Condensing Content, Amplifying Insight</h3>
      <div className="w-full max-w-3xl">
      <TranscriptForm />
      </div>
    </div>
  )
}