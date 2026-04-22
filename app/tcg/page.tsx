import { MainPageLayout } from "@/components/MainPageLayout";
import { tcgMain } from "@/lib/brands";

export default function TcgMain() {
  return (
    <MainPageLayout
      brand={{ ...tcgMain, readMoreHref: "/tcg/case-study" }}
    />
  );
}
