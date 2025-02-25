import { Article } from "@/components/layout/Article/Article";
import { ArticleContainer } from "@/components/layout/Article/ArticleContainer";
import haina1 from "@/assets/img/haina1.png";
import haina2 from "@/assets/img/haina2.png";
import haina3 from "@/assets/img/haina3.png";
import haina4 from "@/assets/img/haina4.png";

export const BajosHainaScreen = () => {
  return (
    <div>
      <ArticleContainer>
        <div className="flex gap-10 center align-middle">
          <div className="w-1/3 " >
            <img src={haina1} />
          </div >
          <div className="w-2/3">
            <div>
              El municipio de Bajos de Haina pertenece a la provincia de San
              Cristóbal, en la región sur de la República Dominicana. Se
              encuentra ubicado entre los 18º 25' N y 70º 01' W. Sus límites
              son: Mar Caribe al norte y al oeste; el Distrito Municipal de
              Nigua al sur y la ciudad de Santo Domingo al este, separada de
              ésta escasamente por el río Haina. Por la vía terrestre Bajos de
              Haina dista a unos 15 kilómetros de Santo Domingo. El municipio se
              encuentra localizado en la cuenca baja del Río Haina, que tiene
              una extensión de unos 86 kilómetros y que precisamente desemboca
              al mar caribe en los limites municipales que comparte con la
              ciudad de Santo Domingo.
            </div>
            <Article title="Descripción general de Municipio Bajos de Haina ">
              <p>
                Bajos de Haina se encuentra ubicado en el litoral sur de la
                República Dominicana. En el extremo sureste de la provincia San
                Cristóbal, demarcación a la que pertenece. Forma parte de la
                región sureste del país, específicamente a la subregión de
                Valdesia. El asentamiento se ubica en la cuenca baja oeste del
                río Haina, al suroeste del Municipio Santo Domingo Oeste, a unos
                10 kilómetros de la ciudad de San Cristóbal, entre los
                70°02'40'' de latitud norte y los 18o25’00” de latitud oeste.
              </p>
              <p>
                Los límites de Bajos de Haina son: Al norte la sección
                Manoguayabo del Municipio Santo Domingo Oeste, al sur el Mar
                Caribe, al este el Río Haina, (que lo separa del municipio Santo
                Domingo Oeste, de la provincia Santo Domingo) y al oeste el
                arroyo Itabo que lo separa del municipio de Nigua, de la
                cabecera de provincia San Cristóbal.
              </p>
              <p>
                El Municipio tiene una extensión de 39.9 km², su área urbana
                (Distrito municipal de Bajos de Haina) ocupa un 36% del área
                total, 14.4 km², mientras que su área rural (El Carril y La
                Pared) ocupa unos 25.5 km², un 64% de toda la superficie de la
                demarcación. (ONE, 2021)
              </p>
            </Article>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/3">
            <img src={haina2} />
            <span>
              Residuos sólidos arrojados a una de las cañadas de Bajos de Haina
            </span>
          </div>
          <div className="w-2/3">
            <Article title="Bajos de Haina. Datos relevantes">
              <p>
                De acuerdo con el Censo de 2022, el Municipio de Bajos de Haina
                contaba con una población estimada de 159.888 habitantes. Las
                mujeres constituían el 51% de la población. El 38% de sus
                hogares presentaba índice de calidad de vida 1 y 2, lo que
                indica un marcado nivel de pobreza entre la población
                (Vicepresidencia de la República, 2018). El 39% de la población
                corresponde a niños menores de cinco años, lo que sugiere un
                reto para optimizar los procesos de formación y una gran
                oportunidad de contar con una gran cantidad de residentes en
                edad de trabajar para el futuro. La población con educación
                universitaria o superior ascendía a más de 13.000 individuos
                (ONE, 2022), cifra proporcionalmente alta en comparación con la
                población de San Cristóbal, aspecto que evidencia un importante
                nivel de preparación y competencias potenciales entre los
                profesionales de Bajos de Haina.
              </p>
              <p>
                Un estudio desarrollado en 2023 demostró que, debido a la
                carencia de un ordenamiento territorial adecuado, las 42.133
                toneladas anuales de residuos sólidos generados por los
                habitantes de los 20 barrios de la zona urbana de Bajos de Haina
                se disponen a cielo abierto sin tratamiento alguno,de forma que
                liberan a la atmósfera más de 5.430 emisiones de CO2 por año
                (PCA, 2023). Lo anterior, aunado a la carencia de un drenaje
                pluvial controlado y canalizado, promueve la diseminación de
                enfermedades transmitidas por roedores e insectos, lo cual
                demuestra la elevada cantidad de pacientes atendidos en el
                hospital Barsequillo por infecciones agudas de vías
                respiratorias (superó los 1.528 pacientes en el primer trimestre
                de 2023).
              </p>
              <p>
                Según una investigación realizada a mediados de 2023 en 3.263
                viviendas de Bajos de Haina, solo el 6,5% de las edificaciones
                cuenta con servicio de acueducto; el 0,4% tiene pozo; el 4,6% de
                sus hogares paga por agua con camión cisterna; el 40,7% depende
                de agua de camión o procesada y el 59% compra agua embotellada
                (Arcoiris, 2023).
              </p>
              <p>
                De lo anterior, para mejorar la actual calidad de vida de la
                población, se podría sugerir la adecuada disposición de los
                residuos sólidos en los hogares, evitando arrojarlos a las
                cañadas. Al respecto, invitamos a los pobladores y visitantes a
                participar de nuestros foros, si está interesado ingrese aquí:
              </p>
            </Article>
          </div>
        </div>
        <div className="my-10 text-justify">
          <p>
            En 2022, en el municipio Bajos de Haina operaba un número
            considerable de empresas (5,430) que aportaban USD 440 millones
            anuales al país, lo que convirtió a Haina en el Primer Distrito
            Industrial de la República Dominicana. Sin embargo, solo 621 de
            estas empresas estaban registradas formalmente.
          </p>
          <p>
            El municipio también albergaba en ese mismo año dieciséis zonas
            francas con más de 200 industrias que exportaban bienes por valor de
            USD 237 millones a más de 40 países, y el puerto manejaba el 60% del
            comercio marítimo del país.
          </p>
          <p>
            Estas empresas también generan residuos sólidos urbanos que se
            disponen a cielo abierto y, sus aguas servidas, al igual que las de
            la población, son arrojadas al mar, de forma que se explica la
            carencia de un ecosistema marítimo saludable y diverso hasta cientos
            de metros de la línea costera. Al respecto, invitamos a los
            pobladores y visitantes a participar de nuestros foros, si está
            interesado ingrese aquí
          </p>
        </div>
        <div className="flex gap-10">
          <div className="w-1/2">
            <img className="w-full" src={haina3} />
            <span className="text-justify">
              Los corales del mar en inmediaciones hasta a más de tres
              kilómetros al este de la desembocadura del río Haina han sido
              cubiertos completamente por lodos y residuos sólidos urbanos. La
              imagen corresponde a la explanada abrasiva con los sedimentos
              aportados por el río Haina sobre los corales muertos (Fuente:
              Herrera, Betancourt y Alcolado, 2010).
            </span>
          </div>
          <div className="w-1/2 px-15">
            <img className="w-full" src={haina4} />
            <span className="text-justify">
              Estado del muelle luego de la lluvia presentada el día 22 de mayo
              de 2023 (Cortesía: Haina Inernational Terminals)
            </span>
          </div>
        </div>
      </ArticleContainer>
    </div>
  );
};
