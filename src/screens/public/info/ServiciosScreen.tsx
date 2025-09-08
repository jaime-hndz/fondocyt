import { Article } from "@/components/layout/Article/Article"
import { ArticleContainer } from "@/components/layout/Article/ArticleContainer"
import { Link } from "react-router"

export const ServiciosScreen = () => {
  return (
    <ArticleContainer>
      <Article title="Servicios">
        <div className="text-blue-500 underline ">
          <ul className="flex flex-col gap-5">
            <li><Link to={'/geovisor'} >Geovisor</Link></li>
            <li><a href="https://mapeomibarriord-arcoiris.hub.arcgis.com/">Mapea tu barrio </a></li>
            <li><a href="https://experience.arcgis.com/experience/a76018c1b51e44f3b35ebc8a01b13eb2">Reporta </a></li>
            <li><a href="https://ayuntamientohaina.gob.do/">Servicios: Ayuntamiento Haina </a></li>
          </ul>
        </div>
      </Article>
    </ArticleContainer>
  )
}
