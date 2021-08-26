import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Container from "../../components/atoms/Container";
import InternalLink from "../../components/atoms/InternalLink";
import OpenGraph from "../../components/atoms/OpenGraph";
import MainLayout from "../../components/templates/Main";
import { blogAPIKey, blogUrl } from "../../utils/api";
import { DateIndo } from "../../utils/date";

export default function Blog() {
    interface Data {
        posts: []
    }

    const [data, setData] = useState<Data>()

    useEffect(() => {
        axios.get(blogUrl + 'content/posts/', {
            params: {
                key: blogAPIKey,
                include: ['authors', 'tags'],
            }
        }).then(res => {
            setData(res.data)
        }).catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
            console.log(error.config);
        })
    })

    const blogCard = data && data?.posts.map((post: any) => {
        return (
            <InternalLink href={`/blog/${post.slug}`} key={post.id}>
                <div className="bg-white shadow-lg rounded h-full relative">
                    <div className="image-container">
                        <Image src={post.feature_image} layout="fill" className="image rounded" alt="gambar" />
                    </div>
                    <div className="p-4 mb-20">
                        <div className="w-full flex gap-2 justify-end mb-3">
                            {post.tags.map((tag: any, idx: number) => (
                                <span className="bg-green-200 text-xs text-green-700 px-2 rounded-full" key={idx}>{tag.name}</span>
                            ))}
                        </div>
                        <div className="mb-3">
                            <h1 className="text-lg font-bold">{post.title}</h1>
                        </div>
                        <p className="text-base">
                            {post.custom_excerpt}
                        </p>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 px-4 mb-2">
                        <div className="flex gap-4 items-center">
                            {post.authors[0].profile_image ? (
                                <div className="rounded-full h-8 w-8">
                                    <div className="image-container">
                                        <Image src={post.authors[0].profile_image} layout="fill" className="image rounded" alt="gambar" />
                                    </div>
                                </div>
                            ) : (
                                <div className="rounded-full h-8 w-8 bg-gray-400 flex items-center align-center">
                                    <FontAwesomeIcon icon={faUser} className="text-center mx-auto text-gray-500" />
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-bold">{post.authors[0].name}</p>
                                <p className="text-sm">{DateIndo(new Date(post.published_at))}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </InternalLink>
        )
    })

    return (
        <MainLayout >
            <Head>
                <title>Blog | Temukan artikel dan penawaran menarik dari Zyklus</title>
                <OpenGraph
                    title='Blog | Temukan artikel dan penawaran menarik dari Zyklus'
                    description='Berita seru, cerita mitra, dan promo terbaru. Baca Semua Artikel tentang Zyklus disini.'
                    url={`https://www.zyklus.id/blog/`}
                />
            </Head>
            <Container className="md:py-32 py-28">
                <h1 className="text-5xl font-bold">Ada apa di Zyklus?</h1>
                <p className="text-base">Berita seru, cerita mitra, dan promo terbaru. Baca Semua Artikel tentang Zyklus disini. </p>

                <div className="py-4">
                    <div className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1">
                        {blogCard || (<h1 className="text-2xl font-medium">Tidak ada artikel</h1>)}
                    </div>
                </div>
            </Container>
        </MainLayout>
    )
}