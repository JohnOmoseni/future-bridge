import { about } from "@/constants/icons2";

function Features() {
	return (
		<div className="section bg-[#C3CFE0] flex-column gap-1">
			<span className="text-foreground-variant font-semibold">
				What we offer!
			</span>

			<h3>What do we have to show at St. Endas?</h3>

			<div className="mt-12">
				<div className="flex-column sm:grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-6 lg:grid-rows-[180px_auto_150px] lg:grid-cols-[350px_auto_auto]">
					<img
						src={about}
						alt=""
						className="h-[80%] my-auto row-[1/4] object-cover"
					/>

					<div className="flex-column self-center col-[3/4] row-[1/2]">
						<h4 className="font-semibold text-lg">Modern facilities</h4>

						<p className="text-base leading-5 pr-2 mt-3">
							St Endas boasts of state-of-the-art teaching and learning
							equipment across all classrooms and laboratories. Our science labs
							boasts of the latest equipment, enabling hands on exploration and
							scientific discovery.{" "}
						</p>
					</div>

					<img
						src={about}
						alt=""
						className="sm:max-md:hidden row-[1/3] h-full object-cover"
					/>

					<div className="lg:ml-[50px]">
						<h4 className="font-semibold text-lg">Day Boarding</h4>

						<p className="text-base leading-5 pr-2 mt-3">
							St Endas boasts of state-of-the-art teaching and learning
							equipment across all classrooms and laboratories. Our science labs
							boasts of the latest equipment, enabling hands on exploration and
							scientific discovery.{" "}
						</p>
					</div>

					<img
						src={about}
						alt=""
						className="col-[2/3] h-full row-[3/4] lg:w-[70%] object-cover"
					/>

					<div className="col-[3/4] self-end row-[3/4] lg:-ml-[10%] flex-column justify-end">
						<h4 className="font-semibold text-lg">Skill acquisition</h4>

						<p className="text-base leading-5 pr-2 mt-3">
							St Endas boasts of state-of-the-art teaching and learning
							equipment across all classrooms and laboratories. Our science labs
							boasts of the latest equipment, enabling hands on exploration and
							scientific discovery.{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
