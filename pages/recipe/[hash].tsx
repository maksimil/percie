import { NextPage } from "next";
import { useRouter } from "next/router";
import { getPost, getPostsList, Post } from "lib/posts";
import Header, { headLinker } from "components/Header";
import Article from "components/Article";
import Head from "next/head";

const RecipePage: NextPage<{ post: Post; hash: string }> = ({ post }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{post.meta.title}</title>
      </Head>
      <div className="mx-10 <sm:mx-2">
        <Header
          label={post.meta.title}
          links={[
            headLinker("Home", "/", router),
            {
              label: "Link",
              onclick: () => {
                const link = window.location.href;
                navigator.clipboard.writeText(link);
              },
            },
          ]}
        />
        <Article data={post.data} />
        <div className="pb-10" />
      </div>
    </>
  );
};

type Params = {
  params: { hash: string };
};

export const getStaticProps = async ({ params }: Params) => {
  const hash = params.hash;
  const post = await getPost(hash);
  return { props: { hash, post } };
};

export const getStaticPaths = async () => {
  return {
    paths: (await getPostsList()).map((s) => `/recipe/${s}`),
    fallback: false,
  };
};

export default RecipePage;
