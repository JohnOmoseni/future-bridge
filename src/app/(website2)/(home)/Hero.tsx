import TextGenerateEffect from "@/components/anims/TextGenerateEffect";
import { Button } from "@/components/CustomButton";
import { hero_web2 } from "@/constants/icons2";
import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="hero relative min-h-dvh w-full pb-8 pt-12 md:min-h-[115vh] md:pt-[6%]">
			<div className="size-full flex-column gap-8 md:row-flex !items-start">
				<div className="flex-1 px-[max(1.5em,_6%)]">
					<h1 className="relative isolate max-md:text-center max-w-">
						Shaping the <span>leaders of tomorrow </span> is our top{" "}
						<br className="hidden lg:block" /> priority at {""}
						<span>St. Endas College</span>
					</h1>

					<TextGenerateEffect
						className="mt-4 max-w-[50ch] text-lg font-light max-md:mx-auto max-md:px-3 max-md:text-center"
						words="Our commitment to academic excellence, and moral integrity ensures that every student is not only prepared for success but also empowered to make a positive impact on the world."
					/>

					<Link to="#" className="mt-10 row-flex mx-auto md:!justify-start">
						<Button title="Register now" className="px-10 py-3.5 text-lg" />
					</Link>
				</div>

				<div className="md:absolute overflow-hidden max-md:max-h-[500px] max-md:px-4 mx-auto bottom-4 right-[4%] -z-10 md:h-[420px] min-[950px]:h-[470px] xl:min-h-[600px]">
					<img src={hero_web2} alt="hero" className="!object-contain h-full" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
