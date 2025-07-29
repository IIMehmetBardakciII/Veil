const SectionTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex flex-col gap-14 max-sm:gap-8">
      <h2
        className="h2-mont l:pl-[108px]  "
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <h5 className="h5-saudagar text-right sm:mb-14 mb-8">{subtitle}</h5>
      )}
    </div>
  );
};

export default SectionTitle;
