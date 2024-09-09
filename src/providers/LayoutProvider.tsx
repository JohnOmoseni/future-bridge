import { ReactNode, Suspense, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Menu from "@/layouts/Menu";
import Footer from "@/layouts/Footer";
import FallbackLoader from "@/components/fallback/FallbackLoader";

const LayoutProvider = ({ children }: { children?: ReactNode }) => {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<div className="font-dm-sans">
			<AnimatePresence>
				{openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
			</AnimatePresence>
			<div className="wrapper">
				<Header setOpenMenu={setOpenMenu} />

				<Suspense fallback={<FallbackLoader />}>
					<Outlet />
				</Suspense>

				<Footer />
			</div>
		</div>
	);
};

export default LayoutProvider;
