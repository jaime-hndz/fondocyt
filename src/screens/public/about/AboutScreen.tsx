import { Article } from "@/components/layout/Article/Article";
import observatorio from "@/assets/img/observatorio.jpg";
import { ArticleContainer } from "@/components/layout/Article/ArticleContainer";
import { Sponsors } from "@/components/home/we/Sponsors";

export const AboutScreen = () => {
  return (
    <ArticleContainer>
      <Article title="¿Qué es el observatorio?">
        <div className="flex">
          <div className="flex flex-col gap-10">
            <div>
              Es un espacio de concertación política y social para promover el
              desarrollo municipal inclusivo y sostenible. Se estructura desde
              un espacio real asambleario integrado por organizaciones locales,
              instituciones privadas, dependencias del gobierno con presencia en
              el municipio y el ayuntamiento municipal.
            </div>

            <div>
              Incorporando este espacio una plataforma técnica-participativa
              digital que integra datos críticos, análisis geoespacial y
              mecanismos de gobernanza colaborativa siempre en crecimiento, para
              la toma de decisiones informadas en ordenamiento territorial y
              gestión de riesgos.
            </div>

            <div>
              Combina a futuro inteligencia artificial predictiva, sensores IoT
              y metodologías de co-creación ciudadana, priorizando tres ejes:
            </div>

            <div>
              <ul>
                <li>Ordenamiento territorial</li>
                <li>Gestión de Riesgos</li>
                <li>Participación ciudadana</li>
              </ul>
            </div>
          </div>
          <div className="w-400">
            <img src={observatorio} />
          </div>
        </div>
      </Article>
      <Article title="Participantes">
        <Sponsors />
      </Article>
    </ArticleContainer>
  );
};
