"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Github, Twitter, Lock } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { GlitchEffect } from "@/components/glitch-effect"
import { TerminalText } from "@/components/terminal-text"
import { SolanaLogo } from "@/components/solana-logo"

export default function Home() {
  const [transactionCount, setTransactionCount] = useState(0)
  const [showContent, setShowContent] = useState(false)
  const [activeStep, setActiveStep] = useState<number | null>(null)

  useEffect(() => {
    // Simulate transaction count increasing
    const interval = setInterval(() => {
      setTransactionCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 3000)

    // Show content after a short delay
    const timeout = setTimeout(() => {
      setShowContent(true)
    }, 500)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-flex items-center space-x-2 mb-2 bg-gradient-to-r from-primary-cyan/20 to-solana-purple/20 px-3 py-1 rounded-full">
                <SolanaLogo className="h-4 w-4" />
                <span className="text-xs font-medium">POWERED BY SOLANA</span>
              </div>

              <TypewriterEffect
                text="Vanta.cash — Solana's First Self-Destroying Mixer"
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white glow-text"
              />

              <div className="relative">
                <p className="text-lg md:text-xl text-gray-300">
                  <TerminalText text="No logs. No backdoors. No bullshit." delay={100} />
                </p>
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-cyan via-transparent to-transparent"></div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  className="bg-primary-cyan hover:bg-hover-blue transition-all duration-300 glow relative overflow-hidden group font-medium"
                >
                  <Link href="/mix">
                    <span className="relative z-10 flex items-center text-green-400">
                      Start Mixing <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary-cyan to-solana-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary-cyan text-primary-cyan hover:bg-primary-cyan/10 transition-all duration-300 relative overflow-hidden"
                >
                  <Link href="/docs">
                    <span className="relative z-10">How It Works</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-cyan to-transparent"></span>
                  </Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-cyan to-secondary-magenta rounded-lg blur opacity-30 animate-pulse"></div>
              <GlitchEffect className="h-64 w-full bg-muted-darker rounded-lg cyber-border relative">
                <div className="scan-line"></div>
                <div className="h-full w-full flex flex-col justify-center items-center p-4">
                  <div className="text-sm text-gray-400 mb-2 flex items-center">
                    <div className="w-2 h-2 rounded-full bg-primary-cyan mr-2 animate-pulse"></div>
                    TRANSACTION LINES
                  </div>
                  <div className="font-mono text-xs text-gray-500 mb-6 w-full">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div key={i} className="my-1 overflow-hidden text-ellipsis whitespace-nowrap">
                        {`${Math.random().toString(36).substring(2, 8)}...${Math.random().toString(36).substring(2, 8)} → ${Math.random().toString(36).substring(2, 8)}...${Math.random().toString(36).substring(2, 8)}`}
                      </div>
                    ))}
                  </div>
                  <div className="text-xl font-bold text-primary-cyan glow-text flex items-center">
                    <div className="hexagon bg-primary-cyan/20 w-8 h-8 flex items-center justify-center mr-2">
                      <span className="text-primary-cyan">⧉</span>
                    </div>
                    <span>{transactionCount.toLocaleString()}</span>
                    <span className="ml-2">transactions destroyed</span>
                  </div>
                </div>
              </GlitchEffect>

              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary-cyan/20 to-solana-purple/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      {showContent && (
        <section className="py-20 bg-gradient-to-b from-black via-muted-dark to-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,225,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <h2 className="text-3xl font-bold text-center mb-4 text-white glow-text">How It Works</h2>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
              Vanta uses advanced cryptographic techniques to ensure your transactions remain private on the Solana
              blockchain.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Disposable Wallets",
                  description: "Every interaction goes through randomized self-destructing wallets. No trace.",
                  icon: "🧩",
                  delay: 0,
                },
                {
                  title: "Vanta Timebomb",
                  description: "You set the fuse. Vanta erases links after 1h / 6h / 24h.",
                  icon: "⏱️",
                  delay: 100,
                },
                {
                  title: "Proof of Burn",
                  description: "On-chain verification. Off-chain deniability. Own your silence.",
                  icon: "🔥",
                  delay: 200,
                },
              ].map((card, index) => (
                <Card
                  key={index}
                  className="bg-muted-darker border-muted-dark overflow-hidden group cyber-border h-full transform transition-transform duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${card.delay}ms` }}
                >
                  <CardContent className="p-6 relative">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-cyan/10 to-secondary-magenta/10 rounded-bl-3xl -mr-6 -mt-6"></div>
                    <div className="mb-4 text-4xl relative z-10">{card.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-primary-cyan group-hover:text-secondary-magenta transition-colors duration-300 relative z-10">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 relative z-10">{card.description}</p>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contract Address Section */}
      {showContent && (
        <section className="py-12 bg-black relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,225,0.1),transparent_70%)]"></div>
          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="bg-muted-dark rounded-lg p-6 cyber-border relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-cyan/10 to-transparent -mt-10 -mr-10"></div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white glow-text">Contract Address</h2>

              <div className="bg-black/40 p-4 rounded-lg border border-primary-cyan/20 font-mono text-sm relative overflow-hidden mb-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                  <div className="mb-2 sm:mb-0">
                    <span className="text-primary-cyan mr-2">$VANTA:</span>
                    <span className="text-gray-300">jdjhhjdhjdjhfjhdhjfjhdfjd</span>
                  </div>
                  <button
                    className="bg-primary-cyan/20 hover:bg-primary-cyan/30 text-primary-cyan px-3 py-1 rounded-md text-xs transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText("jdjhhjdhjdjhfjhdhjfjhdfjd")
                      alert("Contract address copied to clipboard!")
                    }}
                  >
                    Copy Address
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted-darker p-4 rounded-lg border border-primary-cyan/20">
                  <h3 className="text-lg font-bold text-primary-cyan mb-3">$VANTA Token</h3>
                  <p className="text-gray-400 mb-4">
                    The native utility token of the Vanta ecosystem. Holders receive priority mixing, reduced fees, and
                    governance rights.
                  </p>
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="px-2 py-1 bg-primary-cyan/20 rounded-md text-primary-cyan">Max Supply: 1B</div>
                    <div className="px-2 py-1 bg-primary-cyan/20 rounded-md text-primary-cyan">Deflationary</div>
                  </div>
                  <div className="mt-4">
                    <Button className="bg-gradient-to-r from-primary-cyan to-solana-purple hover:opacity-90 transition-opacity w-full">
                      <span className="text-black font-bold">Buy $VANTA</span>
                    </Button>
                  </div>
                </div>

                <div className="bg-muted-darker p-4 rounded-lg border border-primary-cyan/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-red-500/10 rounded-bl-3xl"></div>
                  <h3 className="text-lg font-bold text-red-400 mb-3 flex items-center">
                    <Lock className="h-4 w-4 mr-2" /> Darkweb Access
                  </h3>
                  <p className="text-gray-400 mb-4">
                    For enhanced privacy, access Vanta through our Tor hidden service.
                  </p>
                  <div className="bg-black/60 p-3 rounded-md font-mono text-xs border border-red-500/20 break-all">
                    rzz3l4l7kecvsmuqehplybsi4ofjgv35sfbyhxwpv4mkd4wg47ttbid.onion
                  </div>
                  <p className="mt-3 text-xs text-gray-500">Requires Tor Browser. Maximum privacy, zero tracking.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      {showContent && (
        <footer className="py-6 border-t border-muted-dark relative mt-auto">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 flex items-center">
                <SolanaLogo className="h-5 w-5 mr-2" />
                <p className="text-gray-400">© Vanta.cash — 2025</p>
              </div>

              <div className="flex items-center space-x-4">
                <Link href="/docs" className="text-gray-400 hover:text-primary-cyan transition-colors">
                  Docs
                </Link>
                <Link
                  href="https://x.com/VantaCash"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-cyan transition-colors flex items-center space-x-1"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only sm:not-sr-only sm:inline-block">Twitter</span>
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-primary-cyan transition-colors flex items-center space-x-1"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only sm:not-sr-only sm:inline-block">GitHub</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      )}
    </main>
  )
}
