interface StatItemProps {
  number: string;
  label: string;
}

const StatItem = ({ number, label }: StatItemProps) => (
  <div className="text-center sm:text-left">
    <div className="font-black text-2xl sm:text-3xl text-gray-900 leading-none">
      {number}
    </div>
    <div className="text-xs text-gray-500 mt-1 leading-tight">{label}</div>
  </div>
);

export default StatItem;