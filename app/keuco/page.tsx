import { MainPageLayout } from "@/components/MainPageLayout";
import { keucoMain } from "@/lib/brands";

export default function KeucoPage() {
  return (
    <MainPageLayout
      brand={{ ...keucoMain, readMoreHref: "/keuco/case-study" }}
    />
  );
}
