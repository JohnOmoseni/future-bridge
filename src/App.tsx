import QueryProvider from "./providers/QueryProvider";
import AppRouter from "./AppRouter";
import { Toaster } from "./components/ui/sonner";

import "@/styles/globals.css";
import "@/styles/index.css";
import "@/styles/utilities.css";

function App() {
	return (
		<QueryProvider>
			<AppRouter />
			<Toaster richColors />
		</QueryProvider>
	);
}

export default App;
