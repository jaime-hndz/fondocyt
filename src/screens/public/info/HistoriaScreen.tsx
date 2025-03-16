import { Article } from "@/components/layout/Article/Article";
import { ArticleContainer } from "@/components/layout/Article/ArticleContainer";
import haina from "@/assets/img/haina1.png"

export const HistoriaScreen = () => {
  return (
    <ArticleContainer>
      <Article title="Historia">
        <div className="lg:flex gap-10">
          <div className="lg:w-1/3 ">

          <img src={haina}  />
          </div>
          <div className="text-xl text-justify flex flex-col gap-5 lg:w-2/3">
          <p>
          En Bajos de Haina se produce más del 50% de la electricidad del país,
          también está la única refinería del país. Entre los años 1960 y 1970
          Bajos de Haina tenía la categoría de distrito municipal perteneciente
          a la provincia de San Cristóbal. Bajos de Haina fue elevada a la
          categoría de municipio en 1981 junto a Yaguate y Cambita Garabitos que
          anteriormente era sección del municipio de San Cristóbal se convirtió
          en Distrito Municipal.
        </p>
        <p>
          Bajos de Haina posee la categoría de municipio con dos secciones
          rurales, La Pared y El Carril, cinco parajes y pertenece a la
          provincia San Cristóbal. Desde los cerros de Paraíso de Dios las
          chimeneas delatan un complejo industrial que se levanta imponente en
          las proximidades del mar Caribe dominicano. Una empresa tras otra,
          como en hileras, hasta sobrepasar el centenar.
        </p>
        <p>
          Según estudios, la constelación de empresas, que fueron instaladas sin
          observar reglas ambientales, es la responsable de que Bajos de Haina
          esté catalogado como una de las diez localidades más contaminadas del
          mundo, según el Instituto Blacksmith, con sede en Nueva York. Paraíso
          de Dios es sólo un barrio de Bajos de Haina, un municipio a unos 20
          kilómetros al oeste de Santo Domingo, donde por 20 años operó una
          planta de reciclaje de baterías de automóviles, trasladada a otro
          lugar hace siete años, pero cuyos desechos continúan contaminando a
          niños y adultos.
        </p>
        <p>
          Bajos de Haina alberga a más de 100 industrias de manufacturas,
          químicos, productos farmacéuticos, artículos metalúrgicos, además de
          otras generadoras de electricidad, así como la Refinería Dominicana de
          Petróleo.
        </p>
        <p>
          Aquí también se encuentra el puerto más importante del país, que en
          2002 registró operaciones de mercancías de 10,4 millones de toneladas,
          alrededor de 65 por ciento del movimiento total de República
          Dominicana.
        </p>
          </div>
        </div>

      </Article>
    </ArticleContainer>
  );
};
