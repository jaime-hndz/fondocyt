import { PageSection } from '../../layout/PageSection'
import { FeaturedDocuments } from './FeaturedDocuments'
import { CommunityIndicators } from './CommunityIndicators'
import { News } from './News'

export const FeaturedSection = () => {
  return (
    <PageSection>
                Documentos destacados 
        <FeaturedDocuments />
        Indicadores comunales
        <CommunityIndicators />
        Noticias destacadas
        <News />
    </PageSection>
  )
}
