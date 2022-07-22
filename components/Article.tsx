const Article = ({ data }: { data: string }) => {
  return (
    <div
      className="w-150 <md:w-full"
      dangerouslySetInnerHTML={{ __html: data }}
    />
  );
};

export default Article;
