interface BadgeProps {
  text: string;
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <span
      className="
      rounded-full

      border

      border-blue-500/30

      bg-blue-500/10

      px-4

      py-2

      text-sm

      text-blue-300
      "
    >
      {text}
    </span>
  );
};

export default Badge;
