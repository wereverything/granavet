import { LuDog } from "react-icons/lu";

export default function Services({ title, subtitle }) {
  return (
    <div
      className="py-6 px-2 flex flex-col gap-4 items-center justify-center border-[1px] border-lime-200 rounded-xl dark:border-lime-400"
      data-aos="fade-up"
      data-aos-duration="2400"
    >
      <div id="icon" className="p-3 bg-lime-200 rounded-full text-lime-600 dark:text-lime-100 dark:bg-lime-600">
        <LuDog />
      </div>
      <h3 id="title" className="font-semibold font-poppins text-lime-600 dark:text-lime-200 text-center">
        {title}
      </h3>
      <p
        id="subtitle"
        className="font-montserrat text-sm text-lime-500 dark:text-lime-100 text-center"
      >
        {subtitle}
      </p>
    </div>
  );
}
