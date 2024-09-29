import { testimonials } from "@/constants/dashboard-index";

function Testimonials() {
	return (
		<div className="section lg:!px-[6%] !min-h-max">
			<div className="pt-4 relative">
				<div className="absolute bg-secondary w-[90px] rounded-full h-1 left-0 top-0" />
				<h3 className="">Testimonials</h3>
				<p className="text-base mt-1 leading-5">
					Hear what our esteemed Parents have to say about us!
				</p>

				<ul className="mt-10 gap-6 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
					{testimonials.map(({ img, name, tag, body }, idx) => (
						<li
							key={idx}
							className="flex-column group min-h-32 flex-none gap-4 rounded-xl border-border bg-background-100 px-6 pb-5 pt-3.5 shadow-sm md:max-w-md"
						>
							<div className="flex gap-3">
								<div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-300 border-opacity-30 p-px shadow-sm">
									<img src={img} alt="" className="object-contain" />
								</div>
								<div>
									<h3 className="capitalize">{name}</h3>
									<p className="text-sm capitalize text-grey">{tag}</p>
								</div>
							</div>

							<p className="italics leading-[1.35rem] tracking-tight max-sm:text-base">
								{body}
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Testimonials;
