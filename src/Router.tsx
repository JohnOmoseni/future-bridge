import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppRouter from "./AppRouter";
import AppRouter2 from "./AppRouter2";

const MainRouter = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/*" element={<AppRouter />} />
					<Route path="/dashboard/*" element={<AppRouter2 />} />
				</Routes>
			</Router>
		</>
	);
};

export default MainRouter;
