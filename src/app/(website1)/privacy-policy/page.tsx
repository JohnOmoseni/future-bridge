import SectionWrapper from "@/layouts/SectionWrapper";
import Hero from "../_components/Hero";
import { privacyPolicy } from "@/constants";
import { cn } from "@/lib/utils";

function PrivacyPolicy() {
	return (
		<>
			<Hero
				header="Privacy policy"
				subtitle="We are committed to safeguarding your data and ensuring transparency in how we handle your privacy."
				hideSocials={true}
			/>

			<main className="main">
				<SectionWrapper containerStyles="">
					<div className="flex-column gap-6 md:gap-10">
						<p className="pr-1">
							{privacyPolicy[0]?.introduction &&
								privacyPolicy[0]?.introduction
									.split("\n")
									.map((line, index) =>
										line.trim() !== "" ? (
											<p key={index}>{line}</p>
										) : (
											<br key={index} />
										)
									)}
						</p>

						<div className={cn("flex-column gap-6")}>
							{privacyPolicy.slice(1).map((paragraph, idx) => {
								return (
									<div
										key={idx}
										className={cn(
											"flex-column sm:grid grid-cols-[minmax(auto,_200px)_1fr] gap-x-4 gap-y-3"
										)}
									>
										<h3 className="font-semibold text-[1rem]">
											{paragraph?.label}
										</h3>

										<p className="pr-2">
											{paragraph?.body &&
												paragraph?.body
													.split("\n")
													.map((line, index) =>
														line.trim() !== "" ? (
															<p key={index}>{line}</p>
														) : (
															<br key={index} />
														)
													)}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</SectionWrapper>
			</main>
		</>
	);
}

export default PrivacyPolicy;
