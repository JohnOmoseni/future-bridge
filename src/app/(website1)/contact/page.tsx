import SectionWrapper from "@/layouts/SectionWrapper";
import Hero from "../_components/Hero";
import ContactForm from "@/components/forms/ContactForm";
import Steps from "../_components/Steps";

function Contact() {
	return (
		<>
			<Hero
				header="Contact us"
				subtitle="Get in touch-We’d love to hear from you!"
			/>

			<main className="main">
				<SectionWrapper containerStyles="">
					<div className="flex-column md:flex-row md:gap-16 lg:justify-between">
						<div className="relative w-full max-md:-top-[80px] max-md:order-2">
							<Steps />
						</div>

						<div className="row-flex relative -top-[130px] w-full flex-[1_1_100%] max-md:order-1 md:-top-[230px] md:right-[2%] lg:left-auto">
							<ContactForm />
						</div>
					</div>
				</SectionWrapper>
			</main>
		</>
	);
}

export default Contact;
