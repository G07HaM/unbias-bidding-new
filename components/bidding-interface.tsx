"use client"

import { useState } from "react"
import { ArrowLeft, Clock, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import { CompetitorBids } from "@/components/competitor-bids"
import { BorrowerProfile } from "@/components/borrower-profile"
import { toast } from "@/components/ui/use-toast"

// Update the sample lead data
const leadData = {
  "L-1001": {
    id: "L-1001",
    name: "Rajesh Sharma",
    creditScore: 720,
    loanAmount: 4500000,
    propertyType: "Apartment",
    status: "New",
    location: "Mumbai, MH",
    dateSubmitted: "2023-04-15",
    email: "rajesh.sharma@example.com",
    phone: "+91 98765 43210",
    income: 1500000,
    debtToIncome: 0.32,
    propertyValue: 5600000,
    downPayment: 1100000,
    loanPurpose: "Purchase",
    propertyAddress: "123 Seawoods, Navi Mumbai, Maharashtra 400706",
    documents: [
      { name: "Credit Report", status: "Available" },
      { name: "Income Verification", status: "Available" },
      { name: "Property Valuation", status: "Pending" },
    ],
  },
  "L-1002": {
    id: "L-1002",
    name: "Priya Patel",
    creditScore: 680,
    loanAmount: 3200000,
    propertyType: "Villa",
    status: "Active",
    location: "Bangalore, KA",
    dateSubmitted: "2023-04-14",
    email: "priya.patel@example.com",
    phone: "+91 87654 32109",
    income: 1200000,
    debtToIncome: 0.28,
    propertyValue: 4000000,
    downPayment: 800000,
    loanPurpose: "Purchase",
    propertyAddress: "456 Whitefield, Bangalore, Karnataka 560066",
    documents: [
      { name: "Credit Report", status: "Available" },
      { name: "Income Verification", status: "Available" },
      { name: "Property Valuation", status: "Pending" },
    ],
  },
}

export function BiddingInterface({ leadId }: { leadId: string }) {
  const lead = leadData[leadId] || leadData["L-1001"] // Fallback to first lead if ID not found

  const [interestRate, setInterestRate] = useState(5.25)
  const [loanTerm, setLoanTerm] = useState("30")
  // Update the processing fee and closing costs to reflect Indian market
  const [processingFee, setProcessingFee] = useState(25000)
  const [closingCosts, setClosingCosts] = useState(50000)
  const [includeAppraisal, setIncludeAppraisal] = useState(true)
  const [notes, setNotes] = useState("")

  const handleSubmitBid = () => {
    toast({
      title: "Bid Submitted",
      description: `Your bid for ${lead.name}'s loan application has been submitted successfully.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Bidding Interface</h2>
          <p className="text-muted-foreground">Submit a competitive loan offer for {lead.name}'s application.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-1 h-4 w-4" />
            Bid closes in 48 hours
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-1 space-y-6">
          <BorrowerProfile lead={lead} />

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Documents</CardTitle>
              <CardDescription>Available borrower documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {lead.documents.map((doc, index) => (
                  <li key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                      {doc.name}
                    </div>
                    <span className={doc.status === "Available" ? "text-green-500" : "text-amber-500"}>
                      {doc.status}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-6">
          <Tabs defaultValue="bid-form">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bid-form">Bid Form</TabsTrigger>
              <TabsTrigger value="competitor-bids">Competitor Bids</TabsTrigger>
              <TabsTrigger value="market-insights">Market Insights</TabsTrigger>
            </TabsList>
            <TabsContent value="bid-form" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Loan Terms</CardTitle>
                  <CardDescription>Configure your loan offer terms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="interest-rate">Interest Rate (%)</Label>
                      <span className="text-sm font-medium">{interestRate.toFixed(2)}%</span>
                    </div>
                    <Slider
                      id="interest-rate"
                      min={2.5}
                      max={8.0}
                      step={0.05}
                      value={[interestRate]}
                      onValueChange={(value) => setInterestRate(value[0])}
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>2.50%</span>
                      <span>8.00%</span>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="loan-term">Loan Term</Label>
                      <Select value={loanTerm} onValueChange={setLoanTerm}>
                        <SelectTrigger id="loan-term">
                          <SelectValue placeholder="Select term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="15">15 Years</SelectItem>
                          <SelectItem value="20">20 Years</SelectItem>
                          <SelectItem value="30">30 Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="processing-fee">Processing Fee ($)</Label>
                      <Input
                        id="processing-fee"
                        type="number"
                        value={processingFee}
                        onChange={(e) => setProcessingFee(Number(e.target.value))}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="closing-costs">Estimated Closing Costs ($)</Label>
                    <Input
                      id="closing-costs"
                      type="number"
                      value={closingCosts}
                      onChange={(e) => setClosingCosts(Number(e.target.value))}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch id="appraisal" checked={includeAppraisal} onCheckedChange={setIncludeAppraisal} />
                    <Label htmlFor="appraisal">Include appraisal fee in loan</Label>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes</Label>
                    <Textarea
                      id="notes"
                      placeholder="Add any special terms or conditions..."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                    />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">Save Draft</Button>
                  <Button onClick={handleSubmitBid}>Submit Bid</Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Loan Summary</CardTitle>
                  <CardDescription>Review your offer before submission</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Loan Amount:</span>
                      <span className="font-medium">₹{lead.loanAmount.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Interest Rate:</span>
                      <span className="font-medium">{interestRate.toFixed(2)}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Loan Term:</span>
                      <span className="font-medium">{loanTerm} Years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Processing Fee:</span>
                      <span className="font-medium">₹{processingFee.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Closing Costs:</span>
                      <span className="font-medium">₹{closingCosts.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Estimated Monthly Payment:</span>
                      <span className="font-bold">
                        ₹
                        {Math.round(
                          (lead.loanAmount *
                            (interestRate / 100 / 12) *
                            Math.pow(1 + interestRate / 100 / 12, Number.parseInt(loanTerm) * 12)) /
                            (Math.pow(1 + interestRate / 100 / 12, Number.parseInt(loanTerm) * 12) - 1),
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="competitor-bids" className="pt-4">
              <CompetitorBids leadId={leadId} />
            </TabsContent>
            <TabsContent value="market-insights" className="pt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Market Insights</CardTitle>
                  <CardDescription>Current market trends and borrower preferences</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Average Interest Rates</h4>
                      <p className="text-sm text-muted-foreground">
                        The current average interest rate for similar loans in this region is 5.12%. Your competitive
                        range should be between 4.95% - 5.20%.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Borrower Preferences</h4>
                      <p className="text-sm text-muted-foreground">
                        Recent data shows borrowers in this category prioritize lower closing costs over slightly higher
                        interest rates. Consider adjusting your offer accordingly.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">Winning Bid Patterns</h4>
                      <p className="text-sm text-muted-foreground">
                        Successful bids for similar borrower profiles typically include flexible payment options and
                        reduced processing fees.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

