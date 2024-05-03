import "./ResultContainer.scss";
import { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

import DownloadIcon from '@mui/icons-material/Download';

import { TextGenerator } from "../TextGenerator/TextGenerator";

import { useAtom } from 'jotai';
import { useNavigate } from "react-router-dom";
import { isEditableAtom } from "../../Providers/modeProvider";
import { imageAtom } from "../../Providers/ImageProvider";
import { textToGenerateAtom } from "../../Providers/TextToGenerateProvider";
import { loadingAtom, errorAtom, noAptoAtom, limitExceededAtom } from "../../Providers/StateProvider";

export const ResultContainer = () => {
	const navigate = useNavigate();

	const [isEditable, setEditable] = useAtom(isEditableAtom);

	const [textToGenerate, setTextToGenerate] = useAtom(textToGenerateAtom);
	const [initialText, setInitialText] = useState("");

	const [loading, setLoading] = useAtom(loadingAtom);
	const [, setError] = useAtom(errorAtom);
	const [, setNoApto] = useAtom(noAptoAtom);
	const [limitExceeded, setLimitExceeded] = useAtom(limitExceededAtom);
	const [counter, setCounter] = useState(0);

	const [, setImage] = useAtom(imageAtom);

	useEffect(() => {
		setInitialText(textToGenerate);
	}, []);

	const downloadImage = () => {};

	const createImage = () => {
		setLoading(true);
		setError(false);

		// Obtengo un valor aleatorio del 1 al 10
		const randomValue = Math.ceil(Math.random() * 10);

		// Simulacion de carga
		setTimeout(() => {
			setLoading(false);

			if(randomValue < 1) {
				setError(true);
			} else if (randomValue > 9) {
				setNoApto(true);
			}
			else {
				// Contador para simulacion de limite excedido
				setCounter((prevCounter) => prevCounter + 1);
				if (counter >= 1) {
					setLimitExceeded(true);
				}
				setInitialText(textToGenerate);
				setImage("/src/assets/example2.png")
			}
		}, 2000);
	};

	const startAgain = () => {
		setTextToGenerate("");
		// setImage("");
		setImage("/src/assets/example.png");
		setEditable(false);
		// Seteamos el false el limite, para q se vuelva a usar el contador
		setLimitExceeded(false);
		navigate('/')
	}

	return (
		<Box className="result-container">
			<Typography className="result-desc">
				"{ initialText }"
			</Typography>
			
			<Box className={`download-container ${isEditable ? 'with-edit-mode' : ''}`}>
				{!isEditable && (
					<Button className="start-again-button" onClick={startAgain}>Volver a empezar</Button>
				)}

				<Button className="start-again-button button-download" onClick={downloadImage}>
					<DownloadIcon />
					Descargar
				</Button>
				{/* <PrimaryButton value="descargar" onClick={downloadImage} /> */}
					
				{isEditable && (
					<>
						<TextGenerator 
							onButtonClick={createImage} 
							isButtonDisabled={loading || limitExceeded}
							isExceeded={limitExceeded}	
							onButtonStartAgain={startAgain}
						/>
					</>
				)}

			</Box>
		</Box>
	);
};

