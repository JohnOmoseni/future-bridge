import SectionWrapper from "@/layouts/SectionWrapper";
import Hero from "../_components/Hero";
import Steps from "../_components/Steps";
import RegisterForm from "@/components/forms/RegisterForm";

function Contact() {
	return (
		<>
			<Hero
				header="Get started"
				subtitle="Provide information about your school"
			/>

			<main className="main">
				<SectionWrapper containerStyles="">
					<div className="flex-column gap-12 md:flex-row md:gap-16 lg:justify-between">
						<div className="relative w-full">
							<Steps />
						</div>

						<div className="relative w-full flex-[1_1_100%]">
							<h3 className="mb-5 text-2xl text-foreground-variant md:hidden md:text-3xl">
								Ready to explore Future Bridge?
							</h3>

							<div className="row-flex relative w-full md:-top-[180px] md:right-[2%] lg:left-auto">
								<RegisterForm />
							</div>
						</div>
					</div>
				</SectionWrapper>
			</main>
		</>
	);
}

export default Contact;
