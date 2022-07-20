const Header = ({ label }: { label: string }) => {
  return (
    <div
      className={
        "mx-10 my-5 w-100 " +
        "border-b-2 border-solid border-acc " +
        "text-dim text-3xl"
      }
    >
      {label}
    </div>
  );
};

export default Header;
