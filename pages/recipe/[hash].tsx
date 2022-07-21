import { NextPage } from "next";
import { useRouter } from "next/router";
import { getPost, getPostsList, Post } from "lib/posts";
import Header from "components/Header";

const RecipePage: NextPage<{ post: Post; hash: string }> = ({ post, hash }) => {
  const router = useRouter();
  return (
    <div className="mx-10 <sm:mx-5">
      <Header
        label={`${post.meta.title}`}
        links={[
          {
            label: "Home",
            onclick: () => {
              router.push("/");
            },
          },
        ]}
      />
    </div>
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
