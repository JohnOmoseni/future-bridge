import HomeContactForm from "@/components/forms/HomeContact";
import { contactInfo } from "@/constants";

const HomeContact = () => {
	return (
		<div className="">
			<div className="flex-column !items-center gap-3.5">
				<p className="badge">
					Contact us
					<span className="tag-variant" />
				</p>
				<h2 className="text-center text-4xl">
					Have a question?{" "}
					<span className="font-semibold text-foreground-variant">
						Future Bridge.{" "}
					</span>
					is here for you.
				</h2>
			</div>

			<div className="flex-column relative mx-auto mt-8 max-w-[900px] gap-6">
				<div className="w-full max-w-[700px] rounded-md bg-background-200 px-6 py-8 shadow-sm max-lg:mx-auto lg:ml-auto lg:rounded-sm">
					<div className="w-full max-w-[580px] max-lg:mx-auto lg:ml-auto lg:pl-14">
						<HomeContactForm />
					</div>
				</div>

				<div className="left-0 top-[10%] mx-auto w-full max-w-xl rounded-md bg-secondary shadow-sm max-lg:h-max max-lg:max-h-[320px] lg:absolute lg:min-h-[360px] lg:max-w-[320px] lg:rounded-sm">
					<div className="px-7 py-8 lg:px-10 lg:py-12">
						<p className="text-lg font-semibold tracking-wide text-secondary-foreground">
							Contact us
						</p>

						<div className="flex-column mb-4 mt-8 gap-4">
							{contactInfo?.map((info, idx) => (
								<div
									key={idx}
									className="row-flex-start gap-4 text-secondary-foreground"
								>
									<info.icon className="h-fit w-4" />
									<p className="text-xs leading-4 md:whitespace-nowrap">
										{info?.value || (
											<span className="font-italic">unknown</span>
										)}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomeContact;
