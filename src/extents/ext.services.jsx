import Services from "../components/copt.services"

export default function ExtServices() {
    return (
        <div id="services" className="grid grid-cols-1 gap-4 md:grid-cols-4 mt-20 phones-max:grid-cols-2 phones-max:mt-10">
            <Services
                title="Consultas Medicas"
                subtitle="Brindamos consultas medicas, para que estes seguro, que tus mascotas
            estarán bien."
            />
            <Services
                title="Vacunaciones"
                subtitle="Ten en cuenta que las vacunas son indispensable, nosotros te ofrecemos ese servicio."
            />
            <Services
                title="Farmacia"
                subtitle="¿Necesitas algún medicamento para tu mascota? Te ofrecemos lo que buscas y más."
            />
            <Services
                title="Laboratorio"
                subtitle="¿Te preocupas por tu mascota? No dejes de preocuparte, pero ten en cuenta que con nosotros estara en buenas manos."
            />
            <Services
                title="Grooming"
                subtitle="¿Quieres que tu mascota luzca mejor? !Nosotros te lo haremos lucir espectacular¡"
            />
            <Services
                title="Accesorios"
                subtitle="¿Buscas juguetes, y otros accesorios para tu mascota? Vamos, que tenemos tambien¡"
            />
            <Services
                title="Cirugías"
                subtitle="Servicios de cirugías, que tenemos tambien¡ Tu mascota se sentira mejor si nos los dejas en nuestras manos." />
            <Services
                title="Cuenta con nosotros"
                subtitle="Nosotros te brindaremos calidad, y buenos servicios. Como se merecen ellos." />
        </div>
    )
}