import { Logo } from "@/constants/icons2";
import { MenuIcon } from "@/constants/icons";
import { Button } from "@/components/CustomButton";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "@/constants/dashboard-index";
import NavLinks from "./NavLinks";

type HeaderProps = {
	setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

function Header2({ setOpenMenu }: HeaderProps) {
	const { pathname } = useLocation();
	const isSuccessPage = pathname.includes("application/success");

	return (
		<div className="relative z-10 min-h-[70px] w-full px-3 py-1 shadow-sm">
			<div className="row-flex-btwn mx-auto gap-4 sm:w-[96%]">
				<Link to="/" className="">
					<Logo className="h-fit w-fit max-md:mx-auto max-sm:max-w-[260px]" />
				</Link>

				<div className="lg:row-flex hidden gap-8 px-3">
					{navLinks?.map((link, idx) => (
						<NavLinks key={idx} {...link} />
					))}
				</div>

				<div className={cn(isSuccessPage ? "hidden" : "flex justify-end")}>
					<div
						className="icon group mt-[14px] sm:!hidden"
						onClick={() => setOpenMenu && setOpenMenu(true)}
					>
						<MenuIcon
							className="size-6 transition-all group-hover:scale-95"
							color="#333"
						/>
					</div>

					<Link to="#" className={cn("sm:row-flex hidden")}>
						<Button
							title="Portal"
							className="!min-w-[180px] rounded-lg px-5 sm:px-7"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header2;
