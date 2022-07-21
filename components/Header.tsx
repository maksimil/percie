const Header = ({ label }: { label: string }) => {
  return (
    <div
      className={
        "mt-5 mb-10 pb-2 w-100 <md:w-75 <sm:w-50 " +
        "border-b-2 border-solid border-acc " +
        "text-dim text-4xl"
      }
    >
      {label}
    </div>
  );
};

export default Header;
