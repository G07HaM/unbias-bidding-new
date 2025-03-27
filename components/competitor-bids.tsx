"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

// Expanded sample competitor bid data
const competitorBidsData = {
  "L-1001": [
    {
      lender: "HDFC Bank",
      interestRate: 8.35,
      loanTerm: 20,
      processingFee: 25000,
      closingCosts: 45000,
      monthlyPayment: 38500,
      status: "Active",
      timestamp: "2023-04-16 09:23 AM",
      features: ["No prepayment penalty", "Doorstep service"],
      popularity: 85,
      approvalTime: "3-5 days",
      customerRating: 4.2,
    },
    {
      lender: "ICICI Bank",
      interestRate: 8.15,
      loanTerm: 20,
      processingFee: 22000,
      closingCosts: 48000,
      monthlyPayment: 37800,
      status: "Active",
      timestamp: "2023-04-16 10:45 AM",
      features: ["Home insurance included", "Flexible EMI options"],
      popularity: 92,
      approvalTime: "2-4 days",
      customerRating: 4.5,
    },
    {
      lender: "SBI Home Loans",
      interestRate: 8.25,
      loanTerm: 20,
      processingFee: 20000,
      closingCosts: 42000,
      monthlyPayment: 38100,
      status: "Active",
      timestamp: "2023-04-16 11:30 AM",
      features: ["Special rates for women", "No hidden charges"],
      popularity: 88,
      approvalTime: "4-6 days",
      customerRating: 4.0,
    },
    {
      lender: "Axis Bank",
      interestRate: 8.4,
      loanTerm: 20,
      processingFee: 26000,
      closingCosts: 47000,
      monthlyPayment: 38700,
      status: "Active",
      timestamp: "2023-04-16 01:15 PM",
      features: ["Overdraft facility", "Property search assistance"],
      popularity: 78,
      approvalTime: "3-5 days",
      customerRating: 3.9,
    },
    {
      lender: "Kotak Mahindra Bank",
      interestRate: 8.3,
      loanTerm: 20,
      processingFee: 24000,
      closingCosts: 46000,
      monthlyPayment: 38300,
      status: "Active",
      timestamp: "2023-04-16 02:45 PM",
      features: ["Balance transfer option", "Digital approval process"],
      popularity: 75,
      approvalTime: "2-3 days",
      customerRating: 4.1,
    },
  ],
  "L-1002": [
    {
      lender: "HDFC Bank",
      interestRate: 8.4,
      loanTerm: 20,
      processingFee: 24000,
      closingCosts: 46000,
      monthlyPayment: 27600,
      status: "Active",
      timestamp: "2023-04-15 02:15 PM",
      features: ["No prepayment penalty", "Doorstep service"],
      popularity: 85,
      approvalTime: "3-5 days",
      customerRating: 4.2,
    },
    {
      lender: "SBI Home Loans",
      interestRate: 8.3,
      loanTerm: 20,
      processingFee: 21000,
      closingCosts: 43000,
      monthlyPayment: 27200,
      status: "Active",
      timestamp: "2023-04-15 03:45 PM",
      features: ["Special rates for women", "No hidden charges"],
      popularity: 88,
      approvalTime: "4-6 days",
      customerRating: 4.0,
    },
    {
      lender: "PNB Housing Finance",
      interestRate: 8.45,
      loanTerm: 20,
      processingFee: 23000,
      closingCosts: 45000,
      monthlyPayment: 27800,
      status: "Active",
      timestamp: "2023-04-15 04:30 PM",
      features: ["Customized repayment options", "Quick disbursement"],
      popularity: 72,
      approvalTime: "5-7 days",
      customerRating: 3.8,
    },
  ],
}

// Market average data
const marketAverageData = {
  interestRate: 8.32,
  processingFee: 23500,
  closingCosts: 45000,
  approvalTime: "3-5 days",
  features: ["Flexible EMI options", "No prepayment penalty", "Digital approval process"],
}

export function CompetitorBids({ leadId }: { leadId: string }) {
  const bids = competitorBidsData[leadId] || competitorBidsData["L-1001"] // Fallback

  // Calculate your position in the market
  const yourPosition = {
    interestRate: {
      value: 8.25,
      rank: bids.filter((bid) => bid.interestRate < 8.25).length + 1,
      total: bids.length + 1,
    },
    processingFee: {
      value: 22500,
      rank: bids.filter((bid) => bid.processingFee < 22500).length + 1,
      total: bids.length + 1,
    },
    closingCosts: {
      value: 44000,
      rank: bids.filter((bid) => bid.closingCosts < 44000).length + 1,
      total: bids.length + 1,
    },
  }

  return (
    <Tabs defaultValue="current-bids">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="current-bids">Current Bids</TabsTrigger>
        <TabsTrigger value="market-position">Your Position</TabsTrigger>
        <TabsTrigger value="market-average">Market Average</TabsTrigger>
      </TabsList>

      <TabsContent value="current-bids" className="pt-4">
        <Card>
          <CardHeader>
            <CardTitle>Competitor Bids</CardTitle>
            <CardDescription>View current bids from other lenders to inform your strategy</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-sm mb-4">
              <span className="font-medium">{bids.length}</span> active bids from other lenders
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Lender</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Term</TableHead>
                  <TableHead>Processing Fee</TableHead>
                  <TableHead>Closing Costs</TableHead>
                  <TableHead>Monthly Payment</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Timestamp</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bids.map((bid, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{bid.lender}</TableCell>
                    <TableCell>{bid.interestRate.toFixed(2)}%</TableCell>
                    <TableCell>{bid.loanTerm} years</TableCell>
                    <TableCell>₹{bid.processingFee.toLocaleString()}</TableCell>
                    <TableCell>₹{bid.closingCosts.toLocaleString()}</TableCell>
                    <TableCell>₹{bid.monthlyPayment.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{bid.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right text-sm text-muted-foreground">{bid.timestamp}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="market-position" className="pt-4">
        <Card>
          <CardHeader>
            <CardTitle>Your Market Position</CardTitle>
            <CardDescription>See how your offer compares to competitors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Interest Rate</h4>
                  <p className="text-xs text-muted-foreground">Your rate: {yourPosition.interestRate.value}%</p>
                </div>
                <div className="text-sm">
                  Rank: {yourPosition.interestRate.rank} of {yourPosition.interestRate.total}
                </div>
              </div>
              <Progress
                value={(1 - (yourPosition.interestRate.rank - 1) / yourPosition.interestRate.total) * 100}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">
                {yourPosition.interestRate.rank === 1
                  ? "You have the best interest rate among all competitors."
                  : `${yourPosition.interestRate.rank - 1} competitors have better rates than you.`}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Processing Fee</h4>
                  <p className="text-xs text-muted-foreground">
                    Your fee: ₹{yourPosition.processingFee.value.toLocaleString()}
                  </p>
                </div>
                <div className="text-sm">
                  Rank: {yourPosition.processingFee.rank} of {yourPosition.processingFee.total}
                </div>
              </div>
              <Progress
                value={(1 - (yourPosition.processingFee.rank - 1) / yourPosition.processingFee.total) * 100}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">
                {yourPosition.processingFee.rank === 1
                  ? "You have the lowest processing fee among all competitors."
                  : `${yourPosition.processingFee.rank - 1} competitors have lower processing fees than you.`}
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium">Closing Costs</h4>
                  <p className="text-xs text-muted-foreground">
                    Your costs: ₹{yourPosition.closingCosts.value.toLocaleString()}
                  </p>
                </div>
                <div className="text-sm">
                  Rank: {yourPosition.closingCosts.rank} of {yourPosition.closingCosts.total}
                </div>
              </div>
              <Progress
                value={(1 - (yourPosition.closingCosts.rank - 1) / yourPosition.closingCosts.total) * 100}
                className="h-2"
              />
              <p className="text-xs text-muted-foreground">
                {yourPosition.closingCosts.rank === 1
                  ? "You have the lowest closing costs among all competitors."
                  : `${yourPosition.closingCosts.rank - 1} competitors have lower closing costs than you.`}
              </p>
            </div>

            <div className="rounded-md border p-4 bg-muted/50">
              <h4 className="text-sm font-medium mb-2">Competitive Analysis</h4>
              <p className="text-xs text-muted-foreground">
                Based on current market conditions, you could improve your competitive position by reducing your
                processing fee by approximately ₹2,000 or lowering your interest rate by 0.05%. This would move you up
                in rankings and potentially increase your win rate by 15%.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="market-average" className="pt-4">
        <Card>
          <CardHeader>
            <CardTitle>Market Average</CardTitle>
            <CardDescription>Current market standards for similar loans</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Interest Rate</h4>
                <div className="text-2xl font-bold">{marketAverageData.interestRate}%</div>
                <p className="text-xs text-muted-foreground">Range: 8.15% - 8.45%</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Processing Fee</h4>
                <div className="text-2xl font-bold">₹{marketAverageData.processingFee.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Range: ₹20,000 - ₹26,000</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Closing Costs</h4>
                <div className="text-2xl font-bold">₹{marketAverageData.closingCosts.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">Range: ₹42,000 - ₹48,000</p>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Approval Time</h4>
                <div className="text-2xl font-bold">{marketAverageData.approvalTime}</div>
                <p className="text-xs text-muted-foreground">Most lenders offer similar timeframes</p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <h4 className="text-sm font-medium">Common Features</h4>
              <div className="flex flex-wrap gap-2">
                {marketAverageData.features.map((feature, index) => (
                  <Badge key={index} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-md border p-4 bg-muted/50 mt-4">
              <h4 className="text-sm font-medium mb-2">Market Trend</h4>
              <p className="text-xs text-muted-foreground">
                The market is showing a slight downward trend in interest rates over the past 30 days, with an average
                decrease of 0.1%. Lenders are increasingly offering digital approval processes and flexible EMI options
                as standard features to attract borrowers.
              </p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

