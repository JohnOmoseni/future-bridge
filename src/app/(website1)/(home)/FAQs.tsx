import { faq } from "@/constants";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const HomeFAQ = () => {
	return (
		<div className="">
			<div className="flex-column !items-center gap-3.5">
				<p className="badge">
					FAQ
					<span className="tag-variant" />
				</p>
				<h2 className="text-center text-4xl">
					Everything you need to know about{" "}
					<span className="font-semibold text-foreground-variant">
						Future Bridge.{" "}
					</span>
				</h2>
			</div>

			<div className="section-body">
				<div className="faq mx-auto w-full max-w-[1000px] self-center rounded-xl pt-3">
					{faq.map((item: any, idx) => (
						<Accordion
							type="single"
							collapsible
							className="w-full py-3 sm:py-6"
							key={idx}
						>
							<AccordionItem value={`item-${idx}`} className="">
								<AccordionTrigger className="break-words text-left max-sm:max-w-[60ch]">
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
			</div>
		</div>
	);
};

export default HomeFAQ;
