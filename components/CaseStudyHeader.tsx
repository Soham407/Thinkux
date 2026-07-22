import { BrandHeading } from "./BrandHeading";


export function CaseStudyHeader({
  name,
  tagline,
}: {
  name: string;
  tagline?: string;
}) {
  return (
    <>

      <div className="mb-8">
        <BrandHeading name={name} tagline={tagline} />
      </div>
    </>
  );
}
