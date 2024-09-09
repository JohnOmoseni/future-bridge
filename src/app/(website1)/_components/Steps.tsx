import { steps } from "@/constants";

function Steps() {
  return (
    <div className="w-full">
      <h3 className="text-2xl text-foreground-variant md:text-3xl">
        What will be the next <br className="hidden md:block" /> step?
      </h3>
      <div className="flex-column mt-8 gap-10">
        {steps?.map((step, idx) => (
          <div className="relative isolate py-1 pl-10" key={idx}>
            <div className="flex-column gap-1">
              <h3>{step?.step}</h3>
              <p className="md:max-w-[25ch]">{step.subtitle}</p>
            </div>

            <div className="absolute left-0 top-0 z-10 size-5 rounded-full bg-secondary" />
            <div className="absolute left-0 top-4 -z-10 ml-2.5 h-4/5 w-0.5 rounded-full bg-grey-100 shadow-sm brightness-90" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps;
