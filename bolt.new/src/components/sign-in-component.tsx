'use client'

import { signIn } from "next-auth/react"
import { Button } from "./ui/button"
import { Github } from "lucide-react"

export function SignInButton() {
  return (
    <Button 
      onClick={() => signIn('github', { callbackUrl: '/' })}
      className="flex items-center gap-2"
    >
      <Github className="w-5 h-5" />
      Sign in with GitHub
    </Button>
  )
} 