import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Info } from "lucide-react"
import Link from "next/link"
import { AssetSelector } from "@/components/asset-selector"

export default function DepositPage() {
  return (
    <div className="container max-w-4xl py-8">
      <div className="mb-8">
        <Link href="/dashboard" className="flex items-center text-sm text-muted-foreground hover:text-foreground mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Dashboard
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Deposit Assets</h1>
        <p className="text-muted-foreground">Supply assets to the protocol and earn interest</p>
      </div>

      <Tabs defaultValue="deposit" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="deposit">Deposit</TabsTrigger>
          <TabsTrigger value="withdraw">Withdraw</TabsTrigger>
        </TabsList>
        <TabsContent value="deposit" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Deposit Assets</CardTitle>
              <CardDescription>Choose an asset to deposit and start earning interest</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="asset">Select Asset</Label>
                <AssetSelector />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="amount">Amount</Label>
                  <span className="text-sm text-muted-foreground">Balance: 5.2 ETH</span>
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
                    Deposit APY
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span className="font-medium text-emerald-500">5.7%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="flex items-center gap-1">
                    Collateral Factor
                    <Info className="h-3 w-3 text-muted-foreground" />
                  </span>
                  <span>80%</span>
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
              <Button className="w-full">Deposit ETH</Button>
              <p className="text-xs text-muted-foreground text-center">
                By depositing, you agree to the{" "}
                <Link href="/terms" className="underline">
                  Terms of Service
                </Link>{" "}
                and understand the risks involved.
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="withdraw" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Withdraw Assets</CardTitle>
              <CardDescription>Withdraw your supplied assets from the protocol</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="asset">Select Asset</Label>
                <AssetSelector />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="amount">Amount</Label>
                  <span className="text-sm text-muted-foreground">Deposited: 2.5 ETH</span>
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
                  <span className="font-medium">1.85 → 1.50</span>
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
              <Button className="w-full">Withdraw ETH</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

