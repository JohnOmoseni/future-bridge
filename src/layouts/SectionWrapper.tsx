import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  id?: string;
  containerStyles?: string;
};

const SectionWrapper = ({ children, containerStyles, id }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "relative isolate min-h-[50vh] px-6 py-8 sm:px-[4%] sm:pt-[3em]",
        containerStyles,
      )}
    >
      {children}
    </div>
  );
};

export default SectionWrapper;
