"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Expanded sample data for charts
const bidPerformanceData = [
  { month: "Jan", won: 12, lost: 18, pending: 5 },
  { month: "Feb", won: 15, lost: 15, pending: 7 },
  { month: "Mar", won: 18, lost: 12, pending: 8 },
  { month: "Apr", won: 22, lost: 10, pending: 6 },
  { month: "May", won: 25, lost: 8, pending: 9 },
  { month: "Jun", won: 28, lost: 7, pending: 10 },
]

// Update the interest rate trends data to reflect Indian market rates
const interestRateTrendsData = [
  { month: "Jan", market: 8.2, yourAvg: 8.3, winningAvg: 8.1 },
  { month: "Feb", market: 8.3, yourAvg: 8.4, winningAvg: 8.2 },
  { month: "Mar", market: 8.4, yourAvg: 8.5, winningAvg: 8.3 },
  { month: "Apr", market: 8.3, yourAvg: 8.4, winningAvg: 8.2 },
  { month: "May", market: 8.2, yourAvg: 8.3, winningAvg: 8.1 },
  { month: "Jun", market: 8.1, yourAvg: 8.2, winningAvg: 8.0 },
]

const borrowerPreferencesData = [
  { name: "Low Interest Rate", value: 40 },
  { name: "Low Closing Costs", value: 25 },
  { name: "Fast Approval", value: 20 },
  { name: "Customer Service", value: 15 },
]

// New data for expanded analytics
const loanVolumeData = [
  { month: "Jan", volume: 120000000, count: 32 },
  { month: "Feb", volume: 145000000, count: 38 },
  { month: "Mar", volume: 160000000, count: 42 },
  { month: "Apr", volume: 185000000, count: 48 },
  { month: "May", volume: 210000000, count: 54 },
  { month: "Jun", volume: 230000000, count: 60 },
]

const propertyTypeDistributionData = [
  { name: "Apartment", value: 45 },
  { name: "Villa", value: 25 },
  { name: "Row House", value: 15 },
  { name: "Bungalow", value: 10 },
  { name: "Plot", value: 5 },
]

const locationDistributionData = [
  { name: "Mumbai", value: 30 },
  { name: "Bangalore", value: 25 },
  { name: "Delhi", value: 20 },
  { name: "Pune", value: 15 },
  { name: "Chennai", value: 10 },
]

const topPerformingLeadsData = [
  { id: "L-0987", name: "Ravi Kapoor", loanAmount: 4200000, interestRate: 8.15, profit: 420000 },
  { id: "L-0965", name: "Anil Agarwal", loanAmount: 5800000, interestRate: 8.2, profit: 580000 },
  { id: "L-0943", name: "Deepa Menon", loanAmount: 3500000, interestRate: 8.1, profit: 350000 },
  { id: "L-0921", name: "Suresh Pillai", loanAmount: 4800000, interestRate: 8.25, profit: 480000 },
  { id: "L-0899", name: "Kavita Sharma", loanAmount: 3900000, interestRate: 8.15, profit: 390000 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"]

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Analytics Dashboard</h2>
        <p className="text-muted-foreground">Gain insights into your bidding performance and market trends.</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Data period: <span className="font-medium">Jan 1, 2023 - Jun 30, 2023</span>
        </div>
        <div className="text-sm text-muted-foreground">
          Last updated: <span className="font-medium">Today at 11:45 AM</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Bids</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <div className="flex items-center">
              <Badge variant="success" className="mr-1">
                +12%
              </Badge>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Win Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32.5%</div>
            <div className="flex items-center">
              <Badge variant="success" className="mr-1">
                +4.2%
              </Badge>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Interest Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8.2%</div>
            <div className="flex items-center">
              <Badge variant="success" className="mr-1">
                -0.1%
              </Badge>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg. Response Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 hrs</div>
            <div className="flex items-center">
              <Badge variant="success" className="mr-1">
                -15 min
              </Badge>
              <p className="text-xs text-muted-foreground">from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">Bid Performance</TabsTrigger>
          <TabsTrigger value="trends">Market Trends</TabsTrigger>
          <TabsTrigger value="preferences">Borrower Preferences</TabsTrigger>
          <TabsTrigger value="volume">Loan Volume</TabsTrigger>
          <TabsTrigger value="distribution">Distribution</TabsTrigger>
        </TabsList>
        <TabsContent value="performance" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Bid Performance Over Time</CardTitle>
              <CardDescription>Track your bid outcomes over the past 6 months</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ChartContainer
                config={{
                  won: {
                    label: "Won Bids",
                    color: "hsl(var(--chart-1))",
                  },
                  lost: {
                    label: "Lost Bids",
                    color: "hsl(var(--chart-2))",
                  },
                  pending: {
                    label: "Pending Bids",
                    color: "hsl(var(--chart-3))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={bidPerformanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Bar dataKey="won" fill="var(--color-won)" name="Won Bids" />
                    <Bar dataKey="lost" fill="var(--color-lost)" name="Lost Bids" />
                    <Bar dataKey="pending" fill="var(--color-pending)" name="Pending Bids" />
                  </BarChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Top Performing Leads</CardTitle>
              <CardDescription>Leads that generated the highest profit</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lead ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Loan Amount</TableHead>
                    <TableHead>Interest Rate</TableHead>
                    <TableHead>Estimated Profit</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topPerformingLeadsData.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell>{lead.id}</TableCell>
                      <TableCell>{lead.name}</TableCell>
                      <TableCell>₹{lead.loanAmount.toLocaleString()}</TableCell>
                      <TableCell>{lead.interestRate}%</TableCell>
                      <TableCell>₹{lead.profit.toLocaleString()}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="trends" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Interest Rate Trends</CardTitle>
              <CardDescription>Compare your rates against market averages and winning bids</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ChartContainer
                config={{
                  market: {
                    label: "Market Average",
                    color: "hsl(var(--chart-1))",
                  },
                  yourAvg: {
                    label: "Your Average",
                    color: "hsl(var(--chart-2))",
                  },
                  winningAvg: {
                    label: "Winning Bids Average",
                    color: "hsl(var(--chart-3))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={interestRateTrendsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[7.8, 8.6]} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Line type="monotone" dataKey="market" stroke="var(--color-market)" name="Market Average" />
                    <Line type="monotone" dataKey="yourAvg" stroke="var(--color-yourAvg)" name="Your Average" />
                    <Line
                      type="monotone"
                      dataKey="winningAvg"
                      stroke="var(--color-winningAvg)"
                      name="Winning Bids Average"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Market Insights</CardTitle>
                <CardDescription>Current trends and forecasts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">RBI Policy Impact</h4>
                    <p className="text-sm text-muted-foreground">
                      The recent RBI policy has stabilized interest rates, with a slight downward trend expected in the
                      coming quarter. This presents an opportunity to offer competitive rates while maintaining
                      profitability.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Competitive Landscape</h4>
                    <p className="text-sm text-muted-foreground">
                      Major banks are focusing on digital approval processes and faster disbursement as key
                      differentiators. Consider highlighting your quick approval times in marketing materials.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Forecast</h4>
                    <p className="text-sm text-muted-foreground">
                      Home loan demand is projected to increase by 15% in the next quarter, particularly in the ₹40-60
                      lakh segment. Prepare for increased competition in this range.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Competitive Analysis</CardTitle>
                <CardDescription>How you compare to top competitors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Interest Rate</h4>
                      <Badge variant="outline">2nd of 6</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your average rate of 8.2% is competitive, only 0.1% higher than the market leader.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Processing Time</h4>
                      <Badge variant="outline">1st of 6</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your average processing time of 2.4 hours is the fastest in the market, giving you a significant
                      advantage.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Customer Satisfaction</h4>
                      <Badge variant="outline">3rd of 6</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Your satisfaction score of 4.2/5 is good but could be improved to match the top performers at
                      4.5/5.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="preferences" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Borrower Preferences</CardTitle>
              <CardDescription>What factors influence borrower decisions when selecting loan offers</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ChartContainer>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={borrowerPreferencesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={150}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {borrowerPreferencesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Preference Insights</CardTitle>
                <CardDescription>Understanding borrower decision factors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Interest Rate Sensitivity</h4>
                    <p className="text-sm text-muted-foreground">
                      Borrowers are most sensitive to interest rates, with 40% citing it as their primary decision
                      factor. A difference of just 0.1% can significantly impact conversion rates.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Fee Transparency</h4>
                    <p className="text-sm text-muted-foreground">
                      25% of borrowers prioritize low and transparent closing costs. Clearly communicating all fees
                      upfront can improve conversion rates by up to 15%.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-medium">Approval Speed</h4>
                    <p className="text-sm text-muted-foreground">
                      Fast approval is becoming increasingly important, with 20% of borrowers citing it as their primary
                      concern. Your quick processing time is a significant advantage here.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Customer Feedback</CardTitle>
                <CardDescription>Recent comments from borrowers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2 border-l-2 border-primary pl-4">
                    <p className="text-sm italic">
                      "The quick approval process was impressive. I had my loan approved within 3 hours of application."
                    </p>
                    <p className="text-xs text-muted-foreground">- Rajesh S., Mumbai (Approved 2 weeks ago)</p>
                  </div>

                  <div className="space-y-2 border-l-2 border-primary pl-4">
                    <p className="text-sm italic">
                      "I appreciated the transparency about all fees and charges. No surprises at the closing stage."
                    </p>
                    <p className="text-xs text-muted-foreground">- Priya P., Bangalore (Approved 3 weeks ago)</p>
                  </div>

                  <div className="space-y-2 border-l-2 border-primary pl-4">
                    <p className="text-sm italic">
                      "The interest rate was slightly higher than competitors, but the excellent customer service made
                      up for it."
                    </p>
                    <p className="text-xs text-muted-foreground">- Amit K., Delhi (Approved 1 month ago)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="volume" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Loan Volume Trends</CardTitle>
              <CardDescription>Monthly loan volume and count over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <ChartContainer
                config={{
                  volume: {
                    label: "Loan Volume (₹)",
                    color: "hsl(var(--chart-1))",
                  },
                  count: {
                    label: "Loan Count",
                    color: "hsl(var(--chart-2))",
                  },
                }}
              >
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={loanVolumeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" orientation="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Legend />
                    <Area
                      type="monotone"
                      dataKey="volume"
                      yAxisId="left"
                      stroke="var(--color-volume)"
                      fill="var(--color-volume)"
                      fillOpacity={0.3}
                      name="Loan Volume (₹)"
                    />
                    <Area
                      type="monotone"
                      dataKey="count"
                      yAxisId="right"
                      stroke="var(--color-count)"
                      fill="var(--color-count)"
                      fillOpacity={0.3}
                      name="Loan Count"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Volume Summary</CardTitle>
                <CardDescription>Key metrics for loan volume</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Total Volume (YTD)</h4>
                    <div className="text-2xl font-bold">₹1.05 Billion</div>
                    <p className="text-xs text-muted-foreground">
                      <Badge variant="success" className="mr-1">
                        +18%
                      </Badge>
                      compared to same period last year
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Average Loan Size</h4>
                    <div className="text-2xl font-bold">₹3.8 Million</div>
                    <p className="text-xs text-muted-foreground">
                      <Badge variant="success" className="mr-1">
                        +5%
                      </Badge>
                      compared to same period last year
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Projected Q3 Volume</h4>
                    <div className="text-2xl font-bold">₹650 Million</div>
                    <p className="text-xs text-muted-foreground">Based on current growth trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Loan Size Distribution</CardTitle>
                <CardDescription>Breakdown by loan amount</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm">₹1M - ₹3M</h4>
                      <span className="text-sm font-medium">35%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "35%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm">₹3M - ₹5M</h4>
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "42%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm">₹5M - ₹7M</h4>
                      <span className="text-sm font-medium">18%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "18%" }}></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm">₹7M+</h4>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="bg-primary h-full rounded-full" style={{ width: "5%" }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Growth Opportunities</CardTitle>
                <CardDescription>Areas with potential for expansion</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">High-Value Loans (₹7M+)</h4>
                    <p className="text-sm text-muted-foreground">
                      Currently only 5% of your portfolio. Market demand is growing at 22% annually in this segment.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Tier 2 Cities</h4>
                    <p className="text-sm text-muted-foreground">
                      Loan applications from cities like Jaipur, Lucknow, and Chandigarh have increased by 35% in the
                      last quarter.
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">First-Time Homebuyers</h4>
                    <p className="text-sm text-muted-foreground">
                      This segment has shown 28% growth and typically has higher loyalty and referral rates.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="distribution" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Property Type Distribution</CardTitle>
                <CardDescription>Breakdown of loans by property type</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={propertyTypeDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {propertyTypeDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Location Distribution</CardTitle>
                <CardDescription>Breakdown of loans by city</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ChartContainer>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={locationDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={120}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {locationDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Regional Performance</CardTitle>
              <CardDescription>Loan performance metrics by region</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Region</TableHead>
                    <TableHead>Total Loans</TableHead>
                    <TableHead>Total Volume</TableHead>
                    <TableHead>Avg. Interest Rate</TableHead>
                    <TableHead>Win Rate</TableHead>
                    <TableHead>Growth (YoY)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Mumbai & MMR</TableCell>
                    <TableCell>78</TableCell>
                    <TableCell>₹312 Million</TableCell>
                    <TableCell>8.15%</TableCell>
                    <TableCell>38%</TableCell>
                    <TableCell>
                      <Badge variant="success">+22%</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bangalore</TableCell>
                    <TableCell>65</TableCell>
                    <TableCell>₹260 Million</TableCell>
                    <TableCell>8.20%</TableCell>
                    <TableCell>35%</TableCell>
                    <TableCell>
                      <Badge variant="success">+18%</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Delhi NCR</TableCell>
                    <TableCell>52</TableCell>
                    <TableCell>₹208 Million</TableCell>
                    <TableCell>8.25%</TableCell>
                    <TableCell>30%</TableCell>
                    <TableCell>
                      <Badge variant="success">+15%</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Pune</TableCell>
                    <TableCell>38</TableCell>
                    <TableCell>₹152 Million</TableCell>
                    <TableCell>8.10%</TableCell>
                    <TableCell>42%</TableCell>
                    <TableCell>
                      <Badge variant="success">+28%</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Chennai</TableCell>
                    <TableCell>32</TableCell>
                    <TableCell>₹128 Million</TableCell>
                    <TableCell>8.20%</TableCell>
                    <TableCell>33%</TableCell>
                    <TableCell>
                      <Badge variant="success">+12%</Badge>
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

