import { ArticleContainer } from "@/components/layout/Article/ArticleContainer";
import { Article } from "@/components/layout/Article/Article";
import { useState } from "react";
import {
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import resolucion636797921635056679 from '@/assets/pdf/normativa/normativa_haina/636797921635056679-Resolucin-del-Ayuntamiento-Municipal-Haina.pdf';
import ayuntamientoBajosHainaOrdenanza12017 from '@/assets/pdf/normativa/normativa_haina/Ayuntamiento de Bajos de Haina - Ordenanza No. 1-2017.pdf';
import ayuntamientoMunicipalHainaResolución072006 from '@/assets/pdf/normativa/normativa_haina/Ayuntamiento Municipal de Haina - Resolución No. 07-2006.pdf';
import planMunicipalHaina from '@/assets/pdf/normativa/normativa_haina/Plan Municipal Haina.pdf';
import congresoNacional1 from '@/assets/pdf/normativa/Congreso Nacional República Dominicana - 1963 - Ley No. 6232 de Planificación Urbana.pdf';
import congresoNacional2 from '@/assets/pdf/normativa/Congreso Nacional República Dominicana - 2002 - Ley 368-22 de Ordenamiento Territorial, Uso de Suelo y Asentamientos Humanos.pdf';
import decreto13414 from '@/assets/pdf/normativa/decreto_134-14.pdf';
import fernandezDado from '@/assets/pdf/normativa/Fernández - DADO en Santo Domingo de Guzmán, Distrito Nacional.pdf';
import leyHA_DADO from '@/assets/pdf/normativa/Ley - HA DADO LA SIGUIENTE LEY DE PLANIFICACIÓN E INVER.pdf';
import ley14702 from '@/assets/pdf/normativa/Ley_147-02_Sobre_Gestion_de_Riesgos.pdf';
import ley17607 from '@/assets/pdf/normativa/Ley_176-07.pdf';
import ley49606 from '@/assets/pdf/normativa/Ley_496_06_sobre_SEEPYD.pdf';
import ley55 from '@/assets/pdf/normativa/ley-55-que-crea-el-consejo-nacional-de-desarrollo.pdf';
import leyEstrategia from '@/assets/pdf/normativa/Ley-estrategia-nacional-de-desarrollo.pdf';
import ordenanza12021 from '@/assets/pdf/normativa/ordenanza 1-2021.pdf';
import presidenciaRD from '@/assets/pdf/normativa/Presidencia de la República Dominicana - 2007 - Dec. No. 493-07 que aprueba el Reglamento de Aplic.pdf';

const items = [
  {
    title: "Resolución del ayuntamiento municipal de Haina",
    date: "17/12/2018",
    size: "2MB",
    pdf: resolucion636797921635056679
  },
  {
    title: "Ayuntamiento de Bajos de Haina Ordenanza No. 1-2017",
    date: "19/4/2024",
    size: "1.25MB",
    pdf: ayuntamientoBajosHainaOrdenanza12017
  },
  {
    title: "Ayuntamiento Municipal de Haina - Resolución No. 07-2006",
    date: "19/4/2024",
    size: "0.3MB",
    pdf: ayuntamientoMunicipalHainaResolución072006
  },
  {
    title: "Plan Municipal Haina",
    date: "2012",
    size: "0.6MB",
    pdf: planMunicipalHaina
  },
  {
    title: "Congreso Nacional República Dominicana - 1963 - Ley No. 6232",
    date: "26/6/06",
    size: "37KB",
    pdf: congresoNacional1
  },
  {
    title: "Congreso Nacional República Dominicana - 2002 - Ley 363-22",
    date: "29/9/23",
    size: "0.3MB",
    pdf: congresoNacional2
  },
  {
    title: "Decreto 134-14",
    date: "31/10/14",
    size: "12MB",
    pdf: decreto13414
  },
  {
    title: "Fernández DADO en Santo Domingo",
    date: "15/11/05",
    size: "71KB",
    pdf: fernandezDado
  },
  {
    title: "Ley - HA DADO LA SIGUIENTE LEY",
    date: "22/5/13",
    size: "0.2MB",
    pdf: leyHA_DADO
  },
  {
    title: "Ley 147-02 Sobre Gestión de Riesgo",
    date: "26/3/08",
    size: "78KB",
    pdf: ley14702
  },
  {
    title: "Ley 176-07",
    date: "21/8/08",
    size: "8MB",
    pdf: ley17607
  },
  {
    title: "Ley 496-06 sobre SEEPYD",
    date: "2/1/07",
    size: "0.1MB",
    pdf: ley49606
  },
  {
    title: "Ley 55-que crea el consejo nacional",
    date: "10/9/15",
    size: "0.19MB",
    pdf: ley55
  },
  {
    title: "Ley estrategia nacional de desarrollo",
    date: "19/4/24",
    size: "1.20MB",
    pdf: leyEstrategia
  },
  {
    title: "Ordenanza 1-2021",
    date: "7/5/14",
    size: "2MB",
    pdf: ordenanza12021
  },
  {
    title: "Presidencia de la República Dominicana",
    date: "16/11/09",
    size: "0.2MB",
    pdf: presidenciaRD
  }
];

export const NormativaScreen = () => {
  const [search, setSearch] = useState("");

  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ArticleContainer>
      <Article title="Normativa">
        <div className="min-h-150">
          <div style={{ padding: 20 }}>
            <TextField
              label="Buscar"
              variant="outlined"
              fullWidth
              onChange={(e) => setSearch(e.target.value)}
              size="small"
              style={{ marginBottom: 40 }}
            />
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Título</TableCell>
                    <TableCell>Fecha</TableCell>
                    <TableCell>Peso</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredItems.map((item, i) => (
                    <TableRow key={i}>
                      <TableCell>{item.title}</TableCell>
                      <TableCell>{item.date}</TableCell>
                      <TableCell>{item.size}</TableCell>
                      <TableCell>
                        {" "}
                        <button className={`btn`}>
                          <a
                            href={item.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            download={`${item.title}.pdf`}
                            className="text-blue-500 underline"
                          >
                            Descargar
                          </a>
                        </button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </Article>
    </ArticleContainer>
  );
};
