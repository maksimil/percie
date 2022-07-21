import { NextPage } from "next";
import Header from "components/Header";
import { getPostsList, PostMeta, getPostMeta } from "lib/posts";

type HomeProps = {
  posts: { hash: string; meta: PostMeta }[];
};

const PageLink = ({ post }: { post: { hash: string; meta: PostMeta } }) => {
  const { hash, meta } = post;
  return (
    <div className="pb-5 pr-5">
      <div
        className={
          "p-3 rounded-xl shadow-md shadow-dim text-dark " +
          "hover:shadow-acc cursor-pointer "
        }
        onClick={() => {
          console.log(hash);
        }}
      >
        <div className="text-dark text-xl font-medium font-mono">
          {meta.title}
        </div>
        <div className="text-dim text-md italic">{meta.author}</div>
      </div>
    </div>
  );
};

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <div className="mx-10 <sm:mx-5">
      <Header label="percie" />
      <div className="grid grid-cols-3 <lg:grid-cols-2 <sm:grid-cols-1">
        {posts.map((post, idx) => (
          <PageLink key={idx} post={post} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const posts = await Promise.all(
    (
      await getPostsList()
    ).map(async (hash) => ({
      hash,
      meta: await getPostMeta(hash),
    }))
  );

  return {
    props: { posts },
  };
};

export default Home;
