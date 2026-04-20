import { BrandHeading } from "./BrandHeading";
import { ThinkUxLogo } from "./ThinkUxLogo";

export function CaseStudyHeader({
  name,
  tagline,
}: {
  name: string;
  tagline?: string;
}) {
  return (
    <>
      <div className="mb-16 md:mb-24">
        <ThinkUxLogo />
      </div>
      <div className="mb-8">
        <BrandHeading name={name} tagline={tagline} />
      </div>
    </>
  );
}
