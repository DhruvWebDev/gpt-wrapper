'use client';

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface TerminalProps {
  outputs: {
    command: string;
    output: string[];
    exitCode?: number;
  }[];
  className?: string;
}

export function Terminal({ outputs, className }: TerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new output arrives
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [outputs]);

  // Helper function to determine status from exit code
  const getStatus = (exitCode?: number) => {
    if (exitCode === undefined) return 'running';
    return exitCode === 0 ? 'completed' : 'error';
  };

  return (
    <div 
      ref={terminalRef}
      className={cn(
        "bg-zinc-900 text-zinc-100 font-mono p-4",
        "overflow-auto",
        className
      )}
    >
      {outputs.map((process, index) => (
        <div key={index} className="mb-4">
          {/* Command with status */}
          <div className="flex items-center gap-2 text-sm">
            <span className="text-emerald-400">$</span>
            <span>{process.command}</span>
            <span className={cn(
              "px-1.5 py-0.5 text-xs rounded-md",
              process.exitCode === undefined && "bg-blue-500/20 text-blue-400",
              process.exitCode === 0 && "bg-emerald-500/20 text-emerald-400",
              process.exitCode !== undefined && process.exitCode !== 0 && "bg-red-500/20 text-red-400"
            )}>
              {getStatus(process.exitCode)}
            </span>
            {process.exitCode !== undefined && process.exitCode !== 0 && (
              <span className="text-xs text-red-400">
                (Exit: {process.exitCode})
              </span>
            )}
          </div>

          {/* Output */}
          <div className="pl-6 mt-1 text-sm text-zinc-400 font-mono">
            {process.output.map((line, lineIndex) => (
              <div key={lineIndex}>{line}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 