"use client"

import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Check, ChevronsUpDown } from "lucide-react"
import { useState } from "react"

const assets = [
  {
    value: "eth",
    label: "Ethereum",
    symbol: "ETH",
    apy: "5.7%",
  },
  {
    value: "usdc",
    label: "USD Coin",
    symbol: "USDC",
    apy: "8.2%",
  },
  {
    value: "btc",
    label: "Bitcoin",
    symbol: "BTC",
    apy: "3.8%",
  },
  {
    value: "dai",
    label: "Dai",
    symbol: "DAI",
    apy: "7.5%",
  },
  {
    value: "sol",
    label: "Solana",
    symbol: "SOL",
    apy: "4.2%",
  },
]

export function AssetSelector() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("eth")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-full justify-between">
          {value ? (
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                {assets.find((asset) => asset.value === value)?.symbol.charAt(0)}
              </div>
              <span>{assets.find((asset) => asset.value === value)?.label}</span>
              <span className="text-sm text-muted-foreground ml-2">
                ({assets.find((asset) => asset.value === value)?.symbol})
              </span>
            </div>
          ) : (
            "Select asset..."
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
        <Command>
          <CommandInput placeholder="Search assets..." />
          <CommandList>
            <CommandEmpty>No assets found.</CommandEmpty>
            <CommandGroup>
              {assets.map((asset) => (
                <CommandItem
                  key={asset.value}
                  value={asset.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                      {asset.symbol.charAt(0)}
                    </div>
                    <span>{asset.label}</span>
                    <span className="text-sm text-muted-foreground">({asset.symbol})</span>
                  </div>
                  <div className="ml-auto flex items-center gap-2">
                    <span className="text-sm text-green-500">{asset.apy}</span>
                    <Check className={`h-4 w-4 ${value === asset.value ? "opacity-100" : "opacity-0"}`} />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

