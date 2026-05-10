import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[minmax(24rem,auto)] grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-3xl group/bento transition-all duration-300 shadow-[0_0_1px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.02),0_10px_20px_-5px_rgba(0,0,0,0.03)] bg-white border border-black/[0.06] flex flex-col justify-between overflow-hidden hover:shadow-[0_0_1px_rgba(0,0,0,0.1),0_20px_40px_-10px_rgba(0,0,0,0.08)] hover:scale-[1.005] hover:border-black/[0.12]",
        className
      )}
    >
      <div className="p-10 h-full flex flex-col justify-between">
        <div className="w-full flex-1 mb-10 transition-transform duration-500 group-hover/bento:scale-[1.01]">
            {header}
        </div>
        <div className="transition duration-300">
            <div className="mb-5 w-12 h-12 rounded-2xl bg-black/[0.03] flex items-center justify-center border border-black/[0.05] group-hover/bento:bg-black group-hover/bento:text-white group-hover/bento:border-black transition-all duration-500">
                {icon}
            </div>
            <div className="font-bold text-black mb-2 uppercase tracking-tight text-xl">
                {title}
            </div>
            <div className="font-normal text-black/50 text-[15px] leading-relaxed tracking-tight group-hover/bento:text-black/70 transition-colors duration-500">
                {description}
            </div>
        </div>
      </div>
    </div>
  );
};
