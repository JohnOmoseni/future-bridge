import TextGenerateEffect from "@/components/anims/TextGenerateEffect";
import { Button } from "@/components/CustomButton";
import {
	bubble,
	bubbles,
	hero_web2_mobile,
	HeroBubble,
	herotextBubble,
} from "@/constants/icons2";
import { useGetRequestId } from "@/hooks/useGetRequestId";

function Hero() {
	const { handleClick, isLoading } = useGetRequestId();

	return (
		<div className="hero relative min-h-dvh w-full pb-8 pt-14 sm:min-h-[118dvh] lg:pt-[4%]">
			<div className="size-full flex-column gap-8 sm:row-flex !items-start">
				<div className="flex-1 px-[max(1.5em,_6%)]">
					<h1 className="relative max-sm:text-center">
						<span className="relative isolate text-white">
							Sha
							<HeroBubble className="object-contain -z-10 absolute -left-4 -top-1.5  max-sm:-top-4" />
							<img
								src={herotextBubble}
								alt="hero"
								className="object-contain -z-20 absolute left-0 -top-2 max-sm:hidden"
							/>
						</span>
						ping the{" "}
						<span className="text-secondary">leaders of tomorrow </span> is our
						top <br className="hidden lg:block" /> priority at {""}
						<span className="text-secondary">St. Endas College.</span>
					</h1>

					<TextGenerateEffect
						className="mt-4 max-w-[50ch] md:text-lg font-light max-sm:mx-auto max-sm:px-3 max-sm:text-center"
						words="Our commitment to academic excellence, and moral integrity ensures that every student is not only prepared for success but also empowered to make a positive impact on the world."
					/>

					<div className="mt-10 row-flex mx-auto sm:!justify-start">
						<Button
							onClick={handleClick}
							isLoading={isLoading}
							title="Register now"
							className="px-10 !py-6 text-lg"
						/>
					</div>
				</div>

				<div className="sm:absolute overflow-hidden min-h-[350px] max-sm:max-h-[600px] max-sm:px-4 mx-auto bottom-4 right-[4%] -z-10 sm:h-[420px] min-[950px]:h-[470px] xl:min-h-[600px]">
					<img
						src={hero_web2_mobile}
						alt="hero"
						className="sm:object-contain h-full"
					/>
				</div>

				<img
					src={bubbles}
					alt="hero"
					className="!object-contain absolute left-8 md:left-12 bottom-4"
				/>

				<img
					src={bubble}
					alt="hero"
					className="!object-contain absolute right-[10%] top-3"
				/>

				<img
					src={bubble}
					alt="hero"
					className="!object-contain hidden sm:block absolute left-[30%] top-[70%]"
				/>
			</div>
		</div>
	);
}

export default Hero;
