import { SuccessIcon } from "@/constants/icons";
import SectionWrapper from "@/layouts/SectionWrapper";

function Success() {
  return (
    <main className="main">
      <SectionWrapper containerStyles="!py-12 min-h-[60vh]">
        <div className="grid place-items-center">
          <div className="flex-column !items-center gap-6">
            <div className="relative">
              <SuccessIcon className="h-fit w-fit" />
            </div>

            <div className="flex-column mt-2 !items-center gap-2.5">
              <h3 className="text-center text-lg">Payment Successful</h3>

              <p className="max-w-lg px-2 text-center leading-5 text-grey">
                Payment received successfully! Check your email for your
                administrative login details and take the first step into the
                future of education.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

export default Success;
