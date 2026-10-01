import type { Metadata } from "next";
import { TopicPage } from "@/components/TopicPage";
import { topicMetadata } from "@/lib/seo";
import { topicPages } from "@/lib/topic-pages";
const data = topicPages["/guides/delhi-traffic-challan-guide"];
export const metadata: Metadata = topicMetadata(data);
export default function DelhiTrafficChallanGuidePage() { return <TopicPage data={data} />; }