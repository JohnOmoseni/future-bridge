import { testimonials } from "@/constants";

const Testimonials = () => {
	return (
		<div className="relative">
			<div className="flex-column !items-center gap-3.5">
				<p className="badge">
					Testimonials
					<span className="tag-variant" />
				</p>
				<h2 className="text-center text-4xl">
					Hear what our exisiting clients are saying about{" "}
					<span className="font-semibold text-foreground-variant">
						Future Bridge{" "}
					</span>
				</h2>
			</div>

			<div className="section-body grid gap-8 overflow-hidden sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
				{testimonials.map((testimonial, idx) => (
					<Card key={idx} {...testimonial} />
				))}
			</div>
		</div>
	);
};

export default Testimonials;

type TestimonialsProps = {
	name: string;
	text: string;
	avatar: any;
	title: string;
};

export const Card = ({ ...testimonial }: TestimonialsProps) => {
	return (
		<div
			key={testimonial.name}
			className="flex-column group min-h-40 flex-none gap-4 rounded-xl border-border bg-background-100 px-6 pb-5 pt-3.5 shadow-sm md:max-w-md"
		>
			<div className="flex gap-3">
				<div className="relative overflow-hidden rounded-full border border-slate-300 border-opacity-30 p-px shadow-sm">
					<img
						src={testimonial.avatar}
						alt={`Avatar for ${testimonial.name}`}
						className="h-11 w-11 !rounded-full object-contain"
					/>
				</div>
				<div>
					<h3 className="capitalize">{testimonial.name}</h3>
					<div className="text-sm capitalize text-grey">
						{testimonial.title}
					</div>
				</div>
			</div>

			<div className="italics leading-[1.35rem] tracking-tight max-sm:text-base">
				{testimonial.text}
			</div>
		</div>
	);
};
