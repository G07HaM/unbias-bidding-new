"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, Filter, Search, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LeadRecommendations } from "@/components/lead-recommendations"

// Expanded sample data for demonstration
const leads = [
  {
    id: "L-1001",
    name: "Rajesh Sharma",
    creditScore: 720,
    loanAmount: 4500000,
    propertyType: "Apartment",
    status: "New",
    location: "Mumbai, MH",
    dateSubmitted: "2023-04-15",
    recommended: true,
  },
  {
    id: "L-1002",
    name: "Priya Patel",
    creditScore: 680,
    loanAmount: 3200000,
    propertyType: "Villa",
    status: "Active",
    location: "Bangalore, KA",
    dateSubmitted: "2023-04-14",
    recommended: true,
  },
  {
    id: "L-1003",
    name: "Amit Kumar",
    creditScore: 750,
    loanAmount: 5500000,
    propertyType: "Apartment",
    status: "New",
    location: "Delhi, DL",
    dateSubmitted: "2023-04-13",
    recommended: false,
  },
  {
    id: "L-1004",
    name: "Sunita Verma",
    creditScore: 710,
    loanAmount: 2750000,
    propertyType: "Row House",
    status: "Active",
    location: "Pune, MH",
    dateSubmitted: "2023-04-12",
    recommended: false,
  },
  {
    id: "L-1005",
    name: "Vikram Singh",
    creditScore: 690,
    loanAmount: 3800000,
    propertyType: "Apartment",
    status: "New",
    location: "Chennai, TN",
    dateSubmitted: "2023-04-11",
    recommended: true,
  },
  {
    id: "L-1006",
    name: "Ananya Desai",
    creditScore: 735,
    loanAmount: 6200000,
    propertyType: "Villa",
    status: "New",
    location: "Hyderabad, TS",
    dateSubmitted: "2023-04-10",
    recommended: true,
  },
  {
    id: "L-1007",
    name: "Rahul Mehta",
    creditScore: 705,
    loanAmount: 4100000,
    propertyType: "Apartment",
    status: "Active",
    location: "Ahmedabad, GJ",
    dateSubmitted: "2023-04-09",
    recommended: false,
  },
  {
    id: "L-1008",
    name: "Neha Gupta",
    creditScore: 760,
    loanAmount: 5800000,
    propertyType: "Bungalow",
    status: "New",
    location: "Kolkata, WB",
    dateSubmitted: "2023-04-08",
    recommended: true,
  },
  {
    id: "L-1009",
    name: "Kiran Reddy",
    creditScore: 675,
    loanAmount: 3500000,
    propertyType: "Apartment",
    status: "Active",
    location: "Bangalore, KA",
    dateSubmitted: "2023-04-07",
    recommended: false,
  },
  {
    id: "L-1010",
    name: "Arjun Nair",
    creditScore: 715,
    loanAmount: 4800000,
    propertyType: "Row House",
    status: "New",
    location: "Kochi, KL",
    dateSubmitted: "2023-04-06",
    recommended: true,
  },
  {
    id: "L-1011",
    name: "Meera Iyer",
    creditScore: 695,
    loanAmount: 3900000,
    propertyType: "Apartment",
    status: "Active",
    location: "Chennai, TN",
    dateSubmitted: "2023-04-05",
    recommended: false,
  },
  {
    id: "L-1012",
    name: "Sanjay Joshi",
    creditScore: 730,
    loanAmount: 5200000,
    propertyType: "Villa",
    status: "New",
    location: "Pune, MH",
    dateSubmitted: "2023-04-04",
    recommended: true,
  },
  {
    id: "L-1013",
    name: "Divya Sharma",
    creditScore: 685,
    loanAmount: 3100000,
    propertyType: "Apartment",
    status: "Active",
    location: "Jaipur, RJ",
    dateSubmitted: "2023-04-03",
    recommended: false,
  },
  {
    id: "L-1014",
    name: "Vivek Malhotra",
    creditScore: 745,
    loanAmount: 6500000,
    propertyType: "Bungalow",
    status: "New",
    location: "Gurgaon, HR",
    dateSubmitted: "2023-04-02",
    recommended: true,
  },
  {
    id: "L-1015",
    name: "Pooja Patel",
    creditScore: 700,
    loanAmount: 4300000,
    propertyType: "Row House",
    status: "Active",
    location: "Surat, GJ",
    dateSubmitted: "2023-04-01",
    recommended: false,
  },
]

export function LeadDashboard() {
  const [searchTerm, setSearchTerm] = useState("")
  const [creditScoreRange, setCreditScoreRange] = useState([600, 800])
  const [loanAmountRange, setLoanAmountRange] = useState([2000000, 7000000])
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState<string[]>([])
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Filter leads based on search and filters
  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCreditScore = lead.creditScore >= creditScoreRange[0] && lead.creditScore <= creditScoreRange[1]
    const matchesLoanAmount = lead.loanAmount >= loanAmountRange[0] && lead.loanAmount <= loanAmountRange[1]

    const matchesPropertyType = selectedPropertyTypes.length === 0 || selectedPropertyTypes.includes(lead.propertyType)

    const matchesStatus = selectedStatuses.length === 0 || selectedStatuses.includes(lead.status)

    return matchesSearch && matchesCreditScore && matchesLoanAmount && matchesPropertyType && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredLeads.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedLeads = filteredLeads.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Lead Dashboard</h2>
          <p className="text-muted-foreground">
            Browse and filter borrower applications to find your next opportunity.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Save Filter
          </Button>
          <Button size="sm">Export Leads</Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">{filteredLeads.length}</span> leads
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: <span className="font-medium">Today at 09:15 AM</span>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Leads ({leads.length})</TabsTrigger>
          <TabsTrigger value="recommended">Recommended ({leads.filter((l) => l.recommended).length})</TabsTrigger>
          <TabsTrigger value="active">Active Bids ({leads.filter((l) => l.status === "Active").length})</TabsTrigger>
          <TabsTrigger value="won">Won (8)</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search leads..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Property Type
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filter by property</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedPropertyTypes.includes("Apartment")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedPropertyTypes([...selectedPropertyTypes, "Apartment"])
                      } else {
                        setSelectedPropertyTypes(selectedPropertyTypes.filter((type) => type !== "Apartment"))
                      }
                    }}
                  >
                    Apartment
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedPropertyTypes.includes("Villa")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedPropertyTypes([...selectedPropertyTypes, "Villa"])
                      } else {
                        setSelectedPropertyTypes(selectedPropertyTypes.filter((type) => type !== "Villa"))
                      }
                    }}
                  >
                    Villa
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedPropertyTypes.includes("Row House")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedPropertyTypes([...selectedPropertyTypes, "Row House"])
                      } else {
                        setSelectedPropertyTypes(selectedPropertyTypes.filter((type) => type !== "Row House"))
                      }
                    }}
                  >
                    Row House
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedPropertyTypes.includes("Bungalow")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedPropertyTypes([...selectedPropertyTypes, "Bungalow"])
                      } else {
                        setSelectedPropertyTypes(selectedPropertyTypes.filter((type) => type !== "Bungalow"))
                      }
                    }}
                  >
                    Bungalow
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Status
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem
                    checked={selectedStatuses.includes("New")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedStatuses([...selectedStatuses, "New"])
                      } else {
                        setSelectedStatuses(selectedStatuses.filter((status) => status !== "New"))
                      }
                    }}
                  >
                    New
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={selectedStatuses.includes("Active")}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setSelectedStatuses([...selectedStatuses, "Active"])
                      } else {
                        setSelectedStatuses(selectedStatuses.filter((status) => status !== "Active"))
                      }
                    }}
                  >
                    Active
                  </DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Credit Score
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px] p-4">
                  <div className="space-y-4">
                    <h4 className="font-medium leading-none">Credit Score Range</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{creditScoreRange[0]}</span>
                      <span className="text-sm">{creditScoreRange[1]}</span>
                    </div>
                    <Slider
                      defaultValue={creditScoreRange}
                      min={500}
                      max={850}
                      step={10}
                      onValueChange={setCreditScoreRange}
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    Loan Amount
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px] p-4">
                  <div className="space-y-4">
                    <h4 className="font-medium leading-none">Loan Amount Range</h4>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">₹{(loanAmountRange[0] / 100000).toFixed(1)}L</span>
                      <span className="text-sm">₹{(loanAmountRange[1] / 100000).toFixed(1)}L</span>
                    </div>
                    <Slider
                      defaultValue={loanAmountRange}
                      min={1000000}
                      max={10000000}
                      step={100000}
                      onValueChange={setLoanAmountRange}
                    />
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[80px]">ID</TableHead>
                  <TableHead>Applicant</TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Credit Score
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>
                    <div className="flex items-center">
                      Loan Amount
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </div>
                  </TableHead>
                  <TableHead>Property Type</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="w-[100px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedLeads.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={9} className="h-24 text-center">
                      No results found.
                    </TableCell>
                  </TableRow>
                ) : (
                  paginatedLeads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="font-medium">{lead.id}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {lead.name}
                          {lead.recommended && <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />}
                        </div>
                      </TableCell>
                      <TableCell>{lead.creditScore}</TableCell>
                      <TableCell>₹{lead.loanAmount.toLocaleString()}</TableCell>
                      <TableCell>{lead.propertyType}</TableCell>
                      <TableCell>
                        <Badge variant={lead.status === "New" ? "default" : "secondary"}>{lead.status}</Badge>
                      </TableCell>
                      <TableCell>{lead.location}</TableCell>
                      <TableCell>{lead.dateSubmitted}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/bidding/${lead.id}`}>Bid</Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 py-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <div className="flex items-center space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(page)}
                    className="w-8"
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="recommended">
          <LeadRecommendations />
        </TabsContent>
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Bids</CardTitle>
              <CardDescription>View and manage your active bids on borrower applications.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Your Bid</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Competing Bids</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads
                    .filter((l) => l.status === "Active")
                    .map((lead) => (
                      <TableRow key={lead.id}>
                        <TableCell>
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-sm text-muted-foreground">{lead.id}</div>
                        </TableCell>
                        <TableCell>₹{lead.loanAmount.toLocaleString()}</TableCell>
                        <TableCell>8.25%</TableCell>
                        <TableCell>
                          <Badge variant="default">Active</Badge>
                        </TableCell>
                        <TableCell>3</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/bidding/${lead.id}`}>View</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="won">
          <Card>
            <CardHeader>
              <CardTitle>Won Bids</CardTitle>
              <CardDescription>View borrower applications where your bid was accepted.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Your Bid</TableHead>
                    <TableHead>Date Won</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Ravi Kapoor</div>
                      <div className="text-sm text-muted-foreground">L-0987</div>
                    </TableCell>
                    <TableCell>₹4,200,000</TableCell>
                    <TableCell>8.15%</TableCell>
                    <TableCell>2023-03-28</TableCell>
                    <TableCell>
                      <Badge variant="success">Disbursed</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Anil Agarwal</div>
                      <div className="text-sm text-muted-foreground">L-0965</div>
                    </TableCell>
                    <TableCell>₹5,800,000</TableCell>
                    <TableCell>8.20%</TableCell>
                    <TableCell>2023-03-25</TableCell>
                    <TableCell>
                      <Badge variant="success">Disbursed</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Deepa Menon</div>
                      <div className="text-sm text-muted-foreground">L-0943</div>
                    </TableCell>
                    <TableCell>₹3,500,000</TableCell>
                    <TableCell>8.10%</TableCell>
                    <TableCell>2023-03-22</TableCell>
                    <TableCell>
                      <Badge variant="success">Disbursed</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Suresh Pillai</div>
                      <div className="text-sm text-muted-foreground">L-0921</div>
                    </TableCell>
                    <TableCell>₹4,800,000</TableCell>
                    <TableCell>8.25%</TableCell>
                    <TableCell>2023-03-18</TableCell>
                    <TableCell>
                      <Badge variant="success">Disbursed</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <div className="font-medium">Kavita Sharma</div>
                      <div className="text-sm text-muted-foreground">L-0899</div>
                    </TableCell>
                    <TableCell>₹3,900,000</TableCell>
                    <TableCell>8.15%</TableCell>
                    <TableCell>2023-03-15</TableCell>
                    <TableCell>
                      <Badge variant="success">Disbursed</Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

