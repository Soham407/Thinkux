import { MainPageLayout } from "@/components/MainPageLayout";
import { cheesianoMain } from "@/lib/brands";

export default function CheesianoMain() {
  return (
    <MainPageLayout
      brand={{ ...cheesianoMain, readMoreHref: "/cheesiano/case-study" }}
    />
  );
}
