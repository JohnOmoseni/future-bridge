import { Route, Routes } from "react-router-dom";
import Home from "./app/(website2)/(home)/page";
import Contact from "./app/(website2)/contact/page";
import About from "./app/(website2)/about/page";
import ApplicationSuccess from "./app/(website2)/application/success";
import ApplicationPage from "./app/(website2)/application/page";
import Calendar from "./app/(website2)/calendar/page";
import Gallery from "./app/(website2)/gallery/page";
import News from "./app/(website2)/news/page";
import WelcomeNote from "./app/(website2)/news/WelcomeNote";
import DashboardLayout from "./layouts/DashboardLayout";

const AppRouter2 = () => {
	return (
		<Routes>
			<Route element={<DashboardLayout />}>
				<Route index element={<Home />} />
				<Route path="*" element={<Home />} />

				<Route path="about" element={<About />} />
				<Route path="contact" element={<Contact />} />
				<Route path="calendar" element={<Calendar />} />
				<Route path="gallery" element={<Gallery />} />

				<Route path="news">
					<Route index element={<News />} />
					<Route path="welcome" element={<WelcomeNote />} />
				</Route>

				<Route path="application">
					<Route index element={<ApplicationPage />} />
					<Route path="success" element={<ApplicationSuccess />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default AppRouter2;
