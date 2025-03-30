import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const suppliedAssets = [
  {
    id: 1,
    name: "Ethereum",
    symbol: "ETH",
    balance: "2.5 ETH",
    value: "$4,250.00",
    apy: "5.7%",
    collateral: true,
  },
  {
    id: 2,
    name: "USD Coin",
    symbol: "USDC",
    balance: "6,000 USDC",
    value: "$6,000.00",
    apy: "8.2%",
    collateral: true,
  },
]

const borrowedAssets = [
  {
    id: 1,
    name: "Bitcoin",
    symbol: "BTC",
    balance: "0.05 BTC",
    value: "$2,500.00",
    apr: "2.9%",
  },
]

export function UserPositions() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium mb-4">Supplied Assets</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead className="text-right">Balance</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead className="text-right">APY</TableHead>
                <TableHead className="text-right">Collateral</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliedAssets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        {asset.symbol.charAt(0)}
                      </div>
                      <div>
                        <div>{asset.name}</div>
                        <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{asset.balance}</TableCell>
                  <TableCell className="text-right">{asset.value}</TableCell>
                  <TableCell className="text-right font-medium text-green-500">{asset.apy}</TableCell>
                  <TableCell className="text-right">
                    {asset.collateral ? (
                      <span className="inline-flex items-center rounded-full bg-emerald-950 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                        Yes
                      </span>
                    ) : (
                      <span className="inline-flex items-center rounded-full bg-gray-800 px-2.5 py-0.5 text-xs font-medium text-gray-400">
                        No
                      </span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/dashboard/withdraw/${asset.id}`}>
                        <Button size="sm" variant="outline">
                          Withdraw
                        </Button>
                      </Link>
                      <Button size="sm" variant="ghost">
                        {asset.collateral ? "Disable" : "Enable"} Collateral
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-medium mb-4">Borrowed Assets</h3>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Asset</TableHead>
                <TableHead className="text-right">Balance</TableHead>
                <TableHead className="text-right">Value</TableHead>
                <TableHead className="text-right">APR</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borrowedAssets.map((asset) => (
                <TableRow key={asset.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                        {asset.symbol.charAt(0)}
                      </div>
                      <div>
                        <div>{asset.name}</div>
                        <div className="text-xs text-muted-foreground">{asset.symbol}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{asset.balance}</TableCell>
                  <TableCell className="text-right">{asset.value}</TableCell>
                  <TableCell className="text-right font-medium text-red-500">{asset.apr}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/dashboard/repay/${asset.id}`}>
                        <Button size="sm">Repay</Button>
                      </Link>
                      <Link href={`/dashboard/borrow-more/${asset.id}`}>
                        <Button size="sm" variant="outline">
                          Borrow More
                        </Button>
                      </Link>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

