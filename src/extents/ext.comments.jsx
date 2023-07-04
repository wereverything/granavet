import { Splide, SplideSlide } from "@splidejs/react-splide";
import Comments from "../components/copt.comments";

export default function ExtSplide() {
    const options = {
        perPage: 3,
        gap: '1rem',
        breakpoints: {
            800: { perPage: 1, gap: '1rem' },
        },
        arrows: false,
        autoplay: true,
        type: 'loop'
    }
    return (
        <Splide options={options}>
            <SplideSlide>
                <Comments name="Osvaldo H." descrip="Renovar mi recomendación en cuanto al agradecimiento que hago para los servicios post consulta donde facilitan profesionalmente los resultados para compartir con otras áreas paralelas de fisioterapia para especies menores ya que esto lo recomendaron para la mejoría del diagnóstico. Gracias al personal de apoyo y a los médicos veterinarios que actúan con pensamiento positivo y cuido a de los pacientes. Bendiciones y prosperidad en lo bien que hacen." />
            </SplideSlide>
            <SplideSlide>
                <Comments name="Diego Z" descrip="Muy buen servicio por parte del personal de atención y los doctores." />
            </SplideSlide>
            <SplideSlide>
                <Comments name="Irina C" descrip="El servicio de esta veterinaria es como ningún otro. Tiene un trato humano y ponen a los animalitos por encima de todo! Me han ayudado con mis perritos y sé que ahí siempre reciben el mejor de los tratos. Dan la milla extra para asegurar que nuestras mascotas tengan la mejor salud y bienestar. No cambiaría esta veterinaria por ninguna!" />
            </SplideSlide>
        </Splide>
    )
}