import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const assets = [
  {
    id: 1,
    name: "Ethereum",
    symbol: "ETH",
    depositAPY: "5.7%",
    borrowAPR: "3.5%",
    totalSupplied: "$820M",
    totalBorrowed: "$420M",
    utilization: "51%",
  },
  {
    id: 2,
    name: "USD Coin",
    symbol: "USDC",
    depositAPY: "8.2%",
    borrowAPR: "4.2%",
    totalSupplied: "$950M",
    totalBorrowed: "$780M",
    utilization: "82%",
  },
  {
    id: 3,
    name: "Bitcoin",
    symbol: "BTC",
    depositAPY: "3.8%",
    borrowAPR: "2.9%",
    totalSupplied: "$540M",
    totalBorrowed: "$210M",
    utilization: "39%",
  },
  {
    id: 4,
    name: "Dai",
    symbol: "DAI",
    depositAPY: "7.5%",
    borrowAPR: "4.0%",
    totalSupplied: "$320M",
    totalBorrowed: "$240M",
    utilization: "75%",
  },
  {
    id: 5,
    name: "Solana",
    symbol: "SOL",
    depositAPY: "4.2%",
    borrowAPR: "3.1%",
    totalSupplied: "$180M",
    totalBorrowed: "$90M",
    utilization: "50%",
  },
]

export function AssetTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Asset</TableHead>
            <TableHead className="text-right">Deposit APY</TableHead>
            <TableHead className="text-right">Borrow APR</TableHead>
            <TableHead className="text-right">Total Supplied</TableHead>
            <TableHead className="text-right">Total Borrowed</TableHead>
            <TableHead className="text-right">Utilization</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((asset) => (
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
              <TableCell className="text-right font-medium text-emerald-500">{asset.depositAPY}</TableCell>
              <TableCell className="text-right text-rose-500">{asset.borrowAPR}</TableCell>
              <TableCell className="text-right">{asset.totalSupplied}</TableCell>
              <TableCell className="text-right">{asset.totalBorrowed}</TableCell>
              <TableCell className="text-right">
                <div className="flex items-center justify-end gap-2">
                  <div className="w-16 h-2 rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: asset.utilization }}></div>
                  </div>
                  <span>{asset.utilization}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Link href="/dashboard/deposit">
                    <Button size="sm" variant="outline">
                      Deposit
                    </Button>
                  </Link>
                  <Link href="/dashboard/borrow">
                    <Button size="sm">Borrow</Button>
                  </Link>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

