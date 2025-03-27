"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface BorrowerProfileProps {
  lead: {
    id: string
    name: string
    creditScore: number
    loanAmount: number
    propertyType: string
    status: string
    location: string
    dateSubmitted: string
    email: string
    phone: string
    income: number
    debtToIncome: number
    propertyValue: number
    downPayment: number
    loanPurpose: string
    propertyAddress: string
  }
}

// Additional borrower data
const borrowerAdditionalData = {
  "L-1001": {
    occupation: "Software Engineer",
    employer: "TCS",
    employmentYears: 8,
    previousLoans: 2,
    previousDefaultsCount: 0,
    bankingHistory: "10+ years with HDFC Bank",
    coApplicant: "Spouse (Teacher)",
    coApplicantIncome: 600000,
    propertyAge: 5,
    propertySize: "1200 sq ft",
    propertyAmenities: ["Gym", "Swimming Pool", "24x7 Security"],
    nearbyFacilities: ["School", "Hospital", "Shopping Mall"],
    loanHistory: [
      { type: "Car Loan", amount: 800000, status: "Closed", year: 2018 },
      { type: "Personal Loan", amount: 500000, status: "Closed", year: 2020 },
    ],
    creditCards: 2,
    creditUtilization: "22%",
    inquiriesLast6Months: 1,
    documents: [
      { name: "Income Tax Returns", status: "Verified" },
      { name: "Bank Statements", status: "Verified" },
      { name: "Property Documents", status: "Under Review" },
      { name: "Identity Proof", status: "Verified" },
      { name: "Address Proof", status: "Verified" },
    ],
  },
  "L-1002": {
    occupation: "Marketing Manager",
    employer: "Infosys",
    employmentYears: 6,
    previousLoans: 1,
    previousDefaultsCount: 0,
    bankingHistory: "8 years with ICICI Bank",
    coApplicant: "None",
    coApplicantIncome: 0,
    propertyAge: 0,
    propertySize: "1800 sq ft",
    propertyAmenities: ["Club House", "Garden", "24x7 Security", "Power Backup"],
    nearbyFacilities: ["School", "Hospital", "Metro Station"],
    loanHistory: [{ type: "Education Loan", amount: 1200000, status: "Closed", year: 2019 }],
    creditCards: 3,
    creditUtilization: "35%",
    inquiriesLast6Months: 2,
    documents: [
      { name: "Income Tax Returns", status: "Verified" },
      { name: "Bank Statements", status: "Verified" },
      { name: "Property Documents", status: "Verified" },
      { name: "Identity Proof", status: "Verified" },
      { name: "Address Proof", status: "Verified" },
    ],
  },
}

export function BorrowerProfile({ lead }: BorrowerProfileProps) {
  // Get additional data or use default empty values
  const additionalData = borrowerAdditionalData[lead.id] || {
    occupation: "Not Available",
    employer: "Not Available",
    employmentYears: 0,
    previousLoans: 0,
    previousDefaultsCount: 0,
    bankingHistory: "Not Available",
    coApplicant: "None",
    coApplicantIncome: 0,
    propertyAge: 0,
    propertySize: "Not Available",
    propertyAmenities: [],
    nearbyFacilities: [],
    loanHistory: [],
    creditCards: 0,
    creditUtilization: "0%",
    inquiriesLast6Months: 0,
    documents: [],
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{lead.name}</CardTitle>
          <Badge variant={lead.status === "New" ? "default" : "secondary"}>{lead.status}</Badge>
        </div>
        <CardDescription>Application ID: {lead.id}</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="basic">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Info</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="property">Property</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <div className="text-xs text-muted-foreground">Credit Score</div>
                <div className="font-medium">{lead.creditScore}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Loan Amount</div>
                <div className="font-medium">₹{lead.loanAmount.toLocaleString()}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Property Type</div>
                <div className="font-medium">{lead.propertyType}</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Location</div>
                <div className="font-medium">{lead.location}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium">Contact Information</div>
              <div className="grid grid-cols-1 gap-1">
                <div className="text-xs">
                  <span className="text-muted-foreground">Email: </span>
                  {lead.email}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Phone: </span>
                  {lead.phone}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium">Employment Details</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="text-xs">
                  <span className="text-muted-foreground">Occupation: </span>
                  {additionalData.occupation}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Employer: </span>
                  {additionalData.employer}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Years Employed: </span>
                  {additionalData.employmentYears}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Banking History: </span>
                  {additionalData.bankingHistory}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium">Co-Applicant Information</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="text-xs">
                  <span className="text-muted-foreground">Co-Applicant: </span>
                  {additionalData.coApplicant}
                </div>
                {additionalData.coApplicantIncome > 0 && (
                  <div className="text-xs">
                    <span className="text-muted-foreground">Co-Applicant Income: </span>₹
                    {additionalData.coApplicantIncome.toLocaleString()}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="financial" className="space-y-4 pt-4">
            <div className="space-y-2">
              <div className="text-xs font-medium">Financial Details</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="text-xs">
                  <span className="text-muted-foreground">Annual Income: </span>
                  <span className="font-medium">₹{lead.income.toLocaleString()}</span>
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">DTI Ratio: </span>
                  {(lead.debtToIncome * 100).toFixed(0)}%
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Property Value: </span>₹{lead.propertyValue.toLocaleString()}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Down Payment: </span>₹{lead.downPayment.toLocaleString()}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">LTV Ratio: </span>
                  {(100 - (lead.downPayment / lead.propertyValue) * 100).toFixed(0)}%
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Purpose: </span>
                  {lead.loanPurpose}
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium">Credit Profile</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="text-xs">
                  <span className="text-muted-foreground">Previous Loans: </span>
                  {additionalData.previousLoans}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Previous Defaults: </span>
                  {additionalData.previousDefaultsCount}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Credit Cards: </span>
                  {additionalData.creditCards}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Credit Utilization: </span>
                  {additionalData.creditUtilization}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Recent Inquiries: </span>
                  {additionalData.inquiriesLast6Months} (last 6 months)
                </div>
              </div>
            </div>

            {additionalData.loanHistory.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-medium">Loan History</div>
                <div className="space-y-1">
                  {additionalData.loanHistory.map((loan, index) => (
                    <div key={index} className="text-xs flex justify-between">
                      <span>
                        {loan.type} ({loan.year})
                      </span>
                      <span>
                        ₹{loan.amount.toLocaleString()} - {loan.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="property" className="space-y-4 pt-4">
            <div className="space-y-2">
              <div className="text-xs font-medium">Property Address</div>
              <div className="text-xs">{lead.propertyAddress}</div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-medium">Property Details</div>
              <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                <div className="text-xs">
                  <span className="text-muted-foreground">Property Size: </span>
                  {additionalData.propertySize}
                </div>
                <div className="text-xs">
                  <span className="text-muted-foreground">Property Age: </span>
                  {additionalData.propertyAge > 0 ? `${additionalData.propertyAge} years` : "New Construction"}
                </div>
              </div>
            </div>

            {additionalData.propertyAmenities.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-medium">Amenities</div>
                <div className="flex flex-wrap gap-1">
                  {additionalData.propertyAmenities.map((amenity, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {additionalData.nearbyFacilities.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-medium">Nearby Facilities</div>
                <div className="flex flex-wrap gap-1">
                  {additionalData.nearbyFacilities.map((facility, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {facility}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {additionalData.documents.length > 0 && (
              <div className="space-y-2">
                <div className="text-xs font-medium">Document Status</div>
                <div className="space-y-1">
                  {additionalData.documents.map((doc, index) => (
                    <div key={index} className="text-xs flex justify-between">
                      <span>{doc.name}</span>
                      <Badge variant={doc.status === "Verified" ? "success" : "outline"} className="text-xs">
                        {doc.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

