import { FeaturedSection } from "@/components/home/featured/FeaturedSection"
import { SliderSection } from "@/components/home/slider/SliderSection"
import { WeAreSection } from "@/components/home/we/WeAreSection"


export const HomeScreen = () => {
  return (
    <div>
      <SliderSection />
      <div className="h-30" />
      <FeaturedSection />
      <WeAreSection />
      <div className="h-30" />

    </div>
  )
}
