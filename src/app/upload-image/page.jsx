"use client";

import { Header } from "@/components/ui/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Bounce, toast } from "react-toastify";


export default function UploadImage() {

    const [inputValue, setInputValue] = useState({
        title: "",
        location: "",
        description: ""
    });

    const handleOnChangeInput = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    };

    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("");

    const [tag, setTag] = useState({ title: "" });
    const [tags, setTags] = useState([]);
    const [isClient, setIsClient] = useState(false);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            setImage(file);
        }
    };
    const handleOnClick = () => {

        if (tags.length >= 5) {
            toast.info("Ya no se pueden agregar más tags");
            return;
        }

        setTags([...tags, tag.title]);
        setTag({ title: "" });
    };

    const handleChangeInputTags = (event) => {
        setTag({ title: event.target.value });
    };

    const uploadImage = async (imageFile) => {
        if (!imageFile) {
            toast.error("Debes seleccionar una imagen antes de subir.");
            return;
        }

        const formData = new FormData();
        formData.append("file", imageFile);
        formData.append("title", inputValue.title);
        formData.append("description", inputValue.description);
        formData.append("user_id", user?.id);
        formData.append("tags", JSON.stringify(tags));
        formData.append("location", inputValue.location);

        try {
            const res = await axios.post(
                process.env.NEXT_PUBLIC_API_URL + "/api/images/upload",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success(`${res.data.message}`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });

            setImage(null);
            setInputValue({
                title: "",
                location: "",
            });
            setTags([]);
        } catch (err) {
            toast.error(`Error al subir la imagen`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            console.error(
                "Error al subir la imagen:",
                err.response?.data || err.message
            );
        }
    };

    const handleOnSubmit = (event) => {
        event.preventDefault();
        uploadImage(image);
    };

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <Header />


            <main className="w-full my-14">
                <form
                    className="bg-white/10 w-[60%] mx-auto p-10 border rounded-4xl"
                    method="post"
                    onSubmit={handleOnSubmit}
                >
                    <div className="flex flex-col md:flex-row justify-between gap-20">

                        {/* COLUMNA IZQUIERDA */}
                        <div className="flex flex-col items-center w-full md:w-[420px]">

                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                required
                                className="border text-center border-dashed border-white text-white cursor-pointer p-4 w-full"
                            />

                            {isClient && image && typeof image === "object" && (
                                <div className="mt-6 w-full flex flex-col items-center gap-2">
                                    <p className="text-lg text-white">Vista previa:</p>

                                    <div className="w-[400px] h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="Vista previa"
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col gap-6 flex-1">

                            <div className="flex flex-col gap-1">
                                <label htmlFor="title" className="font-bold text-white">
                                    Titulo
                                </label>
                                <input
                                    className="outline-none p-1.5 rounded-md border bg-teal-400/10 text-white"
                                    type="text"
                                    placeholder="Enter title"
                                    id="title"
                                    onChange={handleOnChangeInput}
                                    value={inputValue.title}
                                    name="title"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-3">
                                <label htmlFor="tags" className="font-bold text-white">
                                    Etiquetas
                                </label>

                                <input
                                    value={tag.title}
                                    onChange={handleChangeInputTags}
                                    className="outline-none p-1.5 rounded-md border bg-teal-400/10 text-white"
                                    type="text"
                                    placeholder="Enter tags"
                                    id="tags"
                                />

                                <div className="flex justify-between items-center">

                                    <div className="flex gap-3 items-center flex-wrap">
                                        {tags.map((e, index) => (
                                            <div
                                                key={index}
                                                className="bg-neutral-100/10 px-2 py-1 rounded-md text-white text-center"
                                            >
                                                {e}
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        type="button"
                                        className="text-teal-100 cursor-pointer"
                                        onClick={handleOnClick}
                                    >
                                        Agregar
                                    </button>

                                </div>
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="location" className="font-bold text-white">
                                    Ubicación
                                </label>
                                <input
                                    className="outline-none p-1.5 rounded-md border bg-teal-400/10 text-white"
                                    type="text"
                                    placeholder="Enter location"
                                    id="location"
                                    name="location"
                                    value={inputValue.location}
                                    onChange={handleOnChangeInput}
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="font-bold text-white">
                                    Descripción
                                </label>
                                <textarea
                                    className="outline-none p-2 rounded-md border bg-teal-400/10 text-white min-h-[120px]"
                                    placeholder="Escribe aquí tu descripción"
                                    id="description"
                                    onChange={handleOnChangeInput}
                                    value={inputValue.description}
                                    name="description"
                                    required
                                />
                            </div>

                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="w-full md:w-[50%] text-white border border-blue-500 hover:bg-blue-600 p-2 rounded-3xl cursor-pointer transition"
                                >
                                    Subir Imagen
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </main>
        </>
    );
}
