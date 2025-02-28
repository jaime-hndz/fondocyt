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
import ley606 from '@/assets/pdf/Ley-6-06.pdf';
import ley12601 from '@/assets/pdf/Ley-126-01.pdf';
import ley20004 from '@/assets/pdf/Ley-200-04.pdf';
import ley42306 from '@/assets/pdf/Ley-423-06.pdf';
import ley49806 from '@/assets/pdf/Ley-498-06.pdf';
import ley56705 from '@/assets/pdf/Ley-567-05.pdf';
import ley8279 from '@/assets/pdf/Ley-No.-82-79.pdf';
import ley48108 from '@/assets/pdf/Ley-No.-481-08.pdf';
import ley507 from '@/assets/pdf/Ley-No.-5-07.pdf';
import ley1004 from '@/assets/pdf/Ley-No.-10-04.pdf';
import ley1007 from '@/assets/pdf/Ley-No.-10-07.pdf';
import ley1307 from '@/assets/pdf/Ley-No.-13-07.pdf';
import ley4108 from '@/assets/pdf/Ley-No.-41-08.pdf';
import ley34006y44906 from '@/assets/pdf/Ley-No.-340-06-y-449-06.pdf';

const items = [
  {
    id: 1,
    title: "Ley No. 41-08, de función pública y reglamentación",
    date: "22 January, 2018",
    size: "1.50MB",
    pdf: ley4108
  },
  {
    id: 2,
    title: "Ley 481-08, general de archivos y reglamentación",
    date: "22 January, 2018",
    size: "861.35KB",
    pdf: ley48108
  },
  {
    id: 3,
    title: "Ley No. 10-07, que instituye el sistema nacional de control",
    date: "22 January, 2018",
    size: "43.75KB",
    pdf: ley1007
  },
  {
    id: 4,
    title: "Ley No. 13-07, sobre el Tribunal Superior Administrativo",
    date: "22 January, 2018",
    size: "81.52KB",
    pdf: ley1307
  },
  {
    id: 5,
    title: "Ley No. 5-07, que crea el sistema integrado de administración",
    date: "22 January, 2018",
    size: "816.52KB",
    pdf: ley507
  },
  {
    id: 6,
    title: "Ley 498-06, de planificación e inversión pública",
    date: "22 January, 2018",
    size: "1.38MB",
    pdf: ley49806
  },
  {
    id: 7,
    title: "Ley No. 340-06 y 449-06, sobre compras y contrataciones de",
    date: "22 January, 2018",
    size: "182.85KB",
    pdf: ley34006y44906
  },
  {
    id: 8,
    title: "Ley 6-06, de crédito público",
    date: "22 January, 2018",
    size: "816.47KB",
    pdf: ley606
  },
  {
    id: 9,
    title: "Ley 423-06, orgánica de presupuesto para el sector público",
    date: "22 January, 2018",
    size: "1.22MB",
    pdf: ley42306
  },
  {
    id: 10,
    title: "Ley 10-04, de la Cámara de Cuentas de la República",
    date: "22 January, 2018",
    size: "816.45KB",
    pdf: ley1004
  },
  {
    id: 11,
    title: "Ley 567-05, de Tesorería Nacional",
    date: "22 January, 2018",
    size: "81.63KB",
    pdf: ley56705
  },
  {
    id: 12,
    title: "Ley 126-01, que crea la Dirección General de Contabilidad",
    date: "22 January, 2018",
    size: "43.75KB",
    pdf: ley12601
  },
  {
    id: 13,
    title: "Ley 200-04, sobre libre acceso a la información pública",
    date: "22 January, 2018",
    size: "81.52KB",
    pdf: ley20004
  },
  {
    id: 14,
    title: "Ley No. 82-79, sobre declaración jurada de bienes",
    date: "22 January, 2018",
    size: "43.75KB",
    pdf: ley8279
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
                  {filteredItems.map((item) => (
                    <TableRow key={item.id}>
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
