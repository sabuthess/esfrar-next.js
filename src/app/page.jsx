// import Image from "next/image";
"use client"

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import { ImageCard } from "@/components/ui/ImageCard";
import { useFetchImages } from "@/hooks/useFetchImages";

export default function Home() {

  const { data, error } = useFetchImages()

  return (
    <>
      <Header />
      <section className="flex flex-col items-center my-10 mx-auto relative">
        <main className="w-4/5 column-1 sm:columns-2 md:columns-3 lg:columns-4 ">
          {data && data.map((image) => (
            <ImageCard
              key={image.id}
              id={image.id}
              url_photo={image.file_path} />
          ))}
        </main>

        <div className='m-4 w-4/5 flex flex-col gap-5 relative z-10 text-white'>
          <h3 className='font-bold text-xl sm:text-2xl '>
            Imágenes gratuitas que puedes buscar en Esfrar
          </h3>
          <p className='text-sm sm:text-base'>

            Esfrar es una comunidad vibrante de creativos que comparte imágenes libres de regalías.
            Todo el contenido es publicado por Esfar bajo la Licencia de Contenido, lo que garantiza su uso seguro sin necesidad de pedir permiso ni dar crédito al artista, incluso para ciertos fines comerciales.
          </p>
          <a
            href='#'
            className='text-center w-[80%] sm:w-[60%] md:w-[15%] lg:w-[30%] p-3 border border-blue-600 hover:bg-blue-600/40 text-white rounded-xl'>
            Conozca más sobre nuestra licencia
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
