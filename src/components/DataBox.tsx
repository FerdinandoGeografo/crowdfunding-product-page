interface DataBoxProps {
  value: string;
  label: string;
}

export default function DataBox({ value, label }: DataBoxProps) {
  return (
    <div className="flex flex-col items-center gap-2.25 sm:items-start sm:gap-2">
      <p className="text-[32px] leading-9.75 font-bold">{value}</p>
      <p className="text-sm leading-4.25 text-neutral-500 sm:text-[15px] sm:leading-4.5">
        {label}
      </p>
    </div>
  );
}
