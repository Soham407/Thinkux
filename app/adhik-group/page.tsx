import { MainPageLayout } from "@/components/MainPageLayout";
import { adhikGroupMain } from "@/lib/brands";

export default function AdhikGroupMain() {
  return (
    <MainPageLayout
      brand={{ ...adhikGroupMain, readMoreHref: "/adhik-group/case-study" }}
    />
  );
}
