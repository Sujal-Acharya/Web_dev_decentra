import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowUpRight, ArrowDownRight, Wallet, BarChart3 } from "lucide-react"
import Link from "next/link"
import { UserPositions } from "@/components/user-positions"
import { TransactionHistory } from "@/components/transaction-history"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BarChart3 className="h-6 w-6 text-primary" />
            <span>DeFiLend</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/markets" className="text-sm font-medium hover:text-primary">
              Markets
            </Link>
            <Link href="/dashboard" className="text-sm font-medium text-primary">
              Dashboard
            </Link>
            <Link href="/docs" className="text-sm font-medium hover:text-primary">
              Docs
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="hidden md:flex gap-2">
              <Wallet className="h-4 w-4" />
              0x1a2...3b4c
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your lending and borrowing positions</p>
          </div>
          <div className="flex gap-4">
            <Link href="/dashboard/deposit">
              <Button className="gap-2">
                <ArrowUpRight className="h-4 w-4" />
                Deposit
              </Button>
            </Link>
            <Link href="/dashboard/borrow">
              <Button variant="outline" className="gap-2">
                <ArrowDownRight className="h-4 w-4" />
                Borrow
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,546.80</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-500">+$235.12 (1.9%)</span> from last week
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Supplied</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$10,250.00</div>
              <p className="text-xs text-muted-foreground">
                Earning <span className="text-green-500">$42.35</span> per month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Borrowed</CardTitle>
              <ArrowDownRight className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$2,500.00</div>
              <p className="text-xs text-muted-foreground">
                Paying <span className="text-red-500">$8.75</span> per month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Health Factor</CardTitle>
              <Wallet className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.85</div>
              <div className="mt-2">
                <Progress value={65} className="h-2 bg-red-200" indicatorClassName="bg-green-500" />
              </div>
              <p className="text-xs text-muted-foreground mt-1">Safe (Liquidation at &lt;1.0)</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="positions" className="w-full">
          <TabsList className="grid w-full md:w-[400px] grid-cols-2">
            <TabsTrigger value="positions">Your Positions</TabsTrigger>
            <TabsTrigger value="history">Transaction History</TabsTrigger>
          </TabsList>
          <TabsContent value="positions" className="mt-6">
            <UserPositions />
          </TabsContent>
          <TabsContent value="history" className="mt-6">
            <TransactionHistory />
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 font-bold">
            <BarChart3 className="h-5 w-5 text-primary" />
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

