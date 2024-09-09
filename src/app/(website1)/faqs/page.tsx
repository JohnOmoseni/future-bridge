import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { faq } from "@/constants";
import { Link } from "react-router-dom";
import SectionWrapper from "@/layouts/SectionWrapper";
import Hero from "../_components/Hero";

function FAQ() {
	return (
		<div>
			<Hero
				header="Frequently asked questions"
				subtitle="Get in touch-We'd love to hear from you!"
				containerStyles=""
			/>

			<main className="main">
				<SectionWrapper>
					<div className="flex-column gap-8">
						<div className="faq mx-auto w-full max-w-[900px] self-center rounded-xl px-2 pt-3">
							{faq.map((item: any, idx) => (
								<Accordion
									type="single"
									collapsible
									className="w-full py-3 sm:py-6"
									key={idx}
								>
									<AccordionItem value={`item-${idx}`} className="">
										<AccordionTrigger className="break-words text-left max-sm:max-w-[50ch]">
											{item?.trigger}
										</AccordionTrigger>
										<AccordionContent className="">
											<p className="text-base leading-5">{item.body1}</p>
											<p className="mt-3 text-base leading-5">{item.body2}</p>
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							))}
						</div>

						<div className="relative mt-auto">
							<h3 className="whitespace-nowrap pt-3.5 font-medium md:pl-[3%]">
								Need more feedback?{" "}
								<Link
									to="/contact"
									className="!font-semibold tracking-wide text-foreground-variant transition hover:underline"
								>
									Contact Us
								</Link>
							</h3>
						</div>
					</div>
				</SectionWrapper>
			</main>
		</div>
	);
}

export default FAQ;
