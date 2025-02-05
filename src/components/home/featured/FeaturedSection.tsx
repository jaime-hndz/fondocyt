import { PageSection } from "../../layout/PageSection";
import { FeaturedDocuments } from "./FeaturedDocuments";
import { CommunityIndicators } from "./CommunityIndicators";
import { News } from "./News";

export const FeaturedSection = () => {
  return (
    <PageSection>
      <div className="flex flex-col gap-10">
        <div>
          Documentos destacados
          <FeaturedDocuments />
        </div>
        <div>
          Indicadores comunales
          <CommunityIndicators />
        </div>
        <div>
          Noticias destacadas
          <News />
        </div>
      </div>
    </PageSection>
  );
};
