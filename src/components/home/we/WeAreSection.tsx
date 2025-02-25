import { PageSection } from '../../layout/PageSection'
import { Sponsors } from './Sponsors'
import { WeAre } from './WeAre'

export const WeAreSection = () => {
  return (
    <PageSection>
        <div className='flex flex-col gap-10'>
          <WeAre />
          {/* <Sponsors /> */}
        </div>
    </PageSection>
    
  )
}
