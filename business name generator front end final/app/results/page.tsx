"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Loader2, Copy, Check, ArrowLeft } from "lucide-react"

// Update BusinessName type (remove id)
type BusinessName = {
  business_name: string
  slogan: string
}

export default function ResultsPage() {
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<BusinessName[]>([])
  const [copied, setCopied] = useState<number | null>(null)

  useEffect(() => {
    const fetchResults = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const industry = searchParams.get("industry")
        const description = searchParams.get("description")
        const nameStyle = searchParams.get("nameStyle")
        const sloganStyles = searchParams.getAll("sloganStyles")

        console.log("Sending request with:", { industry, description, nameStyle, sloganStyles })

        const response = await fetch("https://individual-assignment-2-final.onrender.com/generate", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ industry, description, nameStyle, sloganStyles }),
        })

        if (!response.ok) {
          throw new Error(`API responded with status: ${response.status}`)
        }

        const data = await response.json()
        console.log("API Response:", data)

        if (!Array.isArray(data.results) || data.results.length === 0) {
          console.log("Using fallback data")
          setResults([
            { business_name: "InnovateTech", slogan: "Innovating for a better tomorrow" },
            { business_name: "FutureSphere", slogan: "The future is now" },
            { business_name: "BrightPath", slogan: "Lighting the way to success" },
            { business_name: "ElevateX", slogan: "Elevate your expectations" },
            { business_name: "PeakVision", slogan: "See beyond the horizon" },
            { business_name: "NexGen Solutions", slogan: "Next generation thinking for today's challenges" },
          ])
        } else {
          setResults(data.results)
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to fetch business names. Please try again.")
        setResults([
          { business_name: "InnovateTech", slogan: "Innovating for a better tomorrow" },
          { business_name: "FutureSphere", slogan: "The future is now" },
          { business_name: "BrightPath", slogan: "Lighting the way to success" },
          { business_name: "ElevateX", slogan: "Elevate your expectations" },
          { business_name: "PeakVision", slogan: "See beyond the horizon" },
          { business_name: "NexGen Solutions", slogan: "Next generation thinking for today's challenges" },
        ])
      } finally {
        setIsLoading(false)
      }
    }

    fetchResults()
  }, [])

  const copyToClipboard = (index: number, text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(index)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100">
      {/* Header */}
      <header className="py-6 px-4 backdrop-blur-sm bg-white/50 border-b border-pink-200">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-2 w-fit text-pink-500 hover:text-pink-600">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to Generator</span>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4 text-pink-500">Your Generated Business Names</h1>
          <p className="text-gray-600 max-w-2xl">
            Here are some business name and slogan combinations based on your preferences. Click on any card to copy
            both the name and slogan to your clipboard.
          </p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-12 backdrop-blur-sm bg-white/70 rounded-2xl border border-pink-200">
            <Loader2 className="h-12 w-12 animate-spin text-pink-500 mb-4" />
            <p className="text-lg text-gray-600">Generating creative business names...</p>
          </div>
        ) : error ? (
          <Card className="p-6 bg-red-50 border-red-200 backdrop-blur-sm rounded-2xl">
            <CardContent className="p-0 text-center">
              <p className="text-lg font-medium text-red-500">{error}</p>
              <Link href="/" className="mt-4 inline-block">
                <Button className="bg-pink-400 hover:bg-pink-500">Try Again</Button>
              </Link>
            </CardContent>
          </Card>
        ) : results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((item, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-all duration-300 hover:shadow-lg backdrop-blur-sm bg-white/80 border-pink-200 hover:border-pink-300 cursor-pointer rounded-2xl"
                onClick={() => copyToClipboard(index, `${item.business_name} - ${item.slogan}`)}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-4 right-4">
                    {copied === index ? (
                      <Check className="h-5 w-5 text-green-500" />
                    ) : (
                      <Copy className="h-5 w-5 text-pink-300" />
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-pink-500">{item.business_name}</h2>
                  <p className="text-gray-600">{item.slogan}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="p-6 backdrop-blur-sm bg-white/80 border-pink-200 rounded-2xl">
            <CardContent className="p-0 text-center">
              <p className="text-lg">No business names generated. Try different parameters.</p>
              <Link href="/" className="mt-4 inline-block">
                <Button className="bg-pink-400 hover:bg-pink-500">Try Again</Button>
              </Link>
            </CardContent>
          </Card>
        )}

        {/* Footer spacing */}
        <div className="mt-12"></div>
      </main>
    </div>
  )
}

