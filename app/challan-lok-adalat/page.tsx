import type { Metadata } from "next";
import { TopicPage } from "@/components/TopicPage";
import { topicMetadata } from "@/lib/seo";
import { topicPages } from "@/lib/topic-pages";

const data = topicPages["/challan-lok-adalat"];

export const metadata: Metadata = topicMetadata(data);

export default function ChallanLokAdalatPage() {
  return <TopicPage data={data} />;
}