function Testimonials() {
	return (
		<div className="section lg:!px-[6%]">
			<div className="pt-4 relative">
				<div className="absolute bg-secondary w-[90px] rounded-full h-1 left-0 top-0" />
				<h3 className="">Testimonials</h3>
				<p className="text-base mt-1">
					Hear what our esteemed Parents have to say about us!
				</p>

				<ul className="mt-8 gap-6 grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))]">
					{[1, 2, 3].map((card, idx) => (
						<li
							key={idx}
							className="flex-column group min-h-32 flex-none gap-4 rounded-xl border-border bg-background-100 px-6 pb-5 pt-3.5 shadow-sm md:max-w-md"
						>
							<div className="flex gap-3">
								<div className="relative h-12 w-12 overflow-hidden rounded-full border border-slate-300 border-opacity-30 p-px shadow-sm">
									<img src="" alt="" className="object-contain" />
								</div>
								<div>
									<h3 className="capitalize">Mrs. Guanah</h3>
									<p className="text-sm capitalize text-grey">Parent</p>
								</div>
							</div>

							<p className="italics leading-[1.35rem] tracking-tight max-sm:text-base">
								St. Endas college is one in a million, my child has really
								developed a lot here in this school.
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Testimonials;
