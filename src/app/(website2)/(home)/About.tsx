import { about } from "@/constants/icons2";
import { Link } from "react-router-dom";

function About() {
	return (
		<div className="section sm:grid grid-cols-[1fr_1fr] gap-8 flex-column justify-items-center">
			<div className="flex-column gap-1">
				<span className="text-foreground-variant font-semibold">About Us</span>

				<h3>We help build future innovators</h3>

				<p className="mt-3 mb-4 text-base leading-5 pr-1 max-w-2xl">
					St Endas College Agbarho is a subsidiary of the Warri Catholic
					Diocese. She was founded in the year __ by __ and since then, she has
					helped in shaping the morals and academic excellence of hundreds of
					students that passed through her.. In st Endas college we are going to
					equip the child for life and also increase the child’s holistic
					development.
					<br /> <br />
					But to acheive our goal, we need to instill the spirit of creativity,
					, we teach our children both academic and social economic skills that
					will allow them to build a meaningful life and contribute to the
					society.{" "}
				</p>

				<Link to="#" className="text-foreground-variant font-medium text-sm">
					Read more
				</Link>
			</div>

			<div className="max-w-xl min-w-[300px]">
				<img src={about} alt="" className="h-full !object-contain" />
			</div>
		</div>
	);
}

export default About;
