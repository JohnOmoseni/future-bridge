import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { cn } from "@/lib/utils";
import { feature3_sm } from "@/constants/icons";

const defaultOptions = {
	reverse: false, // reverse the tilt direction
	max: 15, // max tilt rotation (degrees)
	perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
	scale: 1.02, // 2 = 200%, 1.5 = 150%, etc..
	speed: 1000, // Speed of the enter/exit transition
	transition: true, // Set a transition on enter/exit.
	axis: null, // What axis should be disabled. Can be X or Y.
	reset: true, // If the tilt effect has to be reset on exit.
	easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

export const FeatureCard = ({
	title,
	subtitle,
	idx,
	img,
}: {
	title: string;
	subtitle: string;
	img: any;
	idx: number;
}) => {
	return (
		<Tilt options={defaultOptions} style={{ width: "100%" }}>
			<motion.div
				initial="hidden"
				whileInView="animate"
				viewport={{ once: true, amount: 0.2 }}
				custom={idx}
				className={cn(
					"h-full w-full gap-2 rounded-xl border border-border bg-background-100 px-6 pb-4 pt-5 shadow-sm transition-all"
				)}
			>
				<h3 className="">{title}</h3>
				<p className="relative my-3 text-base max-sm:min-w-[25ch]">
					{subtitle}
				</p>
				<div className="relative mt-4 h-[250px] w-full overflow-hidden rounded-md bg-background-300 p-4">
					<div className="absolute left-4 top-4 size-full lg:size-auto md:left-8">
						<img
							src={img}
							alt=""
							className={cn(
								"!top-1.5 !h-[90%] w-full object-center object-fill",
								idx === 3 && "hidden sm:block"
							)}
						/>

						{idx === 3 && (
							<img
								src={feature3_sm}
								alt=""
								className="!top-1.5 !h-[90%] w-full block sm:hidden object-center object-fill"
							/>
						)}
					</div>
				</div>
			</motion.div>
		</Tilt>
	);
};
