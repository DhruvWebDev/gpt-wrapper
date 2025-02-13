"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Check, Terminal, Dot } from "lucide-react"

interface Step {
  name: string
  code: string
  order: number
}

interface Script {
  command: string
}

interface ProjectProps {
  project: {
    steps: Step[]
    scripts: Script[]
    description?: string // Optional description field
  }
}

export function StepList({ project }: ProjectProps) {
  const [steps, setSteps] = useState<Step[]>([])
  const [scripts, setScripts] = useState<Script[]>([])

  useEffect(() => {
    // Initialize steps
    const stepArray = project.steps.sort((a, b) => a.order - b.order);
    setSteps(stepArray);

    // Initialize scripts
    setScripts(project.scripts);
  }, [project]) // Re-run when project prop changes

  return (
    <div className="w-full max-w-2xl mx-auto space-y-4">
      <Card className="p-6 bg-zinc-950 border-zinc-800">
        <h2 className="text-xl font-semibold text-white mb-4">Create React Application</h2>

        {/* Description */}
        {project.description && (
          <div className="mb-4 text-white text-sm">
            {project.description}
          </div>
        )}

        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-2">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center space-x-3 text-white">
                <Dot  className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="font-medium">Create</span>
                <code className="px-2 py-1 rounded bg-zinc-800/50 text-sm">{step.code}</code>
              </div>
            ))}
          </div>
        </ScrollArea>
      </Card>

      {scripts.length > 0 && (
        <Card className="p-4 bg-zinc-950 border-zinc-800">
          {scripts.map((script, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 px-2 py-1 bg-zinc-900 rounded-md text-white mb-2 last:mb-0"
            >
              <Terminal className="w-4 h-4 text-zinc-400" />
              <code className="text-sm">
                {script.command}
              </code>
            </div>
          ))}
        </Card>
      )}
    </div>
  )
}
