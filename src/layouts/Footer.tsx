import { footerLinks, socials } from "@/constants";
import { ArrowRight, FooterLogo as Logo } from "@/constants/icons";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer mt-auto bg-[#131623] text-grey-100">
			<div className="md:row-flex-btwn mt-8 flex flex-col !items-start gap-12 p-6 px-6 pb-[8%] pt-6 sm:pt-[4%] md:gap-6 md:px-[4%]">
				<div className="flex-column w-11/12">
					<Link
						to="/"
						className="row-flex group relative mt-1 block gap-3 md:!justify-start"
					>
						<Logo className="h-fit w-fit" />
					</Link>
					<p className="mt-3 text-base leading-6 md:mt-5 md:w-[35ch]">
						Future Bridge is a team of educators, business developers and tech
						talents with a shared dream of transforming the way students learn,
						teachers teach, and schools operate.
					</p>
				</div>

				<div className="flex-column flex w-full justify-between gap-12 md:flex-row">
					<div className="w-full">
						{footerLinks.map((item) => {
							return (
								<div key={item.name}>
									<h3 className="text-lg font-semibold uppercase text-background-100">
										{item.name}
									</h3>
									<ul className="flex-column mt-4 gap-4 text-base">
										{item.dropdown?.map((item, idx) => (
											<Link
												key={idx}
												to={`${item.href}`}
												className="hover:brightness-750 transition-colors hover:text-background-100"
											>
												{item.link}
											</Link>
										))}
									</ul>
								</div>
							);
						})}
					</div>

					<div className="flex-column w-full gap-5">
						<h3 className="text-lg uppercase text-background-100">
							Get in touch
						</h3>

						<div className="row-flex-start gap-5">
							<p className="row-flex-start gap-1 text-sm brightness-75">
								Socials
								<ArrowRight />
							</p>
							<div className="row-flex-start gap-x-4 gap-y-3">
								{socials?.map((social, idx) => (
									<a
										key={idx}
										href={social.href}
										title={social.tag}
										target="_blank"
										rel="noopener noreferrer"
										className="group transition hover:scale-105"
									>
										<social.label className="size-5 text-grey transition-colors group-hover:text-foreground-variant" />
									</a>
								))}
							</div>
						</div>

						<div>
							<p className="text-sm font-light brightness-75">Phone:</p>
							<p className="row-flex-start !flex-wrap gap-x-1.5 text-xs">
								<span> +2347014075556 </span>
								<span>+2347038688683</span>
							</p>
						</div>
						<div>
							<p className="text-sm font-light brightness-75">Email:</p>
							<a
								href="mailto:info@futurebridge.com"
								className="text-sm !underline"
							>
								info@futurebridge.ng
							</a>
						</div>
					</div>
				</div>
			</div>

			<div className="mx-6 flex border-t border-grey px-3 py-5">
				<span className="row-flex-start text-center text-sm leading-5 max-md:mx-auto">
					<Link
						to="#"
						className="border-right border-secondary pr-3 text-foreground-variant transition hover:underline"
					>
						Terms of Service
					</Link>{" "}
					<Link
						to="#"
						className="border-l border-secondary px-3 text-foreground-variant transition hover:underline"
					>
						Privacy Policy
					</Link>{" "}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
