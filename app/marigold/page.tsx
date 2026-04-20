import { MainPageLayout } from "@/components/MainPageLayout";
import { marigoldMain } from "@/lib/brands";

export default function MarigoldMain() {
  return (
    <MainPageLayout
      brand={{ ...marigoldMain, readMoreHref: "/marigold/case-study" }}
    />
  );
}
