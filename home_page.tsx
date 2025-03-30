import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, TrendingUp, Shield, Zap, BarChart3 } from "lucide-react"
import { MarketStats } from "@/components/market-stats"
import { HeroSection } from "@/components/hero-section"
import { AssetTable } from "@/components/asset-table"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span>DeFiLend</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/markets" className="text-sm font-medium hover:text-primary">
              Markets
            </Link>
            <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
              Dashboard
            </Link>
            <Link href="/docs" className="text-sm font-medium hover:text-primary">
              Docs
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="/dashboard">
              <Button>Launch App</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />

        <section className="container py-12 md:py-24">
          <div className="mx-auto text-center md:max-w-[58rem]">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-4">Market Overview</h2>
            <p className="text-muted-foreground md:text-xl mb-12">
              View the latest rates and market conditions across all supported assets
            </p>
          </div>

          <MarketStats />

          <div className="mt-12">
            <AssetTable />
          </div>
        </section>

        <section className="container py-12 md:py-24 bg-muted/50 rounded-lg">
          <div className="mx-auto text-center md:max-w-[58rem] mb-12">
            <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-4">Why Choose DeFiLend?</h2>
            <p className="text-muted-foreground md:text-xl">
              Our platform offers the best rates and security in the DeFi space
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Security First</CardTitle>
                <CardDescription>
                  Multiple audits by leading security firms and insurance options for your assets
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Competitive Rates</CardTitle>
                <CardDescription>
                  Earn the highest yields on your deposits and borrow at the lowest rates
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Fast & Efficient</CardTitle>
                <CardDescription>Low gas fees and quick transaction processing on multiple blockchains</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <section className="container py-12 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl mb-6">
                Ready to start your DeFi journey?
              </h2>
              <p className="text-muted-foreground md:text-xl mb-8">
                Connect your wallet and start earning interest on your crypto assets or take out a loan in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto">
                    Launch App
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Read Documentation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-muted p-8 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <p className="text-muted-foreground mb-4">Interactive demo would go here</p>
                <p className="text-sm text-muted-foreground">
                  Showing a simplified version of the lending/borrowing interface
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <TrendingUp className="h-5 w-5 text-primary" />
            <span>DeFiLend</span>
          </div>
          <div className="flex gap-8">
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground">
              Docs
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DeFiLend. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

