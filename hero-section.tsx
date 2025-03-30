import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-background/50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Decentralized Lending & Borrowing Platform
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Earn interest on your crypto assets or borrow against your holdings with the most secure DeFi protocol.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Launch App
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>$2.5B+ TVL</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>100k+ Users</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Multiple Audits</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full max-w-[450px] rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background p-6 shadow-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="space-y-4 text-center">
                  <div className="text-lg font-medium">Current Top Rates</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-background/80 p-4 backdrop-blur">
                      <div className="text-sm text-muted-foreground">Deposit APY</div>
                      <div className="text-2xl font-bold text-primary">8.2%</div>
                      <div className="text-sm">USDC</div>
                    </div>
                    <div className="rounded-lg bg-background/80 p-4 backdrop-blur">
                      <div className="text-sm text-muted-foreground">Borrow APR</div>
                      <div className="text-2xl font-bold text-primary">3.5%</div>
                      <div className="text-sm">ETH</div>
                    </div>
                    <div className="rounded-lg bg-background/80 p-4 backdrop-blur">
                      <div className="text-sm text-muted-foreground">Deposit APY</div>
                      <div className="text-2xl font-bold text-primary">5.7%</div>
                      <div className="text-sm">ETH</div>
                    </div>
                    <div className="rounded-lg bg-background/80 p-4 backdrop-blur">
                      <div className="text-sm text-muted-foreground">Borrow APR</div>
                      <div className="text-2xl font-bold text-primary">4.2%</div>
                      <div className="text-sm">USDC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

