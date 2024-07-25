
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold text-center mb-6">Youtube Summarizer</h1>
      <div className="w-full max-w-3xl">
        <Input
          type="search"
          placeholder="Search for insights..."
          className="w-full rounded-md border border-input bg-background px-8 py-8 text-xl shadow-sm focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>
    </div>
  )
}