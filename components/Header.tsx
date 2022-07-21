export type LinkProps = { label: string; onclick: () => void };

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
    <div className={"mt-5 mb-10 "}>
      <div
        className={
          "pb-2 w-100 <md:w-75 <sm:w-50 " +
          "border-b-2 border-solid border-acc " +
          "text-dim text-4xl"
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
