"use client"

import { Footer } from "@/components/ui/Footer";
import { Header } from "@/components/ui/Header";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AsideImageInfo } from "./_components/AsideImageInfo/AsideImageInfo";
import { useAsync } from "@/hooks/useAsync";
import { useState } from "react";
import { useFetchAndLoad } from "@/hooks/useFetchAndLoad";
import { getImageById } from "@/services/public.services";
import { useFetchUserById } from "@/hooks/useFindUserById";


export default function ImagePage() {

    const params = useParams()
    const { image_id } = params
    const [image, setImage] = useState()
    const { loading, callEndPoint } = useFetchAndLoad()

    // const { data, error, loading } = useFetchSingleImage(image_id)

    const user_id = image?.userId;
    const { userFound, errorUserFound } = useFetchUserById(user_id)
    const userId = userFound?.id;


    const getApiData = async () => await callEndPoint(getImageById(image_id))

    const adaptImage = (data) => setImage(data)

    useAsync(getApiData, adaptImage, () => { }, [])

    console.log(image)

    return (
        <>
            <Header />
            {
                loading ? <div className="h-screen flex items-center">
                    <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

                </div> : <main className='my-20 w-4/5 h-[700px] mx-auto flex flex-col lg:flex-row justify-evenly lg:justify-around items-center gap-10 flex-wrap'>
                    <div className='w-3/5 h-full mx-auto flex justify-center'>

                        <Image
                            src={image?.file_path}
                            alt={image?.title}
                            width={400}
                            height={400}
                            className="rounded-2xl object-contain"
                        />



                    </div>
                    <AsideImageInfo user_id={userId}
                        user_name={userFound?.first_name}
                        last_name={userFound?.last_name}
                        image_id={image_id}
                        image_url={image?.file_path}
                        image_title={image?.title} />

                </main>
            }

            <Footer />
        </>
    )

}
