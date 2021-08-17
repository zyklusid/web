type Props = {
    title?: string,
    siteName?: string,
    url?: string,
    image?: string | any,
    description?: string
}

export default function OpenGraph({ title, image, siteName, description, url }: Props) {
    return (
        <>
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={siteName} key="ogsitename" />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={image} />
            <meta property="og:description" content={description} key="ogdesc" />
        </>
    )
}