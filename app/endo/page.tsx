import { MainPageLayout } from "@/components/MainPageLayout";
import { endoMain } from "@/lib/brands";

export default function EndoMain() {
  return (
    <MainPageLayout
      brand={{ ...endoMain, readMoreHref: "/endo/case-study" }}
    />
  );
}
