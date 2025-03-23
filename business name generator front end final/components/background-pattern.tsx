"use client"

import { useEffect, useState } from "react"
import {
  Briefcase,
  ShoppingBag,
  Utensils,
  Laptop,
  Palette,
  Shirt,
  Car,
  Building,
  Leaf,
  Plane,
  Music,
  HeartPulse,
  Hammer,
  Microscope,
  BookOpen,
  Camera,
  Lightbulb,
  Globe,
  Rocket,
} from "lucide-react"

const icons = [
  Briefcase,
  ShoppingBag,
  Utensils,
  Laptop,
  Palette,
  Shirt,
  Car,
  Building,
  Leaf,
  Plane,
  Music,
  HeartPulse,
  Hammer,
  Microscope,
  BookOpen,
  Camera,
  Lightbulb,
  Globe,
  Rocket,
]

export function BackgroundPattern() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-blue-50 to-purple-100 dark:from-pink-950/30 dark:via-blue-950/30 dark:to-purple-950/30" />

      {/* Industry icons pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => {
          const Icon = icons[i % icons.length]
          const size = Math.floor(Math.random() * 24) + 16
          const top = `${Math.random() * 100}%`
          const left = `${Math.random() * 100}%`
          const rotate = `${Math.floor(Math.random() * 360)}deg`
          const opacity = Math.random() * 0.07 + 0.03
          const colorClass = [
            "text-pink-300",
            "text-purple-300",
            "text-blue-300",
            "text-cyan-300",
            "text-teal-300",
            "text-green-300",
            "text-yellow-300",
            "text-orange-300",
            "text-red-300",
          ][Math.floor(Math.random() * 9)]

          return (
            <div
              key={i}
              className={`absolute ${colorClass}`}
              style={{
                top,
                left,
                transform: `rotate(${rotate})`,
                animation: `float ${Math.floor(Math.random() * 10) + 20}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 10}s`,
                opacity,
              }}
            >
              <Icon size={size} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

