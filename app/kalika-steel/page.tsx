import { MainPageLayout } from "@/components/MainPageLayout";
import { kalikaMain } from "@/lib/brands";

export default function KalikaSteelMain() {
  return (
    <MainPageLayout
      brand={{ ...kalikaMain, readMoreHref: "/kalika-steel/case-study" }}
    />
  );
}
