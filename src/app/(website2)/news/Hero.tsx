import { newsHero } from "@/constants/icons2";

function Hero() {
	return (
		<div className="h-[60vh]">
			<div className="grid h-full grid-cols-[auto_1.5fr] ">
				<div className="px-6 py-4 text-secondary-foreground md:px-[8%] md:py-[10%] bg-[#151318F0]">
					<div className="rounded-sm py-2.5 px-3.5 w-max text-xs mb-4 bg-secondary">
						September 25th, 2024
					</div>

					<h2 className="leading-10 md:whitespace-nowrap">
						Welcome back to school!
					</h2>

					<p className="mt-6 text-base tracking-wide brightness-75 leading-6 md:max-w-[70ch]">
						We are thrilled to announce the arrival of our dynamic new
						Principal, Rev Fr Samuel A. Taiwo, who brings a wealth of
						experience, passion, and dedication to our school community. With
						Rev Fr Samuel A. Taiwo at the helm, we are embarking on an exciting
						new chapter of educational excellence and innovation.
					</p>
				</div>

				<div
					className="bg-cover  bg-no-repeat"
					style={{ backgroundImage: `url(${newsHero})` }}
				/>
			</div>
		</div>
	);
}

export default Hero;
