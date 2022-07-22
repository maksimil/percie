import { NextRouter } from "next/router";

export type LinkProps = { label: string; onclick: () => void };

export const headLinker = (
  label: string,
  link: string,
  router: NextRouter
) => ({
  label,
  onclick: () => {
    router.push(link);
  },
});

const TopLink = ({ link }: { link: LinkProps }) => {
  const { label, onclick } = link;
  return (
    <div
      className={"mr-2 text-dim " + "hover:text-dark cursor-pointer "}
      onClick={onclick}
    >
      {label}
    </div>
  );
};

const Header = ({ label, links }: { label: string; links?: LinkProps[] }) => {
  return (
    <div className={"mt-5 mb-5 "}>
      <div
        className={
          "pb-2 w-150 <md:w-full " +
          "border-b-2 border-solid border-acc " +
          "text-dim text-5xl <md:text-4xl font-medium font-mono "
        }
      >
        {label}
      </div>
      <div className="flex flex-row">
        {links ? links.map((link, i) => <TopLink key={i} link={link} />) : ""}
      </div>
    </div>
  );
};

export default Header;
