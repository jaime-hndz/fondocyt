import { PageSection } from "../../layout/PageSection";
import { CommunityIndicators } from "./CommunityIndicators";
import { FeaturedDocuments } from "./FeaturedDocuments";
import { News } from "./News";

export const FeaturedSection = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10">
        <FeaturedDocuments />
        <CommunityIndicators />
        <News />
      </div>
    </PageSection>
  );
};
