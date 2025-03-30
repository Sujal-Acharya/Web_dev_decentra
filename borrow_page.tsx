import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import { AssetSelector } from "@/components/asset-selector"
import { Slider } from "@/components/ui/slider"

export default function BorrowPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="mb-8">
        <Link href="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Borrow Assets</h1>
        <p className="text-muted-foreground">Borrow assets against your supplied collateral</p>
      </div>

      <Tabs defaultValue="borrow" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="borrow">Borrow</TabsTrigger>
          <TabsTrigger value="repay">Repay</TabsTrigger>
        </TabsList>
        <TabsContent value="borrow" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Borrow Assets</CardTitle>
              <CardDescription>Choose an asset to borrow against your collateral</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="asset">Select Asset</Label>
                <AssetSelector />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="amount">Amount</Label>
                  <span className="text-sm text-muted-foreground">Available: $7,500.00</span>
                </div>
                <div className="flex space-x-2">
                  <Input id="amount" placeholder="0.0" type="number" />
                  <Button variant="outline">Max</Button>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Value</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label>Borrow Limit</Label>
                  <span className="text-sm">50%</span>
                </div>
                <Slider defaultValue={[50]} max={80} step={1} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Safer</span>
                  <span>Riskier</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Borrow APR
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span className="font-medium text-rose-500">3.5%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Health Factor After
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span className="font-medium">1.85 → 1.50</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Liquidation at
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span>$3,125.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Transaction Fee
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span>~$2.50</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
              <Button className="w-full">Borrow ETH</Button>
              <p className="text-xs text-muted-foreground text-center">
                By borrowing, you agree to the{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>{" "}
                and understand the risks of liquidation.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="repay" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Repay Loan</CardTitle>
              <CardDescription>Repay your borrowed assets to improve your health factor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="asset">Select Asset</Label>
                <AssetSelector />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="amount">Amount</Label>
                  <span className="text-sm text-muted-foreground">Borrowed: 0.05 BTC ($2,500.00)</span>
                </div>
                <div className="flex space-x-2">
                  <Input id="amount" placeholder="0.0" type="number" />
                  <Button variant="outline">Max</Button>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Value</span>
                  <span>$0.00</span>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Health Factor After
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span className="font-medium">1.85 → 2.20</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Transaction Fee
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span>~$2.50</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Repay BTC</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

