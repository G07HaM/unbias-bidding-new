"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpDown, ChevronDown, Clock, Edit, Eye, Filter, MoreHorizontal, Search, Trash } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/components/ui/use-toast"

// Expanded sample bid data
const bids = [
  {
    id: "BID-1001",
    leadId: "L-1001",
    leadName: "Rajesh Sharma",
    loanAmount: 4500000,
    interestRate: 8.25,
    loanTerm: 20,
    processingFee: 25000,
    status: "Pending",
    dateSubmitted: "2023-04-18",
    expiresIn: "47 hours",
    competingBids: 3,
    location: "Mumbai, MH",
    propertyType: "Apartment",
    lastActivity: "Borrower viewed 2 hours ago",
  },
  {
    id: "BID-1002",
    leadId: "L-1002",
    leadName: "Priya Patel",
    loanAmount: 3200000,
    interestRate: 8.15,
    loanTerm: 20,
    processingFee: 22000,
    status: "Active",
    dateSubmitted: "2023-04-17",
    expiresIn: "23 hours",
    competingBids: 4,
    location: "Bangalore, KA",
    propertyType: "Villa",
    lastActivity: "Borrower requested more information",
  },
  {
    id: "BID-1003",
    leadId: "L-1003",
    leadName: "Amit Kumar",
    loanAmount: 5500000,
    interestRate: 8.35,
    loanTerm: 20,
    processingFee: 27000,
    status: "Won",
    dateSubmitted: "2023-04-15",
    expiresIn: "Completed",
    competingBids: 5,
    location: "Delhi, DL",
    propertyType: "Apartment",
    lastActivity: "Loan agreement signed",
  },
  {
    id: "BID-1004",
    leadId: "L-1004",
    leadName: "Sunita Verma",
    loanAmount: 2750000,
    interestRate: 8.2,
    loanTerm: 20,
    processingFee: 20000,
    status: "Lost",
    dateSubmitted: "2023-04-14",
    expiresIn: "Completed",
    competingBids: 3,
    location: "Pune, MH",
    propertyType: "Row House",
    lastActivity: "Borrower selected another lender",
  },
  {
    id: "BID-1005",
    leadId: "L-1005",
    leadName: "Vikram Singh",
    loanAmount: 3800000,
    interestRate: 8.3,
    loanTerm: 20,
    processingFee: 24000,
    status: "Draft",
    dateSubmitted: "2023-04-16",
    expiresIn: "N/A",
    competingBids: 0,
    location: "Chennai, TN",
    propertyType: "Apartment",
    lastActivity: "Draft saved 1 day ago",
  },
  {
    id: "BID-1006",
    leadId: "L-1006",
    leadName: "Ananya Desai",
    loanAmount: 6200000,
    interestRate: 8.4,
    loanTerm: 25,
    processingFee: 30000,
    status: "Pending",
    dateSubmitted: "2023-04-19",
    expiresIn: "58 hours",
    competingBids: 6,
    location: "Hyderabad, TS",
    propertyType: "Villa",
    lastActivity: "Borrower comparing offers",
  },
  {
    id: "BID-1007",
    leadId: "L-1007",
    leadName: "Rahul Mehta",
    loanAmount: 4100000,
    interestRate: 8.2,
    loanTerm: 20,
    processingFee: 23000,
    status: "Active",
    dateSubmitted: "2023-04-18",
    expiresIn: "35 hours",
    competingBids: 4,
    location: "Ahmedabad, GJ",
    propertyType: "Apartment",
    lastActivity: "Borrower requested rate negotiation",
  },
  {
    id: "BID-1008",
    leadId: "L-1008",
    leadName: "Neha Gupta",
    loanAmount: 5800000,
    interestRate: 8.35,
    loanTerm: 25,
    processingFee: 28000,
    status: "Won",
    dateSubmitted: "2023-04-16",
    expiresIn: "Completed",
    competingBids: 5,
    location: "Kolkata, WB",
    propertyType: "Bungalow",
    lastActivity: "Loan disbursed",
  },
  {
    id: "BID-1009",
    leadId: "L-1009",
    leadName: "Kiran Reddy",
    loanAmount: 3500000,
    interestRate: 8.15,
    loanTerm: 20,
    processingFee: 22000,
    status: "Lost",
    dateSubmitted: "2023-04-15",
    expiresIn: "Completed",
    competingBids: 3,
    location: "Bangalore, KA",
    propertyType: "Apartment",
    lastActivity: "Borrower selected competitor with lower rate",
  },
  {
    id: "BID-1010",
    leadId: "L-1010",
    leadName: "Arjun Nair",
    loanAmount: 4800000,
    interestRate: 8.25,
    loanTerm: 20,
    processingFee: 25000,
    status: "Active",
    dateSubmitted: "2023-04-17",
    expiresIn: "29 hours",
    competingBids: 4,
    location: "Kochi, KL",
    propertyType: "Row House",
    lastActivity: "Borrower requested document clarification",
  },
  {
    id: "BID-1011",
    leadId: "L-1011",
    leadName: "Meera Iyer",
    loanAmount: 3900000,
    interestRate: 8.2,
    loanTerm: 20,
    processingFee: 23000,
    status: "Draft",
    dateSubmitted: "2023-04-19",
    expiresIn: "N/A",
    competingBids: 0,
    location: "Chennai, TN",
    propertyType: "Apartment",
    lastActivity: "Draft created 5 hours ago",
  },
  {
    id: "BID-1012",
    leadId: "L-1012",
    leadName: "Sanjay Joshi",
    loanAmount: 5200000,
    interestRate: 8.3,
    loanTerm: 25,
    processingFee: 26000,
    status: "Won",
    dateSubmitted: "2023-04-14",
    expiresIn: "Completed",
    competingBids: 4,
    location: "Pune, MH",
    propertyType: "Villa",
    lastActivity: "Documentation in progress",
  },
  {
    id: "BID-1013",
    leadId: "L-1013",
    leadName: "Divya Sharma",
    loanAmount: 3100000,
    interestRate: 8.1,
    loanTerm: 20,
    processingFee: 21000,
    status: "Lost",
    dateSubmitted: "2023-04-13",
    expiresIn: "Completed",
    competingBids: 3,
    location: "Jaipur, RJ",
    propertyType: "Apartment",
    lastActivity: "Borrower went with another bank",
  },
  {
    id: "BID-1014",
    leadId: "L-1014",
    leadName: "Vivek Malhotra",
    loanAmount: 6500000,
    interestRate: 8.4,
    loanTerm: 25,
    processingFee: 32000,
    status: "Pending",
    dateSubmitted: "2023-04-19",
    expiresIn: "62 hours",
    competingBids: 5,
    location: "Gurgaon, HR",
    propertyType: "Bungalow",
    lastActivity: "Borrower reviewing terms",
  },
  {
    id: "BID-1015",
    leadId: "L-1015",
    leadName: "Pooja Patel",
    loanAmount: 4300000,
    interestRate: 8.25,
    loanTerm: 20,
    processingFee: 24000,
    status: "Active",
    dateSubmitted: "2023-04-18",
    expiresIn: "41 hours",
    competingBids: 4,
    location: "Surat, GJ",
    propertyType: "Row House",
    lastActivity: "Borrower requested processing fee reduction",
  },
]

// Summary statistics
const bidSummary = {
  total: bids.length,
  pending: bids.filter((b) => b.status === "Pending").length,
  active: bids.filter((b) => b.status === "Active").length,
  won: bids.filter((b) => b.status === "Won").length,
  lost: bids.filter((b) => b.status === "Lost").length,
  draft: bids.filter((b) => b.status === "Draft").length,
  avgInterestRate: 8.25,
  avgProcessingFee: 24500,
  totalLoanAmount: bids.reduce((sum, bid) => sum + bid.loanAmount, 0),
  winRate: (
    (bids.filter((b) => b.status === "Won").length /
      (bids.filter((b) => b.status === "Won").length + bids.filter((b) => b.status === "Lost").length)) *
    100
  ).toFixed(1),
}

export function BidManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredBids = bids.filter((bid) => {
    const matchesSearch =
      bid.leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bid.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bid.leadId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bid.location.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(bid.status)

    return matchesSearch && matchesStatus
  })

  // Pagination
  const totalPages = Math.ceil(filteredBids.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedBids = filteredBids.slice(startIndex, startIndex + itemsPerPage)

  const handleDeleteBid = (bidId: string) => {
    toast({
      title: "Bid Deleted",
      description: `Bid ${bidId} has been deleted.`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Bid Management</h2>
          <p className="text-muted-foreground">Track, modify, and optimize your bids on borrower applications.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Save Filter
          </Button>
          <Button size="sm">Export Bids</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Bids</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bidSummary.total}</div>
            <p className="text-xs text-muted-foreground">{bidSummary.active + bidSummary.pending} active/pending</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bidSummary.winRate}%</div>
            <p className="text-xs text-muted-foreground">
              {bidSummary.won} won, {bidSummary.lost} lost
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Interest Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{bidSummary.avgInterestRate}%</div>
            <p className="text-xs text-muted-foreground">Range: 8.10% - 8.40%</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Loan Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{(bidSummary.totalLoanAmount / 10000000).toFixed(2)}Cr</div>
            <p className="text-xs text-muted-foreground">
              Avg: ₹{(bidSummary.totalLoanAmount / bidSummary.total / 100000).toFixed(1)}L
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Bids ({bidSummary.total})</TabsTrigger>
          <TabsTrigger value="active">Active ({bidSummary.active})</TabsTrigger>
          <TabsTrigger value="pending">Pending ({bidSummary.pending})</TabsTrigger>
          <TabsTrigger value="won">Won ({bidSummary.won})</TabsTrigger>
          <TabsTrigger value="lost">Lost ({bidSummary.lost})</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search bids..."
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
                    Status
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filter by status</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {["Pending", "Active", "Won", "Lost", "Draft"].map((status) => (
                    <DropdownMenuItem
                      key={status}
                      onSelect={() => {
                        if (selectedStatus.includes(status)) {
                          setSelectedStatus(selectedStatus.filter((s) => s !== status))
                        } else {
                          setSelectedStatus([...selectedStatus, status])
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedStatus.includes(status)}
                          onChange={() => {}}
                          className="h-4 w-4"
                        />
                        {status}
                      </div>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[80px]">Bid ID</TableHead>
                    <TableHead>Borrower</TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Loan Amount
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>
                      <div className="flex items-center">
                        Interest Rate
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Term</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Submitted</TableHead>
                    <TableHead>Expires In</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedBids.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="h-24 text-center">
                        No bids found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginatedBids.map((bid) => (
                      <TableRow key={bid.id}>
                        <TableCell className="font-medium">{bid.id}</TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span>{bid.leadName}</span>
                            <span className="text-xs text-muted-foreground">{bid.leadId}</span>
                          </div>
                        </TableCell>
                        <TableCell>₹{bid.loanAmount.toLocaleString()}</TableCell>
                        <TableCell>{bid.interestRate.toFixed(2)}%</TableCell>
                        <TableCell>{bid.loanTerm} years</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              bid.status === "Won"
                                ? "success"
                                : bid.status === "Lost"
                                  ? "destructive"
                                  : bid.status === "Active" || bid.status === "Pending"
                                    ? "default"
                                    : "outline"
                            }
                          >
                            {bid.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{bid.dateSubmitted}</TableCell>
                        <TableCell>
                          {bid.status === "Active" || bid.status === "Pending" ? (
                            <div className="flex items-center text-amber-500">
                              <Clock className="mr-1 h-4 w-4" />
                              {bid.expiresIn}
                            </div>
                          ) : (
                            bid.expiresIn
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem asChild>
                                <Link href={`/bidding/${bid.leadId}`}>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Details
                                </Link>
                              </DropdownMenuItem>
                              {(bid.status === "Draft" || bid.status === "Pending") && (
                                <DropdownMenuItem asChild>
                                  <Link href={`/bidding/${bid.leadId}`}>
                                    <Edit className="mr-2 h-4 w-4" />
                                    Edit Bid
                                  </Link>
                                </DropdownMenuItem>
                              )}
                              {bid.status === "Draft" && (
                                <DropdownMenuItem onClick={() => handleDeleteBid(bid.id)}>
                                  <Trash className="mr-2 h-4 w-4" />
                                  Delete Bid
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

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
        <TabsContent value="active">
          <Card>
            <CardHeader>
              <CardTitle>Active Bids</CardTitle>
              <CardDescription>Bids that are currently active and awaiting borrower decision.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Borrower</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Competing Bids</TableHead>
                    <TableHead>Expires In</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bids
                    .filter((b) => b.status === "Active")
                    .map((bid) => (
                      <TableRow key={bid.id}>
                        <TableCell>
                          <div className="font-medium">{bid.leadName}</div>
                          <div className="text-xs text-muted-foreground">{bid.location}</div>
                        </TableCell>
                        <TableCell>₹{bid.loanAmount.toLocaleString()}</TableCell>
                        <TableCell>{bid.interestRate.toFixed(2)}%</TableCell>
                        <TableCell>{bid.competingBids}</TableCell>
                        <TableCell>
                          <div className="flex items-center text-amber-500">
                            <Clock className="mr-1 h-4 w-4" />
                            {bid.expiresIn}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-xs">{bid.lastActivity}</div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/bidding/${bid.leadId}`}>View</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pending">
          <Card>
            <CardHeader>
              <CardTitle>Pending Bids</CardTitle>
              <CardDescription>Bids that have been submitted but not yet reviewed by the borrower.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Borrower</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Competing Bids</TableHead>
                    <TableHead>Expires In</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bids
                    .filter((b) => b.status === "Pending")
                    .map((bid) => (
                      <TableRow key={bid.id}>
                        <TableCell>
                          <div className="font-medium">{bid.leadName}</div>
                          <div className="text-xs text-muted-foreground">{bid.location}</div>
                        </TableCell>
                        <TableCell>₹{bid.loanAmount.toLocaleString()}</TableCell>
                        <TableCell>{bid.interestRate.toFixed(2)}%</TableCell>
                        <TableCell>{bid.competingBids}</TableCell>
                        <TableCell>
                          <div className="flex items-center text-amber-500">
                            <Clock className="mr-1 h-4 w-4" />
                            {bid.expiresIn}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-xs">{bid.lastActivity}</div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/bidding/${bid.leadId}`}>View</Link>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <Link href={`/bidding/${bid.leadId}`}>Edit</Link>
                            </Button>
                          </div>
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
              <CardDescription>Bids that have been accepted by borrowers.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Borrower</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Date Won</TableHead>
                    <TableHead>Property Type</TableHead>
                    <TableHead>Last Activity</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bids
                    .filter((b) => b.status === "Won")
                    .map((bid) => (
                      <TableRow key={bid.id}>
                        <TableCell>
                          <div className="font-medium">{bid.leadName}</div>
                          <div className="text-xs text-muted-foreground">{bid.location}</div>
                        </TableCell>
                        <TableCell>₹{bid.loanAmount.toLocaleString()}</TableCell>
                        <TableCell>{bid.interestRate.toFixed(2)}%</TableCell>
                        <TableCell>{bid.dateSubmitted}</TableCell>
                        <TableCell>{bid.propertyType}</TableCell>
                        <TableCell>
                          <div className="text-xs">{bid.lastActivity}</div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/bidding/${bid.leadId}`}>View</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="lost">
          <Card>
            <CardHeader>
              <CardTitle>Lost Bids</CardTitle>
              <CardDescription>Bids that were not accepted by borrowers.</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Borrower</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Your Rate</TableHead>
                    <TableHead>Winning Rate</TableHead>
                    <TableHead>Date Lost</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bids
                    .filter((b) => b.status === "Lost")
                    .map((bid) => (
                      <TableRow key={bid.id}>
                        <TableCell>
                          <div className="font-medium">{bid.leadName}</div>
                          <div className="text-xs text-muted-foreground">{bid.location}</div>
                        </TableCell>
                        <TableCell>₹{bid.loanAmount.toLocaleString()}</TableCell>
                        <TableCell>{bid.interestRate.toFixed(2)}%</TableCell>
                        <TableCell>{(bid.interestRate - 0.15).toFixed(2)}%</TableCell>
                        <TableCell>{bid.dateSubmitted}</TableCell>
                        <TableCell>
                          <div className="text-xs">{bid.lastActivity}</div>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/bidding/${bid.leadId}`}>View</Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

