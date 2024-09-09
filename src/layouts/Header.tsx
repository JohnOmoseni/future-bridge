import { Logo, MenuIcon } from "@/constants/icons";
import { Button } from "@/components/CustomButton";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

type HeaderProps = {
	setOpenMenu?: Dispatch<SetStateAction<boolean>>;
};

function Header({ setOpenMenu }: HeaderProps) {
	const { pathname } = useLocation();
	const isSuccessPage = pathname.includes("get-started/success");

	return (
		<div className="relative z-10 max-h-[75px] min-h-[68px] w-full px-3 py-3 shadow-sm md:pb-0">
			<div className="row-flex-btwn mx-auto gap-4 sm:w-[96%]">
				<Link to="/" className="">
					<Logo className="h-fit w-fit max-md:mx-auto max-sm:max-w-[260px]" />
				</Link>

				<div
					className={cn(isSuccessPage ? "hidden" : "flex w-full justify-end")}
				>
					<div
						className="icon group mt-[0.93rem] sm:!hidden"
						onClick={() => setOpenMenu && setOpenMenu(true)}
					>
						<MenuIcon
							className="size-6 transition-all group-hover:scale-95"
							color="#333"
						/>
					</div>

					<Link to="/get-started" className={cn("sm:row-flex hidden")}>
						<Button
							title="Get Started"
							className="!min-w-[180px] rounded-lg px-5 sm:px-7"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Header;
