import ExtServices from "./extents/ext.services";
import NavBar from "./extents/ext.navbar";
import DogSvg from "./svg/datos.dog";
import ExtSplide from "./extents/ext.comments";

import { BiPhone } from "react-icons/bi"
import { FiMapPin } from "react-icons/fi"

export default function App() {

  const images = [
    {
      id: "001",
      name: "doger_image",
      linked: "https://i.ibb.co/fvpWcD4/ideren-001.jpg"
    },
    {
      id: "002",
      name: "doger_image",
      linked: "https://i.ibb.co/Ycmft7g/ideren-002.jpg"
    },
    {
      id: "003",
      name: "cater_image",
      linked: "https://i.ibb.co/Xyk8hCS/ideren-003.jpg"
    },
    {
      id: "004",
      name: "doger_image",
      linked: "https://i.ibb.co/HFsk8Tt/ideren-004.jpg"
    },
    {
      id: "005",
      name: "cater_image",
      linked: "https://i.ibb.co/qkgwVZC/ideren-005.jpg"
    }
  ]

  return (
    <main className="w-full h-full">
      <header id="navbar-extent-container" className="w-screen h-auto">
        <NavBar />
      </header>

      {/* MENSAJE DE BIENVENIDA */}

      <section
        id="home"
        className="w-full h-auto flex flex-col justify-center items-center gap-6 mt-12 px-4 text-center relative md:grid md:grid-cols-2 md:items-start"
      >
        <div id="content" className="md:h-[100%] flex flex-col gap-5 md:text-left">
          <h1
            id="title"
            className="text-2xl text-lime-600 font-semibold font-poppins dark:text-lime-200 md:text-4xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            ¿Estas buscando una veterinaria que se adapte a todas las necesidades
            del que amas?
          </h1>
          <p
            id="subtitle"
            className="font-montserrat text-sm text-lime-500 dark:text-lime-100 md:w-[60%]"
            data-aos="fade-up"
            data-aos-duration="2300"
          >
            <b>GranaVet</b> te ofrece muchas opciones para que puedas consentir, y
            mejorar la salud de tus mascotas.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <DogSvg />
          </div>
          <div
            id="start-to"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <a
              href="#quienes-somos"
              className="py-3 px-5 bg-lime-500 text-lime-100 rounded-xl cursor-pointer dark:bg-lime-100 dark:text-lime-500"
            >
              ¿Te parece si comenzamos?
            </a>
          </div>
        </div>
        <div id="images" className="hidden md:flex">
          <img src="https://ibb.co/QdSSzW6" alt="cris_image" className="rounded-lg" />
        </div>
      </section>

      {/* QUIENES SOMOS */}
      <section
        id="quienes-somos"
        className="mt-32 flex flex-col justify-center items-center px-4 phones-max:mt-20"
      >
        <h2
          id="title"
          className="uppercase font-montserrat font-normal text-lime-400 text-sm dark:text-lime-100"
        >
          Lo que ofrecemos
        </h2>
        <span className="text-xl font-semibold font-poppins text-lime-500 text-center dark:text-lime-200">
          ¿Quieres conocernos mejor?
        </span>
        <ExtServices />
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="mt-20 sm:px-10 ">
        <div id="titles" className="flex flex-col justify-center items-center text-center px-3">
          <h3 id="title"
            className="uppercase font-montserrat font-normal text-lime-400 text-sm dark:text-lime-100">CONFIAN EN NOSOTROS</h3>
          <span id="subtitle" className="text-xl font-semibold font-poppins text-lime-500 text-center dark:text-lime-200">
            Porque no te echas a leer y ves por tu cuenta!
          </span>
        </div>
        <ExtSplide />
        <div id="set-email" className="flex flex-col justify-center items-center">
          <h4 className="uppercase font-montserrat font-normal text-lime-400 text-sm dark:text-lime-100">¿Quieres comentarnos algo?</h4>
          <span className="text-xl font-semibold font-poppins text-lime-500 text-center dark:text-lime-200">Dinos que nos hace falta, que necesitamos mejorar o cuentanos tu experiencia</span>
          <div id="options" className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-5 [&>a]:py-3 [&>a]:px-4 [&>a]:rounded-xl [&>a]:font-poppins [&>a]:text-center [&>a]:font-semibold">
            <a href="" className="bg-lime-200 text-lime-600">Publicar un comentario</a>
            <a href="" className="bg-red-400 text-white">Eliminar un comentario</a>
          </div>
        </div>
      </section>

      {/* GALERIA DE FOTOS */}
      <section id="galery" className="mt-32 flex flex-col items-center justify-center px-4">
        <h5 className="uppercase font-montserrat font-normal text-lime-400 text-sm dark:text-lime-100">Nuestra galería</h5>
        <span className="text-xl font-semibold font-poppins text-lime-500 text-center dark:text-lime-200">Mira lo felices que son ¿Porqué tu mascota no lo seria tambien?</span>
        <div id="stock" className="mt-10 grid grid-cols-1 gap-4 [&>div>img]:rounded-xl phones-pro:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {
            images.map((image) => {
              return <div key={image}>
                <img src={image.linked} alt={image.name} />
              </div>
            })
          }
        </div>
      </section>

      {/* MAPA DE COMO LLEGAR */}
      <section id="mapper">

      </section>

      {/* CONTACTO */}
      <footer id="contact" className="mt-20 px-4">
        <h6 id="title" className="uppercase font-montserrat font-normal text-lime-400 text-sm dark:text-lime-100">GranaVet</h6>
        <span className="text-xl font-semibold font-poppins text-lime-500 text-center dark:text-lime-200">¿Necesitas contactarnos?</span>
        <div id="phone-numbers" className="flex flex-col gap-3 [&>span]:flex [&>span]:flex-row [&>span]:items-center [&>span]:gap-3 mt-7 text-lime-400 [&>span]:font-poppins [&>span]:text-sm dark:text-lime-100">
          <h6 className="font-montserrat text-sm">Hazlo por telefono</h6>
          <span id="number-one">
            <BiPhone />
            <a href="tel:22738743">2273 8743</a>
          </span>
          <span id="number-two">
            <BiPhone />
            <a href="tel:86664335">8666 4335</a>
          </span>
          <span id="number-three">
            <BiPhone />
            <a href="tel:40343370">4034 3370</a>
          </span>
        </div>
        <div id="direccion" className="flex flex-col gap-3 [&>span]:flex [&>span]:flex-row [&>span]:items-center [&>span]:gap-3 mt-7 text-lime-400 dark:text-lime-100 [&>span]:font-poppins [&>span]:text-sm">
          <h6 className="font-montserrat text-sm">Dirígete hacia nosotros</h6>
          <span id="number-one">
            <FiMapPin />
            <span>0000, San José, Granadilla</span>
          </span>
        </div>
        <div id="copyright" className="mt-20 uppercase font-montserrat font-normal text-lime-400 text-sm dark:text-lime-100 text-center">
          &copy;GranaVet - Derechos reservados 2023
        </div>
      </footer>
    </main >
  );
}
