import { NextPage } from "next";
import Header, { headLinker } from "components/Header";
import Article from "components/Article";
import { getAbout } from "lib/about";
import { useRouter } from "next/router";

type AboutProps = {
  about: string;
};

const AboutPage: NextPage<AboutProps> = ({ about }) => {
  const router = useRouter();
  return (
    <div className="mx-10 <sm:mx-2">
      <Header label="percie/about" links={[headLinker("Home", "/", router)]} />
      <Article data={about} />
      <div className="pb-10" />
    </div>
  );
};

export const getStaticProps = async () => {
  const about = await getAbout();
  return { props: { about } };
};

export default AboutPage;
