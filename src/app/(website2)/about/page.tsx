import BackArrow from "@/components/BackArrow";
import { about } from "@/constants/dashboard-index";
import SectionWrapper from "@/layouts/SectionWrapper";
import { cn } from "@/lib/utils";

function About() {
	return (
		<SectionWrapper>
			<div className="flex-column gap-4">
				<BackArrow title="About Us" />

				{about?.map(({ title, img }, idx) => (
					<div
						key={idx}
						className="grid grid-cols-1 sm:grid-cols-[1fr_minmax(auto,_1fr)] gap-6 sm:gap-12 mt-2 mb-6 min-h-[80vh] sm:px-1"
					>
						<div
							className={cn(
								"flex-column gap-4 max-sm:order-2",
								idx === 1 && " order-2"
							)}
						>
							<h4 className="text-foreground-variant font-semibold text-xl">
								{title}
							</h4>

							<p className="pr-2 sm:pr-5">
								St Endas College Agbarho is a subsidiary of the Warri Catholic
								Diocese. She was founded in the year __ by __ and since then,
								she has helped in shaping the morals and academic excellence of
								hundreds of students that passed through her.. In st Endas
								college we are going to equip the child for life and also
								increase the child’s holistic development.
								<br />
								<br />
								But to acheive our goal, we need to instill the spirit of
								creativity, , we teach our children both academic and social
								economic skills that will allow them to build a meaningful life
								and contribute to the society.
								<br />
								<br />
								St Endas College Agbarho is a subsidiary of the Warri Catholic
								Diocese. She was founded in the year __ by __ and since then,
								she has helped in shaping the morals and academic excellence of
								hundreds of students that passed through her.. In st Endas
								college we are going to equip the child for life and also
								increase the child’s holistic development.
								<br />
								<br />
								But to acheive our goal, we need to instill the spirit of
								creativity, , we teach our children both academic and social
								economic skills that will allow them to build a meaningful life
								and contribute to the society.
							</p>
						</div>
						<img
							src={img}
							alt=""
							className={cn(
								"size-full max-sm:mx-auto sm:rounded-sm max-h-[400px] md:min-w-[400px] max-sm:order-1 ",
								idx === 1 && " order-1"
							)}
						/>
					</div>
				))}
			</div>
		</SectionWrapper>
	);
}

export default About;
