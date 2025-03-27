"use client"

import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Expanded sample data for recommendations
const recommendations = [
  {
    id: "L-1001",
    name: "Rajesh Sharma",
    creditScore: 720,
    loanAmount: 4500000,
    propertyType: "Apartment",
    location: "Mumbai, MH",
    matchScore: 92,
    reason: "Matches your preferred loan amount and property type",
    additionalInfo: "Pre-approved by CIBIL, has stable income from IT sector",
    lastActivity: "Updated documents 2 hours ago",
  },
  {
    id: "L-1002",
    name: "Priya Patel",
    creditScore: 680,
    loanAmount: 3200000,
    propertyType: "Villa",
    location: "Bangalore, KA",
    matchScore: 87,
    reason: "Strong credit profile and matches your location preference",
    additionalInfo: "First-time home buyer, works at a multinational company",
    lastActivity: "Viewed your bank profile yesterday",
  },
  {
    id: "L-1005",
    name: "Vikram Singh",
    creditScore: 690,
    loanAmount: 3800000,
    propertyType: "Apartment",
    location: "Chennai, TN",
    matchScore: 85,
    reason: "Similar to previously successful bids",
    additionalInfo: "Has existing relationship with your bank (savings account)",
    lastActivity: "Requested more information about loan terms",
  },
  {
    id: "L-1006",
    name: "Ananya Desai",
    creditScore: 735,
    loanAmount: 6200000,
    propertyType: "Villa",
    location: "Hyderabad, TS",
    matchScore: 89,
    reason: "High credit score and matches your risk profile",
    additionalInfo: "Senior executive at pharmaceutical company",
    lastActivity: "Compared rates with other lenders today",
  },
  {
    id: "L-1008",
    name: "Neha Gupta",
    creditScore: 760,
    loanAmount: 5800000,
    propertyType: "Bungalow",
    location: "Kolkata, WB",
    matchScore: 91,
    reason: "Excellent credit history and high loan amount",
    additionalInfo: "Business owner with stable income for past 8 years",
    lastActivity: "Completed all documentation requirements",
  },
  {
    id: "L-1010",
    name: "Arjun Nair",
    creditScore: 715,
    loanAmount: 4800000,
    propertyType: "Row House",
    location: "Kochi, KL",
    matchScore: 83,
    reason: "Good fit for your current portfolio diversification",
    additionalInfo: "Government employee with secure income",
    lastActivity: "Inquired about interest rates 3 hours ago",
  },
  {
    id: "L-1012",
    name: "Sanjay Joshi",
    creditScore: 730,
    loanAmount: 5200000,
    propertyType: "Villa",
    location: "Pune, MH",
    matchScore: 88,
    reason: "Matches your historical successful loan profile",
    additionalInfo: "Doctor with private practice established for 10+ years",
    lastActivity: "Scheduled property valuation for next week",
  },
  {
    id: "L-1014",
    name: "Vivek Malhotra",
    creditScore: 745,
    loanAmount: 6500000,
    propertyType: "Bungalow",
    location: "Gurgaon, HR",
    matchScore: 90,
    reason: "Premium property buyer with excellent credentials",
    additionalInfo: "Senior corporate executive with multinational firm",
    lastActivity: "Compared your offer with competitors yesterday",
  },
]

export function LeadRecommendations() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Recommended Leads</h3>
        <p className="text-sm text-muted-foreground">
          These leads are recommended based on your lending preferences and past bidding behavior.
        </p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{recommendations.length}</span> recommended leads
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: <span className="font-medium">Today at 10:30 AM</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {recommendations.map((lead) => (
          <Card key={lead.id} className="overflow-hidden">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{lead.name}</CardTitle>
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <CardDescription>{lead.location}</CardDescription>
            </CardHeader>
            <CardContent className="pb-3">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Match Score</span>
                  <span className="text-sm font-medium">{lead.matchScore}%</span>
                </div>
                <Progress value={lead.matchScore} className="h-2" />
                <div className="text-xs text-muted-foreground">{lead.reason}</div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <div>
                    <div className="text-xs text-muted-foreground">Credit Score</div>
                    <div className="font-medium">{lead.creditScore}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Loan Amount</div>
                    <div className="font-medium">₹{lead.loanAmount.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Property</div>
                    <div className="font-medium">{lead.propertyType}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">ID</div>
                    <div className="font-medium">{lead.id}</div>
                  </div>
                </div>

                <div className="pt-2 text-xs">
                  <div className="text-muted-foreground">Additional Info:</div>
                  <div>{lead.additionalInfo}</div>
                </div>

                <div className="pt-1 text-xs text-muted-foreground italic">{lead.lastActivity}</div>
              </div>
            </CardContent>
            <CardFooter className="pt-0">
              <Button asChild className="w-full">
                <Link href={`/bidding/${lead.id}`}>
                  Place Bid
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

