
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Link2,
  Sparkles,
  Code2,
  Globe,
  Smartphone,
  Database,
  Layout,
  Box,
  Cloud,
  Blocks,
  Terminal,
  Cpu,
  Palette,
  FileCode,
  Server,
  Layers,
} from "lucide-react"
import Link from "next/link"

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold">
          bolt
        </Link>
        <Link href="/careers" className="text-sm hover:text-gray-300 transition-colors">
          We&apos;re hiring*
        </Link>
      </nav>

      {/* Notification Banner */}
      <div className="flex items-center justify-center bg-gray-800/50 py-2 px-4">
        <div className="flex items-center gap-2 rounded-full bg-gray-700/50 px-4 py-1.5 text-sm">
          <span className="flex h-2 w-2 rounded-full bg-orange-500" />
          New! Create Native Mobile Apps with Bolt
        </div>
      </div>

      {/* Hero Section */}
      <main className="mx-auto max-w-4xl px-4 pt-24 text-center">
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">What do you want to build?</h1>
        <p className="mt-6 text-lg text-gray-300">
          Prompt, run, edit, and deploy full-stack <span className="font-medium">web</span> and{" "}
          <span className="font-medium">mobile</span> apps.
        </p>

        {/* Search Input */}
        <div className="mt-12">
          <div className="relative">
            <Input
              placeholder="How can Bolt help you today?"
              className="h-[72px] bg-gray-800/50 border-gray-700 text-lg pl-6 pr-24"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Link2 className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Sparkles className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <Button variant="outline" className="bg-blue-500/10 border-blue-500/20 hover:bg-blue-500/20">
            <span className="text-blue-400 mr-2">NEW</span> Build a mobile app with Expo
          </Button>
          <Button variant="outline" className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50">
            Start a blog with Astro
          </Button>
          <Button variant="outline" className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50">
            Create a docs site with Vitepress
          </Button>
        </div>

        {/* Secondary Actions */}
        <div className="mt-2 flex flex-wrap justify-center gap-2">
          <Button variant="outline" className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50">
            Scaffold UI with shadcn
          </Button>
          <Button variant="outline" className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50">
            Draft a presentation with Slidev
          </Button>
          <Button variant="outline" className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50">
            Code a video with Remotion
          </Button>
        </div>

        {/* Framework Selection */}
        <p className="mt-12 text-sm text-gray-400">or start a blank app with your favorite stack</p>
        <div className="mt-6 grid grid-cols-4 gap-4 sm:grid-cols-8 place-items-center">
          {[
            { icon: Code2, label: "Code" },
            { icon: Globe, label: "Web" },
            { icon: Smartphone, label: "Mobile" },
            { icon: Database, label: "Database" },
            { icon: Layout, label: "UI" },
            { icon: Box, label: "Package" },
            { icon: Cloud, label: "Cloud" },
            { icon: Blocks, label: "Components" },
            { icon: Terminal, label: "CLI" },
            { icon: Cpu, label: "System" },
            { icon: Palette, label: "Design" },
            { icon: FileCode, label: "Editor" },
            { icon: Server, label: "Backend" },
            { icon: Layers, label: "Frontend" },
            { icon: Link2, label: "API" },
            { icon: Sparkles, label: "AI" },
          ].map(({ icon: Icon, label }, i) => (
            <button
              key={i}
              className="h-12 w-12 rounded-lg bg-gray-800/50 flex items-center justify-center hover:bg-gray-700/50 transition-colors group"
              title={label}
            >
              <Icon className="h-6 w-6 text-gray-400 group-hover:text-gray-200 transition-colors" />
            </button>
          ))}
        </div>
      </main>
    </div>
  )
}


