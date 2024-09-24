import SectionWrapper from "@/layouts/SectionWrapper";
import ContactUsForm from "@/components/forms/website-2/ContactUsForm";

function Contact() {
	return (
		<SectionWrapper containerStyles="">
			<div className="flex-column md:flex-row md:gap-16 lg:justify-between">
				<div className="relative w-full max-md:order-1">
					<ContactUsForm />
				</div>

				<div></div>
			</div>
		</SectionWrapper>
	);
}

export default Contact;
