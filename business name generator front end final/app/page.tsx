"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Zap,
  Clock,
  Sparkles,
  Rocket,
  Target,
  Laugh,
  Lightbulb,
  Bookmark,
  Megaphone,
  Award,
  MessageCircle,
  Heart,
  Check,
} from "lucide-react"

export default function Home() {
  const [selectedNameStyle, setSelectedNameStyle] = useState("modern")
  const [selectedSloganStyles, setSelectedSloganStyles] = useState<string[]>([])

  const toggleSloganStyle = (style: string) => {
    if (selectedSloganStyles.includes(style)) {
      setSelectedSloganStyles(selectedSloganStyles.filter((s) => s !== style))
    } else {
      setSelectedSloganStyles([...selectedSloganStyles, style])
    }
  }

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl min-h-screen flex flex-col items-center justify-center">
      <div className="w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-pink-400">
          Welcome to Business Name and Slogan Generator
        </h1>

        <Card className="pastel-card">
          <CardContent className="p-6 md:p-8">
            <form action="/results" className="space-y-8">
              {/* Business Industry */}
              <div>
                <Label htmlFor="industry" className="text-lg font-medium mb-2 block text-pink-500">
                  Business Industry
                </Label>
                <Input
                  id="industry"
                  name="industry"
                  placeholder="e.g. Technology, Food, Fashion"
                  className="mt-1 bg-pink-50 border-pink-200 h-12 text-base rounded-xl focus:border-pink-300 focus:ring-pink-200"
                  required
                />
              </div>

              {/* Business Description */}
              <div>
                <Label htmlFor="description" className="text-lg font-medium mb-2 block text-blue-500">
                  Business Description
                </Label>
                <Textarea
                  id="description"
                  name="description"
                  placeholder="Describe your business in a few words"
                  className="mt-1 bg-blue-50 border-blue-200 min-h-[100px] text-base rounded-xl focus:border-blue-300 focus:ring-blue-200"
                  required
                />
              </div>

              {/* Name Styles */}
              <div>
                <Label className="text-lg font-medium mb-4 block text-purple-500">Name Style</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Modern */}
                  <div
                    className={`style-option name-style-modern cursor-pointer ${selectedNameStyle === "modern" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("modern")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="modern"
                      value="modern"
                      className="hidden"
                      checked={selectedNameStyle === "modern"}
                      onChange={() => setSelectedNameStyle("modern")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "modern" ? "border-pink-400 bg-pink-200" : "border-pink-300"}`}
                      >
                        {selectedNameStyle === "modern" && <div className="h-2 w-2 rounded-full bg-pink-500"></div>}
                      </div>
                      <span className={`${selectedNameStyle === "modern" ? "font-bold text-pink-600" : ""}`}>
                        Modern
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Clean, contemporary names that feel fresh</p>
                    <Zap className="style-option-icon text-pink-300" />
                  </div>

                  {/* Classic */}
                  <div
                    className={`style-option name-style-classic cursor-pointer ${selectedNameStyle === "classic" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("classic")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="classic"
                      value="classic"
                      className="hidden"
                      checked={selectedNameStyle === "classic"}
                      onChange={() => setSelectedNameStyle("classic")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "classic" ? "border-blue-400 bg-blue-200" : "border-blue-300"}`}
                      >
                        {selectedNameStyle === "classic" && <div className="h-2 w-2 rounded-full bg-blue-500"></div>}
                      </div>
                      <span className={`${selectedNameStyle === "classic" ? "font-bold text-blue-600" : ""}`}>
                        Classic
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Timeless names with traditional appeal</p>
                    <Clock className="style-option-icon text-blue-300" />
                  </div>

                  {/* Creative */}
                  <div
                    className={`style-option name-style-creative cursor-pointer ${selectedNameStyle === "creative" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("creative")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="creative"
                      value="creative"
                      className="hidden"
                      checked={selectedNameStyle === "creative"}
                      onChange={() => setSelectedNameStyle("creative")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "creative" ? "border-purple-400 bg-purple-200" : "border-purple-300"}`}
                      >
                        {selectedNameStyle === "creative" && <div className="h-2 w-2 rounded-full bg-purple-500"></div>}
                      </div>
                      <span className={`${selectedNameStyle === "creative" ? "font-bold text-purple-600" : ""}`}>
                        Creative
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Unique, imaginative names that stand out</p>
                    <Sparkles className="style-option-icon text-purple-300" />
                  </div>

                  {/* Futuristic */}
                  <div
                    className={`style-option name-style-futuristic cursor-pointer ${selectedNameStyle === "futuristic" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("futuristic")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="futuristic"
                      value="futuristic"
                      className="hidden"
                      checked={selectedNameStyle === "futuristic"}
                      onChange={() => setSelectedNameStyle("futuristic")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "futuristic" ? "border-cyan-400 bg-cyan-200" : "border-cyan-300"}`}
                      >
                        {selectedNameStyle === "futuristic" && <div className="h-2 w-2 rounded-full bg-cyan-500"></div>}
                      </div>
                      <span className={`${selectedNameStyle === "futuristic" ? "font-bold text-cyan-600" : ""}`}>
                        Futuristic
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Forward-thinking names with innovative flair</p>
                    <Rocket className="style-option-icon text-cyan-300" />
                  </div>

                  {/* Minimalist */}
                  <div
                    className={`style-option name-style-minimalist cursor-pointer ${selectedNameStyle === "minimalist" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("minimalist")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="minimalist"
                      value="minimalist"
                      className="hidden"
                      checked={selectedNameStyle === "minimalist"}
                      onChange={() => setSelectedNameStyle("minimalist")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "minimalist" ? "border-gray-400 bg-gray-200" : "border-gray-300"}`}
                      >
                        {selectedNameStyle === "minimalist" && <div className="h-2 w-2 rounded-full bg-gray-500"></div>}
                      </div>
                      <span className={`${selectedNameStyle === "minimalist" ? "font-bold text-gray-600" : ""}`}>
                        Minimalist
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Simple, streamlined names that are memorable</p>
                    <Target className="style-option-icon text-gray-300" />
                  </div>

                  {/* Playful */}
                  <div
                    className={`style-option name-style-playful cursor-pointer ${selectedNameStyle === "playful" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("playful")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="playful"
                      value="playful"
                      className="hidden"
                      checked={selectedNameStyle === "playful"}
                      onChange={() => setSelectedNameStyle("playful")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "playful" ? "border-yellow-400 bg-yellow-200" : "border-yellow-300"}`}
                      >
                        {selectedNameStyle === "playful" && <div className="h-2 w-2 rounded-full bg-yellow-500"></div>}
                      </div>
                      <span className={`${selectedNameStyle === "playful" ? "font-bold text-yellow-600" : ""}`}>
                        Playful
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Fun, lighthearted names with personality</p>
                    <Laugh className="style-option-icon text-yellow-300" />
                  </div>

                  {/* Technical */}
                  <div
                    className={`style-option name-style-technical cursor-pointer ${selectedNameStyle === "technical" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("technical")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="technical"
                      value="technical"
                      className="hidden"
                      checked={selectedNameStyle === "technical"}
                      onChange={() => setSelectedNameStyle("technical")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "technical" ? "border-green-400 bg-green-200" : "border-green-300"}`}
                      >
                        {selectedNameStyle === "technical" && <div className="h-2 w-2 rounded-full bg-green-500"></div>}
                      </div>
                      <span className={`${selectedNameStyle === "technical" ? "font-bold text-green-600" : ""}`}>
                        Technical
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Precise names that convey expertise</p>
                    <Lightbulb className="style-option-icon text-green-300" />
                  </div>

                  {/* Traditional */}
                  <div
                    className={`style-option name-style-traditional cursor-pointer ${selectedNameStyle === "traditional" ? "selected" : ""}`}
                    onClick={() => setSelectedNameStyle("traditional")}
                  >
                    <input
                      type="radio"
                      name="nameStyle"
                      id="traditional"
                      value="traditional"
                      className="hidden"
                      checked={selectedNameStyle === "traditional"}
                      onChange={() => setSelectedNameStyle("traditional")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${selectedNameStyle === "traditional" ? "border-orange-400 bg-orange-200" : "border-orange-300"}`}
                      >
                        {selectedNameStyle === "traditional" && (
                          <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                        )}
                      </div>
                      <span className={`${selectedNameStyle === "traditional" ? "font-bold text-orange-600" : ""}`}>
                        Traditional
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Established names that inspire trust</p>
                    <Bookmark className="style-option-icon text-orange-300" />
                  </div>
                </div>
              </div>

              {/* Slogan Styles */}
              <div>
                <Label className="text-lg font-medium mb-4 block text-teal-500">Slogan Styles</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* Inspirational */}
                  <div
                    className={`style-option slogan-style-inspirational cursor-pointer ${selectedSloganStyles.includes("inspirational") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("inspirational")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="inspirational"
                      value="inspirational"
                      className="hidden"
                      checked={selectedSloganStyles.includes("inspirational")}
                      onChange={() => toggleSloganStyle("inspirational")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("inspirational") ? "border-purple-400 bg-purple-200" : "border-purple-300"}`}
                      >
                        {selectedSloganStyles.includes("inspirational") && (
                          <Check className="h-3 w-3 text-purple-600" />
                        )}
                      </div>
                      <span
                        className={`${selectedSloganStyles.includes("inspirational") ? "font-bold text-purple-600" : ""}`}
                      >
                        Inspirational
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Uplifting phrases that motivate</p>
                    <Sparkles className="style-option-icon text-purple-300" />
                  </div>

                  {/* Funny */}
                  <div
                    className={`style-option slogan-style-funny cursor-pointer ${selectedSloganStyles.includes("funny") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("funny")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="funny"
                      value="funny"
                      className="hidden"
                      checked={selectedSloganStyles.includes("funny")}
                      onChange={() => toggleSloganStyle("funny")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("funny") ? "border-yellow-400 bg-yellow-200" : "border-yellow-300"}`}
                      >
                        {selectedSloganStyles.includes("funny") && <Check className="h-3 w-3 text-yellow-600" />}
                      </div>
                      <span className={`${selectedSloganStyles.includes("funny") ? "font-bold text-yellow-600" : ""}`}>
                        Funny
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Humorous taglines that make people smile</p>
                    <Laugh className="style-option-icon text-yellow-300" />
                  </div>

                  {/* Professional */}
                  <div
                    className={`style-option slogan-style-professional cursor-pointer ${selectedSloganStyles.includes("professional") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("professional")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="professional"
                      value="professional"
                      className="hidden"
                      checked={selectedSloganStyles.includes("professional")}
                      onChange={() => toggleSloganStyle("professional")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("professional") ? "border-blue-400 bg-blue-200" : "border-blue-300"}`}
                      >
                        {selectedSloganStyles.includes("professional") && <Check className="h-3 w-3 text-blue-600" />}
                      </div>
                      <span
                        className={`${selectedSloganStyles.includes("professional") ? "font-bold text-blue-600" : ""}`}
                      >
                        Professional
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Polished, business-oriented slogans</p>
                    <Lightbulb className="style-option-icon text-blue-300" />
                  </div>

                  {/* Catchy */}
                  <div
                    className={`style-option slogan-style-catchy cursor-pointer ${selectedSloganStyles.includes("catchy") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("catchy")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="catchy"
                      value="catchy"
                      className="hidden"
                      checked={selectedSloganStyles.includes("catchy")}
                      onChange={() => toggleSloganStyle("catchy")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("catchy") ? "border-pink-400 bg-pink-200" : "border-pink-300"}`}
                      >
                        {selectedSloganStyles.includes("catchy") && <Check className="h-3 w-3 text-pink-600" />}
                      </div>
                      <span className={`${selectedSloganStyles.includes("catchy") ? "font-bold text-pink-600" : ""}`}>
                        Catchy
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Memorable phrases that stick in minds</p>
                    <Megaphone className="style-option-icon text-pink-300" />
                  </div>

                  {/* Bold */}
                  <div
                    className={`style-option slogan-style-bold cursor-pointer ${selectedSloganStyles.includes("bold") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("bold")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="bold"
                      value="bold"
                      className="hidden"
                      checked={selectedSloganStyles.includes("bold")}
                      onChange={() => toggleSloganStyle("bold")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("bold") ? "border-red-400 bg-red-200" : "border-red-300"}`}
                      >
                        {selectedSloganStyles.includes("bold") && <Check className="h-3 w-3 text-red-600" />}
                      </div>
                      <span className={`${selectedSloganStyles.includes("bold") ? "font-bold text-red-600" : ""}`}>
                        Bold
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Strong statements that command attention</p>
                    <Award className="style-option-icon text-red-300" />
                  </div>

                  {/* Minimalist */}
                  <div
                    className={`style-option slogan-style-minimalist cursor-pointer ${selectedSloganStyles.includes("minimalist") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("minimalist")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="minimalist-slogan"
                      value="minimalist"
                      className="hidden"
                      checked={selectedSloganStyles.includes("minimalist")}
                      onChange={() => toggleSloganStyle("minimalist")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("minimalist") ? "border-gray-400 bg-gray-200" : "border-gray-300"}`}
                      >
                        {selectedSloganStyles.includes("minimalist") && <Check className="h-3 w-3 text-gray-600" />}
                      </div>
                      <span
                        className={`${selectedSloganStyles.includes("minimalist") ? "font-bold text-gray-600" : ""}`}
                      >
                        Minimalist
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Simple, concise phrases with impact</p>
                    <Target className="style-option-icon text-gray-300" />
                  </div>

                  {/* Question */}
                  <div
                    className={`style-option slogan-style-question cursor-pointer ${selectedSloganStyles.includes("question") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("question")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="question"
                      value="question"
                      className="hidden"
                      checked={selectedSloganStyles.includes("question")}
                      onChange={() => toggleSloganStyle("question")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("question") ? "border-teal-400 bg-teal-200" : "border-teal-300"}`}
                      >
                        {selectedSloganStyles.includes("question") && <Check className="h-3 w-3 text-teal-600" />}
                      </div>
                      <span className={`${selectedSloganStyles.includes("question") ? "font-bold text-teal-600" : ""}`}>
                        Question-based
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Engaging queries that prompt thought</p>
                    <MessageCircle className="style-option-icon text-teal-300" />
                  </div>

                  {/* Quirky (formerly Emotional) */}
                  <div
                    className={`style-option slogan-style-quirky cursor-pointer ${selectedSloganStyles.includes("quirky") ? "selected" : ""}`}
                    onClick={() => toggleSloganStyle("quirky")}
                  >
                    <input
                      type="checkbox"
                      name="sloganStyles"
                      id="quirky"
                      value="quirky"
                      className="hidden"
                      checked={selectedSloganStyles.includes("quirky")}
                      onChange={() => toggleSloganStyle("quirky")}
                    />
                    <div className="flex items-center gap-2">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded border-2 ${selectedSloganStyles.includes("quirky") ? "border-rose-400 bg-rose-200" : "border-rose-300"}`}
                      >
                        {selectedSloganStyles.includes("quirky") && <Check className="h-3 w-3 text-rose-600" />}
                      </div>
                      <span className={`${selectedSloganStyles.includes("quirky") ? "font-bold text-rose-600" : ""}`}>
                        Quirky
                      </span>
                    </div>
                    <p className="text-xs mt-1 text-gray-600">Offbeat slogans with unique character</p>
                    <Heart className="style-option-icon text-rose-300" />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full py-6 text-lg bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 hover:from-pink-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg rounded-xl"
                >
                  Generate Business Names
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}

