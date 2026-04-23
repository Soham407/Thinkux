import { MainPageLayout } from "@/components/MainPageLayout";
import { seasonsMain } from "@/lib/brands";

export default function SeasonsMain() {
  return (
    <MainPageLayout
      brand={{ ...seasonsMain, readMoreHref: "/seasons/case-study" }}
    />
  );
}
