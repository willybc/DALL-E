import './App.scss';
import { HomePage } from './pages/HomePage/HomePage';
import { ShowImage } from './pages/ShowImage/ShowImage';
import { Header } from "./components/common/Header/Header";
import { Footer } from "./components/common/Footer/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

function App() {

	return (
		<Router>
			<Header />
			<div className="main-container">
				
				<Box className="container-title">
					<h2>Transforma tus pensamientos en realidad</h2>
					<h3>con nuestra aplicación que utiliza el modelo DALL-E</h3>
				</Box>

				<Box className="container-box">
					<Routes>
						<Route path="/" element={<HomePage /> } />
						<Route path="/show-image" element={<ShowImage />} />
					</Routes>
				</Box>
			</div>
			<Footer />
		</Router>
	);
}

export default App;
