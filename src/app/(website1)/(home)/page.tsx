import Hero from "./Hero";
import AboutSection from "./About";
import Features from "./Features";
import Partners from "./Partners";
import GetStarted from "./GetStarted";
import HomeFAQ from "./FAQs";
import Testimonials from "./Testimonials";
import HomeContact from "./Contact";
import SectionWrapper from "@/layouts/SectionWrapper";

export default function Home() {
	return (
		<>
			<Hero />

			<main className="relative overflow-hidden">
				<SectionWrapper containerStyles="bg-background-100" id="about">
					<AboutSection />
				</SectionWrapper>
				<SectionWrapper containerStyles="bg-background-200" id="features">
					<Features />
				</SectionWrapper>
				<SectionWrapper containerStyles="bg-background-100" id="partners">
					<Partners />
				</SectionWrapper>
				<SectionWrapper containerStyles="bg-background-100" id="get-started">
					<GetStarted />
				</SectionWrapper>
				<SectionWrapper containerStyles="bg-background-100" id="faq">
					<HomeFAQ />
				</SectionWrapper>
				<SectionWrapper containerStyles="bg-background-200" id="testimonials">
					<Testimonials />
				</SectionWrapper>
				<SectionWrapper containerStyles="bg-background-100" id="contact">
					<HomeContact />
				</SectionWrapper>
			</main>
		</>
	);
}
