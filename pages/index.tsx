import { NextPage } from "next";
import Header from "components/Header";

const Home: NextPage = () => {
  return (
    <div className="w-full h-full absolute bg-back">
      <Header label="Percie" />
    </div>
  );
};

export default Home;
