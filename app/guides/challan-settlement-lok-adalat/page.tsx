import type { Metadata } from "next";
import { TopicPage } from "@/components/TopicPage";
import { topicMetadata } from "@/lib/seo";
import { topicPages } from "@/lib/topic-pages";
const data = topicPages["/guides/challan-settlement-lok-adalat"];
export const metadata: Metadata = topicMetadata(data);
export default function ChallanSettlementLokAdalatGuidePage() { return <TopicPage data={data} />; }