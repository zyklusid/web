import axios from "axios";
import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from 'next-sitemap'
import { blogAPIKey, blogUrl } from "../../utils/api";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const res = await axios.get(blogUrl + 'content/posts/', {
        params: {
            key: blogAPIKey,
            include: 'slug',
            limit: 'all',
        }
    })

    const posts = res.data.posts

    const fields: ISitemapField[ ] = posts.map((post: any) => ({loc: `https://www.zyklus.id/blog/${post.slug}`, lastmod: new Date().toISOString()  }))

    // console.log(posts)

    return getServerSideSitemap(ctx, fields)
}
 
export default function SiteMap() {}