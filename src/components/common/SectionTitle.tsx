interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="mb-16">
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="text-5xl font-black tracking-tight text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;
