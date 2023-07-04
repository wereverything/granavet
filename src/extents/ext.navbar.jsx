function NavBar() {
  return (
    <nav className="w-screen h-full p-4 bg-lime-100 dark:bg-slate-800 flex items-center">
      <div className="w-full h-10 flex items-center justify-start text-2xl text-lime-500 font-semibold font-poppins dark:text-lime-200">
        GranaVet
      </div>
      <ul id="navegation-ul" className="hidden md:flex flex-row gap-10 text-lg text-lime-500 dark:text-lime-200 font-poppins font-semibold">
        <li id="li-nosotros">
          <a href="#quienes-somos">Conocenos</a>
        </li>
        <li id="li-testimonios">
          <a href="#testimonios">Testimonios</a>
        </li>
        <li id="li-galeria">
          <a href="#galery">Galería</a>
        </li>
        <li id="li-contacto">
          <a href="#contact">Contactanos</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
