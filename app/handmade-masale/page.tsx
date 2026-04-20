import { MainPageLayout } from "@/components/MainPageLayout";
import { handmadeMasaleMain } from "@/lib/brands";

export default function HandmadeMasalePage() {
  return (
    <MainPageLayout
      brand={{ ...handmadeMasaleMain, readMoreHref: "/handmade-masale/case-study" }}
    />
  );
}
