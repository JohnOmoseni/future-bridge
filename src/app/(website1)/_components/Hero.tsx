import { socials } from "@/constants";
import { cn } from "@/lib/utils";

type Props = {
	header: string;
	subtitle?: string;
	containerStyles?: string;
	hideSocials?: boolean;
};

function Hero({ header, subtitle, containerStyles, hideSocials }: Props) {
	return (
		<div
			className={cn(
				"bg-gradient-hero flex-column !justify-center max-h-[400px] gap-4 px-6 py-4 text-secondary-foreground sm:px-[5%]",
				hideSocials ? "h-[40vh]" : "h-[55vh]",
				containerStyles
			)}
		>
			<div className="row-flex-start md:flex-1">
				<div>
					<h1>{header}</h1>
					<p className="mt-2 tracking-wide brightness-90 max-w-[65ch]">
						{subtitle}
					</p>
				</div>
			</div>

			{!hideSocials && (
				<div className="md:mt-auto">
					<div className="row-flex-start mb-3.5 mt-4 gap-4 text-background-100">
						{socials?.map((item, idx) => (
							<a
								key={idx}
								href={`${item.href}`}
								target="_blank"
								rel="noopener noreferrer"
								className="transition-colors hover:brightness-110"
							>
								<item.label className="size-5" />
							</a>
						))}
					</div>
				</div>
			)}
		</div>
	);
}

export default Hero;
