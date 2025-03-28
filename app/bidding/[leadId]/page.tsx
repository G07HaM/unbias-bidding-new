import { DashboardLayout } from "@/components/dashboard-layout"
import { BiddingInterface } from "@/components/bidding-interface"

export default function BiddingPage({ params }: { params: { leadId: string } }) {
  const leadId = params.leadId
  return (
    <DashboardLayout>
      <BiddingInterface leadId={leadId} />
    </DashboardLayout>
  )
}