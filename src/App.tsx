import './App.css';
import { HomePage } from './pages/HomePage/HomePage';
import { ShowImage } from './pages/ShowImage/ShowImage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

function App() {

	return (
		<Router>
			<div className="main-container">
				<Box className="container-box">
					<Routes>
						<Route path="/" element={<HomePage /> } />
						<Route path="/show-image" element={<ShowImage />} />
					</Routes>
				</Box>
			</div>
		</Router>
	);
}

export default App;
