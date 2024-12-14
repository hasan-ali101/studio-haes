import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, image, body}`;

const options = { next: { revalidate: 30 } };

export default function IndexPage({ posts }: { posts: SanityDocument[] }) {
  const { projectId, dataset } = client.config();

  const urlFor = (source: SanityImageSource) =>
    projectId && dataset
      ? imageUrlBuilder({ projectId, dataset }).image(source)
      : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
            <Image
              src={post.image && urlFor(post.image)?.url()}
              alt={post.title}
              className="aspect-video rounded-xl"
              width="550"
              height="310"
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return {
    props: {
      posts,
    },
  };
}
