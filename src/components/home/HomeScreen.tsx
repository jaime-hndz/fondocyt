import { SliderSection } from "./slider/SliderSection"
import { FeaturedSection } from "./featured/FeaturedSection"
import { WeAreSection } from "./we/WeAreSection"

export const HomeScreen = () => {
  return (
    <div>
      <SliderSection />
      <FeaturedSection />
      <WeAreSection />
    </div>
  )
}
