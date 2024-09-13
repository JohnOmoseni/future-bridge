import TextGenerateEffect from "@/components/anims/TextGenerateEffect";
import { Button } from "@/components/CustomButton";
import { hero1, hero2, hero3, hero4, person, Star } from "@/constants/icons";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div
			id="home"
			className="relative isolate grid grid-cols-1 gap-8 pt-14 sm:pt-[8%] md:gap-12"
		>
			<div className="flex-1 px-3 max-md:px-6">
				<h1 className="relative px-3 text-center">
					<span className="font-semibold text-foreground-variant">
						Transform Your School{" "}
					</span>
					Into A Beacon Of{" "}
					<span className="relative font-semibold">
						Excellence
						<Star className="absolute -right-14 top-1/2 size-10 -translate-y-1/2 object-contain" />
					</span>
				</h1>

				<TextGenerateEffect
					className="mx-auto mt-5 max-w-[60ch] px-3 text-center font-light sm:text-lg lg:max-w-[80ch]"
					words="Enter a future where every student is engaged, every teacher is supported, and every parent is connected. Future Bridge elevates your school, streamlines operations, and creates an environment where education thrives."
				/>

				<Link to="/contact" className="row-flex mt-11">
					<Button
						title="Request Demo"
						btnType="outline"
						className="!h-auto !rounded-2xl !px-10 !py-3 !tracking-tight"
					/>
				</Link>
			</div>

			<div className="row-flex relative min-h-[60vh] -z-10 mx-auto w-[96%] md:w-[90%] xl:w-[80%]">
				<img
					src={person}
					alt="hero"
					className="max-h-[60vh] object-contain object-center md:max-h-[100vh]"
				/>

				<img
					src={hero1}
					alt="hero"
					className="absolute left-0 top-0 h-fit max-w-60 object-contain max-[500px]:max-w-32 sm:min-w-64 lg:max-w-80"
				/>

				<img
					src={hero2}
					alt="hero"
					className="absolute left-[4%] top-[60%] h-fit max-w-60 object-contain max-[430px]:max-w-40 sm:min-w-64 md:max-w-80 xl:left-[8%]"
				/>
				<img
					src={hero3}
					alt="hero"
					className="absolute bottom-[5%] right-0 h-fit max-w-40 object-contain max-[430px]:max-w-28 sm:min-w-64 md:max-w-80"
				/>

				<img
					src={hero4}
					alt="hero"
					className="absolute right-0 top-[10%] h-fit max-w-32 object-contain max-[430px]:max-w-24 sm:min-w-44 sm:max-w-52 lg:max-w-72"
				/>
			</div>
		</div>
	);
}

export default Hero;
