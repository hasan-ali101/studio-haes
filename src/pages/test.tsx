import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { useRef } from "react";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
// import imageUrlBuilder from "@sanity/image-url";
// import Image from "next/image";

const PROJECTS_QUERY = `*[
  _type == "project"
]|order(publishedAt desc)[0...12]{ title, summary, description,"videoUrl": video.asset->url}`;

export default function IndexPage({ posts }: { posts: SanityDocument[] }) {
  const { projectId, dataset } = client.config();

  const vidRef = useRef<HTMLVideoElement>(null);
  const handlePauseVideo = () => {
    vidRef.current?.pause();
  };

  // const urlFor = (source: SanityImageSource) =>
  //   projectId && dataset
  //     ? imageUrlBuilder({ projectId, dataset }).image(source)
  //     : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Posts</h1>
      <ul className="flex flex-col gap-y-4">
        {posts.map((post) => (
          <li key={post._id}>
            <h2 className="text-xl font-semibold">{post.title}</h2>

            <video className="h-40 w-80" ref={vidRef} autoPlay muted>
              <source src={post.videoUrl} type="video/mp4" />
            </video>

            {/* <Image
              src={post.image && urlFor(post.image)?.url()}
              alt={post.title}
              className="aspect-video rounded-xl"
              width="550"
              height="310"
            /> */}
          </li>
        ))}
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch<SanityDocument[]>(PROJECTS_QUERY, {});

  return {
    props: {
      posts,
    },
  };
}
