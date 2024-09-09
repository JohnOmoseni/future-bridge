import {
	FancyArrow1 as Arrow1,
	FancyArrow2 as Arrow2,
	FancyArrowRotate as ArrowRotate,
	FancyArrow2Rotate as Arrow2Rotate,
} from "@/constants/icons";

const GetStarted = () => {
	return (
		<div className="relative">
			<div className="flex-column !items-center gap-3.5">
				<p className="badge">
					How it works{" "}
					<span className="absolute right-[99%] top-[50%] z-0 h-1 w-[50px] translate-y-[-50%] rounded-full bg-grey-btn after:absolute after:-left-[0.6rem] after:-top-[0.6rem] after:aspect-square after:h-6 after:w-6 after:rounded-md after:bg-variant" />
				</p>
				<h2 className="text-center text-4xl">
					How do i get started at{" "}
					<span className="font-semibold text-foreground-variant">
						Future Bridge?{" "}
					</span>{" "}
				</h2>
			</div>

			<div className="section-body flex-column mx-auto min-h-[40vh] max-w-2xl !justify-start gap-[3.75rem] px-4 lg:max-w-4xl lg:gap-[max(90px,_14vh)]">
				<div className="flex w-full flex-col justify-between gap-x-8 gap-y-14 md:flex-row">
					<div className="w-full">
						<h3 className="relative text-xl max-md:text-center sm:text-2xl">
							Step 1
						</h3>
						<p className="relative mt-3 max-w-[34ch] text-base leading-5 text-grey brightness-90 max-md:mx-auto max-md:text-center max-sm:px-1">
							Fill our Form- Enter important information about your School.
						</p>
					</div>

					<div className="w-full">
						<h3 className="relative mx-auto text-xl max-md:max-w-max max-md:text-center sm:text-2xl">
							Step 2
							<Arrow2 className="absolute bottom-full left-[120%] block md:hidden" />
						</h3>
						<p className="relative mt-3 max-w-[34ch] text-base leading-5 text-grey brightness-90 max-md:mx-auto max-md:text-center max-sm:px-1">
							Request for a demo/call with our team or proceed to payment.{" "}
						</p>
					</div>
				</div>

				<div className="flex w-full flex-col justify-between gap-x-8 gap-y-14 md:flex-row lg:ml-[20%] xl:gap-[20%]">
					<div className="relative w-full">
						<h3 className="relative mx-auto text-xl max-md:max-w-max max-md:text-center sm:text-2xl">
							Step 3
							<Arrow1 className="absolute bottom-[102%] left-4 hidden lg:block" />
							<ArrowRotate className="absolute bottom-0 right-8 hidden lg:block" />
							<Arrow2Rotate className="absolute -left-[140%] bottom-[90%] block md:hidden" />
						</h3>
						<p className="relative mt-3 max-w-[34ch] text-base leading-5 text-grey brightness-90 max-md:mx-auto max-md:text-center max-sm:px-1">
							Pay a one time set up fee of N296,000 only{" "}
						</p>
					</div>

					<div className="w-full">
						<h3 className="relative mx-auto text-xl max-md:max-w-max max-md:text-center sm:text-2xl">
							Step 4
							<Arrow1 className="absolute bottom-[102%] left-3 hidden lg:block" />
							<Arrow2 className="absolute bottom-full left-[120%] block md:hidden" />
						</h3>
						<p className="relative mt-3 max-w-[34ch] text-base leading-5 text-grey brightness-90 max-md:mx-auto max-md:text-center max-sm:px-1">
							Get your Administrative Login and step into the Future{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GetStarted;
