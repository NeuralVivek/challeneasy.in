import type { Metadata } from "next";
import { TopicPage } from "@/components/TopicPage";
import { topicMetadata } from "@/lib/seo";
import { topicPages } from "@/lib/topic-pages";
const data = topicPages["/guides/unpaid-traffic-challan"];
export const metadata: Metadata = topicMetadata(data);
export default function UnpaidTrafficChallanPage() { return <TopicPage data={data} />; }