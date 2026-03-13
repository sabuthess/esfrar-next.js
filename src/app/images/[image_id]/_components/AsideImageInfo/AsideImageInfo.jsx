"use client"

import { HeartIcon } from "@/components/icons/HeartIcon";
import { ImageDownloader } from "@/components/ImageDownloader/ImageDownloader";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export const AsideImageInfo = ({ user_id, user_name, image_id, image_url, image_title }) => {

    const isAuthenticated = true;
    const [hasLiked, setHasLiked] = useState(false);

    const handleClick = () => {
        setHasLiked(!hasLiked)
    };


    return (
        <aside className="sticky top-6 rounded-3xl py-5 shadow-2xl h-[400px] w-[300px] bg-white/10 text-white">
            <div className="p-5 flex flex-col gap-5">

                <article className="flex flex-col gap-4 w-full justify-center">
                    <div className="flex gap-3 justify-between">
                        <div className="flex items-center justify-center">
                            <Image
                                src={`https://robohash.org/${user_name}`}
                                alt=""
                                className=" 
                            rounded-full object-cover"
                                width={50}
                                height={50}
                            />
                            <div >
                                <Link href={`/users/${user_id}`}>
                                    <h4>Pepelian</h4>
                                </Link>
                                <p className="font-light text-sm text-gray-300">6 followers</p>
                            </div>
                        </div>
                        <button className="hover:bg-neutral-700 py-2 cursor-pointer px-4   text-sm rounded-xl">Seguir</button>
                    </div>

                </article>
                <hr className="border border-neutral-500" />

                <div className="flex gap-2">

                    <button
                        className="cursor-pointer outline outline-neutral-300 hover:outline-teal-600 py-2 px-4 rounded-xl"
                        title={hasLiked ? "No me gusta" : "Me gusta"}
                        onClick={handleClick}
                    // disabled={likeLoading}
                    >
                        {hasLiked ? <HeartIcon className="text-red-500" fill="red" /> : <HeartIcon className="text-white" />}
                    </button>
                    <button
                        className="cursor-pointer outline outline-neutral-300 hover:outline-teal-600 py-2 px-4 rounded-xl"
                        title={hasLiked ? "No me gusta" : "Me gusta"}
                        onClick={handleClick}
                    // disabled={likeLoading}
                    >
                        {hasLiked ? <HeartIcon className="text-red-500" fill="red" /> : <HeartIcon className="text-white" />}
                    </button>
                    <button
                        className="cursor-pointer outline outline-neutral-300 hover:outline-teal-600 py-2 px-4 rounded-xl"
                        title={hasLiked ? "No me gusta" : "Me gusta"}
                        onClick={handleClick}
                    // disabled={likeLoading}
                    >
                        {hasLiked ? <HeartIcon className="text-red-500" fill="red" /> : <HeartIcon className="text-white" />}
                    </button>
                    <button
                        className="cursor-pointer outline outline-neutral-300 hover:outline-teal-600 py-2 px-4 rounded-xl"
                        title={hasLiked ? "No me gusta" : "Me gusta"}
                        onClick={handleClick}
                    // disabled={likeLoading}
                    >
                        {hasLiked ? <HeartIcon className="text-red-500" fill="red" /> : <HeartIcon className="text-white" />}
                    </button>


                </div>
                <hr className="border border-neutral-500" />
                <div>
                    <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio sapiente voluptatibus, alias facilis odio, suscipit, error vero maxime laboriosam aliquid incidunt molestias ullam nisi modi magni temporibus possimus ab veniam?    </p>
                </div>
            </div>
            <ImageDownloader image_url={image_url} file_name={image_title} />
        </aside >
    );
};
