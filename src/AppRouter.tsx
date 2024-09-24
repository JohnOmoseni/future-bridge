import { Route, Routes } from "react-router-dom";
import Home from "./app/(website1)/(home)/page";
import About from "./app/(website1)/about/page";
import GetStarted from "./app/(website1)/get-started/page";
import GetStartedSuccess from "./app/(website1)/get-started/success/page";
import FAQs from "./app/(website1)/faqs/page";
import Contact from "./app/(website1)/contact/page";
import MainLayout from "./layouts/MainLayout";

const AppRouter = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="*" element={<Home />} />

				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="get-started">
					<Route index element={<GetStarted />} />
					<Route path="success" element={<GetStartedSuccess />} />
				</Route>
				<Route path="faqs" element={<FAQs />} />
			</Route>
		</Routes>
	);
};

export default AppRouter;
