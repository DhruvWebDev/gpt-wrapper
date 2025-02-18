"use client"

import { useSyncProviders } from "@/hooks/useSyncProvider"
import { formatAddress } from "@/lib/utils"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import { EIP6963ProviderDetail } from "../../next-env"
import { parseEther } from "ethers"
import { Alert, AlertDescription } from "@/components/ui/alert"

export const DiscoverWalletProviders = () => {
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()
  const [userAccount, setUserAccount] = useState<string>("")
  const [isTransacting, setIsTransacting] = useState(false)
  const [error, setError] = useState<string>("")
  const [txHash, setTxHash] = useState<string>("")
  const providers = useSyncProviders()

  const sendTransaction = async ({ amount }: { amount: string }) => {
    if (!selectedWallet || !userAccount) {
      setError("No wallet connected or user account available")
      return
    }

    setIsTransacting(true)
    setError("")
    setTxHash("")

    try {
      // Convert the amount to Wei
      const amountInWei = parseEther(amount).toString(16)
      // Add '0x' prefix if not present
      const hexValue = amountInWei.startsWith('0x') ? amountInWei : `0x${amountInWei}`
      
      const { provider } = selectedWallet
      const txHash = await provider?.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: userAccount,
            to: '0x5d91565aA257F3D3e6434dA38b76D6A6000Fe737',
            value: hexValue,
            gasLimit: '0x5028',
            maxPriorityFeePerGas: '0x3b9aca00',
            maxFeePerGas: '0x2540be400',
          },
        ],
      })

      setTxHash(txHash)
    } catch (error) {
      setError(error instanceof Error ? error.message : "Transaction failed")
    } finally {
      setIsTransacting(false)
    }
  }

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    setError("")
    try {
      const accounts = await providerWithInfo.provider.request({
        method: "eth_requestAccounts"
      })

      if (accounts && accounts.length > 0) {
        setSelectedWallet(providerWithInfo)
        setUserAccount(accounts[0])
      } else {
        setError("No accounts found")
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "Error connecting wallet")
    }
  }

  const pricingTiers = [
    {
      name: "Hobby",
      price: "0.007",
      features: ["Basic wallet integration", "5 transactions per day", "Community support"],
    },
    {
      name: "Developer",
      price: "0.07",
      features: ["Advanced wallet integration", "Unlimited transactions", "Priority support", "API access"],
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Pay via Ethereum</h1>
      
      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      
      {txHash && (
        <Alert className="mb-4">
          <AlertDescription>
            Transaction submitted! Hash: {txHash}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Pricing Plans</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {pricingTiers.map((tier) => (
              <Card key={tier.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold">{tier.price} ETH</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => sendTransaction({ amount: tier.price })}
                    disabled={!userAccount || isTransacting}
                  >
                    {isTransacting ? "Processing..." : tier.name === "Enterprise" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Available Wallets</CardTitle>
              <CardDescription>Connect your preferred wallet</CardDescription>
            </CardHeader>
            <CardContent>
              {providers.length > 0 ? (
                <div className="grid grid-cols-2 gap-2">
                  {providers.map((provider: EIP6963ProviderDetail) => (
                    <Button
                      key={provider.info.uuid}
                      onClick={() => handleConnect(provider)}
                      variant="outline"
                      className="flex flex-col items-center justify-center h-24"
                      disabled={isTransacting}
                    >
                      <img src={provider.info.icon || "/api/placeholder/32/32"} alt={provider.info.name} className="w-8 h-8 mb-2" />
                      <span className="text-sm">{provider.info.name}</span>
                    </Button>
                  ))}
                </div>
              ) : (
                <div className="text-center text-gray-500">No Announced Wallet Providers</div>
              )}
            </CardContent>
          </Card>
          {userAccount && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Connected Wallet</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <img src={selectedWallet?.info.icon || "/api/placeholder/32/32"} alt={selectedWallet?.info.name} className="w-8 h-8" />
                  <div>
                    <div className="font-semibold">{selectedWallet?.info.name}</div>
                    <div className="text-sm text-gray-500">{formatAddress(userAccount)}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}