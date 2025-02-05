import { FeaturedSection } from "@/components/home/featured/FeaturedSection"
import { SliderSection } from "@/components/home/slider/SliderSection"
import { WeAreSection } from "@/components/home/we/WeAreSection"


export const HomeScreen = () => {
  return (
    <div>
      <SliderSection />
      <FeaturedSection />
      <WeAreSection />
    </div>
  )
}
