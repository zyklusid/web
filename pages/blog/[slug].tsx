import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import MainLayout from "../../components/templates/Main";
import { blogAPIKey, blogUrl } from "../../utils/api";
import { DateIndo } from "../../utils/date";

export const getServerSideProps: GetServerSideProps = async (context) => {
    let data = null
    try {
        const res = await axios.get(blogUrl + 'content/posts/slug/' + context.params?.slug, {
            params: {
                key: blogAPIKey,
                include: ['authors', 'tags'],
            }
        })

        if (res) {
            data = res.data
        }
    } catch (e) {
        console.log(e)
    }

    return {
        props: {
            data,
        }
    }
}

export default function BlogPost({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <MainLayout>
            <div className="pt-28 lg:px-20 md:px-5 px-2 mb-10">
                {data ? (

                    <div className="grid md:grid-cols-4">
                        <div className="sm:block hidden">

                        </div>
                        <div className="col-span-2 col-end-4">
                            <div className="mb-3">
                                <div className="mb-2">
                                    <div className="w-full flex gap-2 justify-end mb-3">
                                        {data.posts[0].tags.map((tag: any, idx: number) => (
                                            <span className="bg-green-200 text-xs text-green-700 px-2 rounded-full" key={idx}>{tag.name}</span>
                                        ))}
                                    </div>
                                </div>
                                <h1 className="md:text-4xl text-2xl font-bold">Sebuah artikel yang bisa dibaca</h1>
                                <div className="flex gap-4 items-center mb-8">
                                    {data.posts[0].authors[0].profile_image ? (
                                        <div className="rounded-full h-8 w-8">
                                            <div className="image-container">
                                                <Image src={data.posts[0].authors[0].profile_image} layout="fill" className="image rounded" alt="gambar" />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="rounded-full h-8 w-8 bg-gray-400 flex items-center align-center">
                                            <FontAwesomeIcon icon={faUser} className="text-center mx-auto text-gray-500" />
                                        </div>
                                    )}
                                    <div>
                                        <p className="text-sm font-bold">{data.posts[0].authors[0].name}</p>
                                        <p className="text-sm">{DateIndo(new Date(data.posts[0].published_at))}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="image-container mb-4">
                                <Image src={data.posts[0].feature_image} layout="fill" className="image rounded" alt="gambar" />
                            </div>
                            <div className="text-lg">
                                <div className="space-y-4 blog" dangerouslySetInnerHTML={{ __html: data.posts[0].html }} />
                            </div>
                        </div>
                    </div>
                ) : (
                    <h1 className="text-2xl font-bold">Artikel tidak ditemukan</h1>
                )}
            </div>
        </MainLayout>
    )
}