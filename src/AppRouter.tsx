import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/(website1)/(home)/page";
import About from "./app/(website1)/about/page";
import GetStarted from "./app/(website1)/get-started/page";
import GetStartedSuccess from "./app/(website1)/get-started/success/page";
import FAQs from "./app/(website1)/faqs/page";
import Contact from "./app/(website1)/contact/page";
import LayoutProvider from "./providers/LayoutProvider";
import ScrollToTop from "./components/ScrollToTop";

const AppRouter = () => {
	return (
		<Router>
			<ScrollToTop />
			<Routes>
				<Route element={<LayoutProvider />}>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<Home />} />

					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/get-started">
						<Route index element={<GetStarted />} />
						<Route path="success" element={<GetStartedSuccess />} />
					</Route>
					<Route path="/faqs" element={<FAQs />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
