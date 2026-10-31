type Props = {
  children: React.ReactNode;
};

export default function Card({ children }: Props) {
  return (
    <div
      className="
      glass
      rounded-[30px]
      border
      border-white/10
      transition
      duration-300
      hover:-translate-y-2
      hover:border-violet-500/40
      "
    >
      {children}
    </div>
  );
}