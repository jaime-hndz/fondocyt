import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { EffectFade, Pagination, Navigation } from "swiper/modules";
import { Button } from "@mui/material";
import { Link } from "react-router";
import img from "@/assets/img/geo.svg";

export const Slider = () => {
  const slides = [
    {
      title: "Ordenamiento Territorial",
      route: "",
      style: "bg-[url('/src/assets/background/haina.jpg')] bg-no-repeat bg-cover bg-center",
      element: (
        <>
          <div className="text-5xl font-bold mb-12 text-white">
            Ordenamiento Territorial
          </div>
          <Link to={"/ordenamiento_territorial"}>
            <Button variant="contained">Ver herramienta</Button>
          </Link>
        </>
      ),
    },
    {
      title: "Slide 2",
      route: "",
      style: "radial",
      element: (
        <div className=" w-4/5 h-150 flex gap-10 p-10 text-white ">
          <div className="w-1/2">
            <img src={img} />
          </div>
          <div className="w-1/2 flex flex-col gap-10 justify-center ">
            <div className="text-5xl font-bold ">Geovisor</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus vero pariatur aliquid esse tempora tempore quas
              laboriosam quia culpa consectetur! Optio, eveniet provident
              numquam sint aperiam accusamus hic eos temporibus?
            </div>
            <div>
              <Link to={"/ordenamiento_territorial"}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#F50057" }}
                >
                  Ver herramienta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade, Pagination, Navigation]}
        className="slider"
      >
        {slides.map((c, i) => (
          <SwiperSlide key={i}>
            <div className={`  ${c.style}`}>
              <div className="min-h-[calc(100vh-6rem)] bg-black/50  flex flex-col gap-10 items-center justify-center">
                {c.element}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
