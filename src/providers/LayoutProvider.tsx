import { Suspense, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Outlet } from "react-router-dom";
import Header from "@/layouts/Header";
import Menu from "@/layouts/Menu";
import Footer from "@/layouts/Footer";
import FallbackLoader from "@/components/fallback/FallbackLoader";
import ScrollToTop from "@/components/ScrollToTop";

const LayoutProvider = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const scrollRef = useRef(null);

	return (
		<div className="font-dm-sans">
			<ScrollToTop scrollRef={scrollRef} />
			<AnimatePresence>
				{openMenu && <Menu openMenu={openMenu} setOpenMenu={setOpenMenu} />}
			</AnimatePresence>
			<div ref={scrollRef} className="wrapper">
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
