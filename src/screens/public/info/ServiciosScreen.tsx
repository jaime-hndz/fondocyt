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
            <li><Link  to={'/geovisro'}>Mapea tu barrio</Link></li>
            <li><Link  to={'/geovisro'}>Reporta</Link></li>
            <li><a href="https://ayuntamientohaina.gob.do/category/servicios/">Servicios: Ayuntamiento Haina </a></li>


          </ul>
        </div>
      </Article>
    </ArticleContainer>
  )
}
