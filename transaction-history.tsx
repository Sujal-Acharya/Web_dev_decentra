import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowUpRight, ArrowDownRight, RefreshCw, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const transactions = [
  {
    id: "tx1",
    type: "deposit",
    asset: "Ethereum",
    symbol: "ETH",
    amount: "1.2 ETH",
    value: "$2,040.00",
    timestamp: "2023-03-15 14:32",
    status: "completed",
    txHash: "0x1a2b3c...",
  },
  {
    id: "tx2",
    type: "deposit",
    asset: "USD Coin",
    symbol: "USDC",
    amount: "6,000 USDC",
    value: "$6,000.00",
    timestamp: "2023-03-10 09:15",
    status: "completed",
    txHash: "0x4d5e6f...",
  },
  {
    id: "tx3",
    type: "borrow",
    asset: "Bitcoin",
    symbol: "BTC",
    amount: "0.05 BTC",
    value: "$2,500.00",
    timestamp: "2023-03-05 11:22",
    status: "completed",
    txHash: "0x7g8h9i...",
  },
  {
    id: "tx4",
    type: "deposit",
    asset: "Ethereum",
    symbol: "ETH",
    amount: "1.3 ETH",
    value: "$2,210.00",
    timestamp: "2023-02-28 16:45",
    status: "completed",
    txHash: "0xj0k1l2...",
  },
]

export function TransactionHistory() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Type</TableHead>
            <TableHead>Asset</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="text-right">Value</TableHead>
            <TableHead>Date & Time</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((tx) => (
            <TableRow key={tx.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  {tx.type === "deposit" ? (
                    <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                  ) : tx.type === "withdraw" ? (
                    <ArrowDownRight className="h-4 w-4 text-rose-500" />
                  ) : tx.type === "borrow" ? (
                    <ArrowDownRight className="h-4 w-4 text-blue-500" />
                  ) : (
                    <RefreshCw className="h-4 w-4 text-amber-500" />
                  )}
                  <span className="capitalize">{tx.type}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                    {tx.symbol.charAt(0)}
                  </div>
                  <span>{tx.asset}</span>
                </div>
              </TableCell>
              <TableCell className="text-right">{tx.amount}</TableCell>
              <TableCell className="text-right">{tx.value}</TableCell>
              <TableCell>{tx.timestamp}</TableCell>
              <TableCell>
                <span className="inline-flex items-center rounded-full bg-emerald-950 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                  {tx.status}
                </span>
              </TableCell>
              <TableCell className="text-right">
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <ExternalLink className="h-4 w-4" />
                  <span className="sr-only">View transaction</span>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

