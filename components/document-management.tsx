"use client"

import type React from "react"

import { useState } from "react"
import { Download, Eye, FileText, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"

// Expanded sample document data
const documents = [
  {
    id: "DOC-1001",
    name: "Loan Agreement - Rajesh Sharma",
    type: "Contract",
    status: "Pending Signature",
    dateUploaded: "2023-04-18",
    leadId: "L-1001",
    leadName: "Rajesh Sharma",
    size: "2.4 MB",
    uploadedBy: "Ankit Verma",
    lastViewed: "2 hours ago",
    version: "1.2",
    comments: "Awaiting borrower signature",
  },
  {
    id: "DOC-1002",
    name: "Credit Report - Rajesh Sharma",
    type: "Report",
    status: "Completed",
    dateUploaded: "2023-04-15",
    leadId: "L-1001",
    leadName: "Rajesh Sharma",
    size: "1.8 MB",
    uploadedBy: "System",
    lastViewed: "1 day ago",
    version: "1.0",
    comments: "CIBIL score verified",
  },
  {
    id: "DOC-1003",
    name: "Property Valuation - Rajesh Sharma",
    type: "Report",
    status: "In Review",
    dateUploaded: "2023-04-17",
    leadId: "L-1001",
    leadName: "Rajesh Sharma",
    size: "3.5 MB",
    uploadedBy: "Neha Gupta",
    lastViewed: "5 hours ago",
    version: "1.1",
    comments: "Valuation pending final approval",
  },
  {
    id: "DOC-1004",
    name: "Loan Agreement - Priya Patel",
    type: "Contract",
    status: "Signed",
    dateUploaded: "2023-04-16",
    leadId: "L-1002",
    leadName: "Priya Patel",
    size: "2.3 MB",
    uploadedBy: "Ankit Verma",
    lastViewed: "3 days ago",
    version: "1.0",
    comments: "All signatures complete",
  },
  {
    id: "DOC-1005",
    name: "Income Verification - Priya Patel",
    type: "Verification",
    status: "Completed",
    dateUploaded: "2023-04-14",
    leadId: "L-1002",
    leadName: "Priya Patel",
    size: "1.2 MB",
    uploadedBy: "System",
    lastViewed: "2 days ago",
    version: "1.0",
    comments: "Income verified through bank statements",
  },
  {
    id: "DOC-1006",
    name: "Property Documents - Priya Patel",
    type: "Legal",
    status: "Completed",
    dateUploaded: "2023-04-15",
    leadId: "L-1002",
    leadName: "Priya Patel",
    size: "4.7 MB",
    uploadedBy: "Rahul Mehta",
    lastViewed: "1 day ago",
    version: "1.0",
    comments: "All property papers verified",
  },
  {
    id: "DOC-1007",
    name: "Loan Agreement - Amit Kumar",
    type: "Contract",
    status: "Signed",
    dateUploaded: "2023-04-13",
    leadId: "L-1003",
    leadName: "Amit Kumar",
    size: "2.5 MB",
    uploadedBy: "Ankit Verma",
    lastViewed: "5 days ago",
    version: "1.0",
    comments: "Loan disbursed",
  },
  {
    id: "DOC-1008",
    name: "Identity Proof - Amit Kumar",
    type: "KYC",
    status: "Completed",
    dateUploaded: "2023-04-10",
    leadId: "L-1003",
    leadName: "Amit Kumar",
    size: "0.8 MB",
    uploadedBy: "System",
    lastViewed: "6 days ago",
    version: "1.0",
    comments: "Aadhaar verified",
  },
  {
    id: "DOC-1009",
    name: "Loan Agreement - Sunita Verma",
    type: "Contract",
    status: "Rejected",
    dateUploaded: "2023-04-12",
    leadId: "L-1004",
    leadName: "Sunita Verma",
    size: "2.3 MB",
    uploadedBy: "Ankit Verma",
    lastViewed: "7 days ago",
    version: "1.0",
    comments: "Borrower went with another lender",
  },
  {
    id: "DOC-1010",
    name: "Property Valuation - Sunita Verma",
    type: "Report",
    status: "Completed",
    dateUploaded: "2023-04-11",
    leadId: "L-1004",
    leadName: "Sunita Verma",
    size: "3.2 MB",
    uploadedBy: "Neha Gupta",
    lastViewed: "8 days ago",
    version: "1.0",
    comments: "Valuation completed",
  },
  {
    id: "DOC-1011",
    name: "Loan Application - Vikram Singh",
    type: "Application",
    status: "In Review",
    dateUploaded: "2023-04-11",
    leadId: "L-1005",
    leadName: "Vikram Singh",
    size: "1.5 MB",
    uploadedBy: "System",
    lastViewed: "1 day ago",
    version: "1.0",
    comments: "Application under processing",
  },
  {
    id: "DOC-1012",
    name: "Bank Statements - Vikram Singh",
    type: "Financial",
    status: "In Review",
    dateUploaded: "2023-04-11",
    leadId: "L-1005",
    leadName: "Vikram Singh",
    size: "2.8 MB",
    uploadedBy: "Vikram Singh",
    lastViewed: "2 days ago",
    version: "1.0",
    comments: "Last 6 months statements",
  },
  {
    id: "DOC-1013",
    name: "Loan Agreement - Ananya Desai",
    type: "Contract",
    status: "Draft",
    dateUploaded: "2023-04-10",
    leadId: "L-1006",
    leadName: "Ananya Desai",
    size: "2.2 MB",
    uploadedBy: "Ankit Verma",
    lastViewed: "3 hours ago",
    version: "0.9",
    comments: "Draft agreement prepared",
  },
  {
    id: "DOC-1014",
    name: "Property Documents - Ananya Desai",
    type: "Legal",
    status: "In Review",
    dateUploaded: "2023-04-09",
    leadId: "L-1006",
    leadName: "Ananya Desai",
    size: "5.1 MB",
    uploadedBy: "Rahul Mehta",
    lastViewed: "1 day ago",
    version: "1.0",
    comments: "Legal verification in progress",
  },
  {
    id: "DOC-1015",
    name: "Income Tax Returns - Ananya Desai",
    type: "Financial",
    status: "Completed",
    dateUploaded: "2023-04-08",
    leadId: "L-1006",
    leadName: "Ananya Desai",
    size: "1.7 MB",
    uploadedBy: "Ananya Desai",
    lastViewed: "2 days ago",
    version: "1.0",
    comments: "Last 3 years ITR verified",
  },
]

// Document statistics
const documentStats = {
  total: documents.length,
  completed: documents.filter((d) => d.status === "Completed" || d.status === "Signed").length,
  inReview: documents.filter((d) => d.status === "In Review").length,
  pending: documents.filter((d) => d.status === "Pending Signature").length,
  rejected: documents.filter((d) => d.status === "Rejected").length,
  draft: documents.filter((d) => d.status === "Draft").length,
  byType: {
    contract: documents.filter((d) => d.type === "Contract").length,
    report: documents.filter((d) => d.type === "Report").length,
    verification: documents.filter((d) => d.type === "Verification").length,
    legal: documents.filter((d) => d.type === "Legal").length,
    financial: documents.filter((d) => d.type === "Financial").length,
    kyc: documents.filter((d) => d.type === "KYC").length,
    application: documents.filter((d) => d.type === "Application").length,
  },
}

export function DocumentManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [documentName, setDocumentName] = useState("")
  const [documentType, setDocumentType] = useState("")
  const [leadId, setLeadId] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredDocuments = documents.filter((doc) => {
    return (
      doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.leadName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Pagination
  const totalPages = Math.ceil(filteredDocuments.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedDocuments = filteredDocuments.slice(startIndex, startIndex + itemsPerPage)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
      if (!documentName) {
        setDocumentName(e.target.files[0].name)
      }
    }
  }

  const handleUpload = () => {
    if (!selectedFile || !documentName || !documentType || !leadId) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and select a file.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Document Uploaded",
      description: `${documentName} has been uploaded successfully.`,
    })

    // Reset form
    setSelectedFile(null)
    setDocumentName("")
    setDocumentType("")
    setLeadId("")
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Document Management</h2>
        <p className="text-muted-foreground">
          Securely manage and exchange documents with borrowers and other stakeholders.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Documents</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documentStats.total}</div>
            <p className="text-xs text-muted-foreground">
              {documentStats.inReview + documentStats.pending} in progress
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documentStats.completed}</div>
            <p className="text-xs text-muted-foreground">
              {((documentStats.completed / documentStats.total) * 100).toFixed(0)}% of total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Signature</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documentStats.pending}</div>
            <p className="text-xs text-muted-foreground">
              Awaiting borrower action
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">In Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{documentStats.inReview}</div>
            <p className="text-xs text-muted-foreground">
              Under internal processing
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="documents">
        <TabsList>
          <TabsTrigger value="documents">All Documents ({documentStats.total})</TabsTrigger>
          <TabsTrigger value="upload">Upload Document</TabsTrigger>
          <TabsTrigger value="compliance">Compliance Checks</TabsTrigger>
        </TabsList>
        <TabsContent value="documents" className="space-y-4 pt-4">
          <div className="flex items-center">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documents..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Document ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Lead</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Date Uploaded</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedDocuments.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={7} className="h-24 text-center">
                        No documents found.
                      </TableCell>
                    </TableRow>
                  ) : (
                    paginatedDocuments.map((doc) => (
                      <TableRow key={doc.id}>
                        <TableCell className="font-medium">{doc.id}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
                            <div>
                              <div>{doc.name}</div>
                              <div className="text-xs text-muted-foreground">{doc.size}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{doc.type}</TableCell>
                        <TableCell>{doc.leadName}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              doc.status === "Completed" || doc.status === "Signed"
                                ? "success"
                                : doc.status === "In Review" || doc.status === "Pending Signature"
                                  ? "warning"
                                  : doc.status === "Rejected"
                                    ? "destructive"
                                    : "outline"
                            }
                          >
                            {doc.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div>{doc.dateUploaded}</div>
                          <div className="text-xs text-muted-foreground">by {doc.uploadedBy}</div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                              <span className="sr-only">View</span>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Download className="h-4 w-4" />
                              <span className="sr-only">Download</span>
                            </Button>
                          </div>
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
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
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
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          )}
        </TabsContent>
        <TabsContent value="upload" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Document</CardTitle>
              <CardDescription>Upload documents related to loan applications and borrowers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="document-name">Document Name</Label>
                <Input
                  id="document-name"
                  placeholder="Enter document name"
                  value={documentName}
                  onChange={(e) => setDocumentName(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="document-type">Document Type</Label>
                <select
                  id="document-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={documentType}
                  onChange={(e) => setDocumentType(e.target.value)}
                >
                  <option value="">Select document type</option>
                  <option value="Contract">Contract</option>
                  <option value="Report">Report</option>
                  <option value="Verification">Verification</option>
                  <option value="Application">Application</option>
                  <option value="Legal">Legal</option>
                  <option value="Financial">Financial</option>
                  <option value="KYC">KYC</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="lead-id">Associated Lead</Label>
                <select
                  id="lead-id"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  value={leadId}
                  onChange={(e) => setLeadId(e.target.value)}
                >
                  <option value="">Select lead</option>
                  <option value="L-1001">L-1001 - Rajesh Sharma</option>
                  <option value="L-1002">L-1002 - Priya Patel</option>
                  <option value="L-1003">L-1003 - Amit Kumar</option>
                  <option value="L-1004">L-1004 - Sunita Verma</option>
                  <option value="L-1005">L-1005 - Vikram Singh</option>
                  <option value="L-1006">L-1006 - Ananya Desai</option>
                  <option value="L-1007">L-1007 - Deepak Joshi</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="document-file">Upload Document</Label>
                <Input
                  id="document-file"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>

              <Button onClick={handleUpload} className="w-full">
                Upload Document
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

export { DocumentManagement }

