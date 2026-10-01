import type { Metadata } from "next";
import { TopicPage } from "@/components/TopicPage";
import { topicMetadata } from "@/lib/seo";
import { topicPages } from "@/lib/topic-pages";

const data = topicPages["/delhi-challan-settlement"];

export const metadata: Metadata = topicMetadata(data);

export default function DelhiChallanSettlementPage() {
  return <TopicPage data={data} />;
}