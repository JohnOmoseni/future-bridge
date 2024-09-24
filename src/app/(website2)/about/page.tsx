import BackArrow from "@/components/BackArrow";
import { newsPost1 } from "@/constants/icons2";
import SectionWrapper from "@/layouts/SectionWrapper";

function About() {
	return (
		<SectionWrapper>
			<div className="flex-column gap-6">
				<BackArrow title="About Us" />

				<div className="grid grid-cols-[1fr_auto] gap-6 mt-4 min-h-[80vh] px-2">
					<div className="flex-column gap-4">
						<h4 className="text-foreground-variant text-2xl">Our Mission</h4>

						<p className="pr-5">
							St Endas College Agbarho is a subsidiary of the Warri Catholic
							Diocese. She was founded in the year __ by __ and since then, she
							has helped in shaping the morals and academic excellence of
							hundreds of students that passed through her.. In st Endas college
							we are going to equip the child for life and also increase the
							child’s holistic development.
							<br />
							<br />
							But to acheive our goal, we need to instill the spirit of
							creativity, , we teach our children both academic and social
							economic skills that will allow them to build a meaningful life
							and contribute to the society.
							<br />
							<br />
							St Endas College Agbarho is a subsidiary of the Warri Catholic
							Diocese. She was founded in the year __ by __ and since then, she
							has helped in shaping the morals and academic excellence of
							hundreds of students that passed through her.. In st Endas college
							we are going to equip the child for life and also increase the
							child’s holistic development.
							<br />
							<br />
							But to acheive our goal, we need to instill the spirit of
							creativity, , we teach our children both academic and social
							economic skills that will allow them to build a meaningful life
							and contribute to the society.
						</p>
					</div>

					<img src={newsPost1} alt="" className="h-full w-[400px]" />
				</div>
			</div>
		</SectionWrapper>
	);
}

export default About;
