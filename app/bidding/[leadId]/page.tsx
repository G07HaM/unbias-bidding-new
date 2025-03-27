import { DashboardLayout } from "@/components/dashboard-layout"
import { BiddingInterface } from "@/components/bidding-interface"

export default function BiddingPage({ params }: { params: { leadId: string } }) {
  return (
    <DashboardLayout>
      <BiddingInterface leadId={params.leadId} />
    </DashboardLayout>
  )
}

