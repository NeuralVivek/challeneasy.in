import type { Metadata } from "next";
import { TopicPage } from "@/components/TopicPage";
import { topicMetadata } from "@/lib/seo";
import { topicPages } from "@/lib/topic-pages";
const data = topicPages["/guides/how-to-check-traffic-challan"];
export const metadata: Metadata = topicMetadata(data);
export default function HowToCheckTrafficChallanPage() { return <TopicPage data={data} />; }