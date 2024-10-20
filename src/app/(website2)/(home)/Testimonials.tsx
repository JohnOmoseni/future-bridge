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

				<ul className="mt-10 gap-6 grid grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))]">
					{testimonials.map(({ img, name, tag, body }, idx) => (
						<li
							key={idx}
							className="flex-column group min-h-32 flex-none gap-4 rounded-xl border-border bg-background-100 px-6 pb-5 pt-3.5 shadow hover:shadow-md transition-all md:max-w-md"
						>
							<div className="grid grid-cols-[max-content_1fr] gap-3 items-center">
								<div className="relative size-12 overflow-hidden rounded-full border border-slate-300 border-opacity-30 p-px shadow-sm clip-circle self-start">
									<img src={img} alt="" className="object-contain size-full" />
								</div>
								<div>
									<h3
										title={name}
										className="capitalize line-clamp-2 cursor-default "
									>
										{name}
									</h3>
									<p className="text-sm capitalize text-grey">{tag}</p>
								</div>
							</div>

							<p className="mt-auto leading-[1.35rem] tracking-tight line-clamp-5 sm:line-clamp-[10]">
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
