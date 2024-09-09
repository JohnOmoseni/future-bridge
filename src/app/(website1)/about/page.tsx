import SectionWrapper from "@/layouts/SectionWrapper";
import {
	aboutImage1,
	aboutImage2,
	aboutImage3,
	Dotted,
	DottedSlant,
	Square,
} from "@/constants/icons";
import { aboutSection } from "@/constants";
import Hero from "../_components/Hero";

function About() {
	return (
		<div>
			<Hero
				header="Discover the Values of Future Bridge"
				subtitle="Get to know us better!"
				containerStyles=""
			/>

			<main className="main">
				<SectionWrapper>
					<div className="about-main-sm sm:about-main-md lg:about-main-lg grid gap-x-10 gap-y-8 pb-8">
						<div className="section1 px-1">
							<h3 className="relative text-xl sm:text-2xl">
								{aboutSection[0]?.title}
							</h3>
							<p className="mt-3 text-grey max-sm:pr-2">
								{aboutSection[0]?.body}
							</p>
						</div>

						<div className="section3 px-1">
							<h3 className="relative text-xl sm:text-2xl">
								{aboutSection[1]?.title}
							</h3>
							<p className="mt-3 text-grey max-sm:pr-2">
								{aboutSection[1]?.body}
							</p>
						</div>

						<div className="section2 px-1 lg:-mt-[60px]">
							<h3 className="relative text-xl sm:text-2xl">
								{aboutSection[2]?.title}
							</h3>
							<p className="mt-3 text-grey max-sm:pr-2">
								{aboutSection[2]?.body}
							</p>
						</div>

						<div className="img1 relative min-w-[300px] rounded-xl lg:h-[250px]">
							<img
								src={aboutImage1}
								alt=""
								className="z-1 absolute size-full rounded-xl object-cover"
							/>
							<Dotted className="absolute -right-3.5 -top-4 -z-10 h-fit w-fit object-contain" />
							<DottedSlant className="absolute -bottom-7 -left-3 -z-10 h-fit w-fit object-contain" />

							<Square className="absolute -bottom-4 -right-7 -z-10 h-fit w-fit object-contain" />
						</div>

						<div className="img2 relative w-4/5 min-w-[300px] rounded-xl sm:h-[250px] lg:my-auto lg:h-4/5 lg:min-h-[350px] lg:w-full">
							<img
								src={aboutImage2}
								alt=""
								className="z-1 absolute size-full rounded-xl object-cover"
							/>
							<Square className="absolute -right-7 -top-4 -z-10 h-fit w-fit object-contain" />
							<Dotted className="absolute -bottom-4 -left-3 -z-10 h-fit w-fit object-contain" />
						</div>

						<div className="img3 relative min-w-[250px] rounded-xl shadow-sm">
							<img
								src={aboutImage3}
								alt=""
								className="z-1 absolute size-full rounded-xl object-cover"
							/>
							<Square className="absolute -right-7 -top-4 -z-10 h-fit w-fit object-contain" />
							<DottedSlant className="absolute -bottom-4 -left-4 -z-10 h-fit w-fit rotate-180 object-contain" />
						</div>
					</div>
				</SectionWrapper>
			</main>
		</div>
	);
}

export default About;
