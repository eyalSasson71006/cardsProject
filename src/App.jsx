import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProvider";
import CustomThemeProvider from "./providers/CustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";
import SearchProvider from "./providers/SearchProvider";
import "./index.css"

function App() {
	return (
		<BrowserRouter>
			<CustomThemeProvider>
				<SnackbarProvider>
					<UserProvider>
						<SearchProvider>
							<Layout>
								<Router />
							</Layout>
						</SearchProvider>
					</UserProvider>
				</SnackbarProvider>
			</CustomThemeProvider>
		</BrowserRouter>
	);
}

export default App;
