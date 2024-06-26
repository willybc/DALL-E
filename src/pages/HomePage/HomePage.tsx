import { useState } from "react";
import { ImagePreviewCard } from "../../components/ImagePreviewCard/ImagePreviewCard";
import { ImageLoadingCard } from "../../components/ImageLoadingCard/ImageLoadingCard";
import { ImageErrorCard } from "../../components/ImageErrorCard/ImageErrorCard";
import { TextGenerator } from "../../components/TextGenerator/TextGenerator";
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import { isEditableAtom } from "../../Providers/modeProvider";
import { loadingAtom, errorAtom, noAptoAtom, limitExceededAtom } from "../../Providers/StateProvider";
import { DialogError } from "../../components/DialogError/DialogError";
import { imageAtom } from "../../Providers/ImageProvider";

import "./HomePage.scss";


export function HomePage() {
	const navigate = useNavigate();
	const [, setEditable] = useAtom(isEditableAtom);

	// 0 para ver el flujo de una sola imagen
	// 1 para ver el flujo de una sola imagen y posible edición
	const [flujo] = useState(1)

	const [loading, setLoading] = useAtom(loadingAtom);
	const [error, setError] = useAtom(errorAtom);
	const [noApto, setNoApto] = useAtom(noAptoAtom);
	const [limitExceeded] = useAtom(limitExceededAtom);
	
	const [, setImage] = useAtom(imageAtom);

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
				if (flujo == 1) {
					setEditable(true)
				}
				selectRandomImage()
				navigate("/show-image");
			}
		}, 2000);
	};

	const listImages = [
		"/src/assets/image1.webp",
		"/src/assets/image2.webp",
		"/src/assets/image3.webp",
		"/src/assets/image4.webp",
		"/src/assets/image5.webp",
		"/src/assets/image6.webp",
		"/src/assets/image7.webp",
		"/src/assets/image8.webp",
	]

	const selectRandomImage = () => {
        const randomIndex = Math.floor(Math.random() * listImages.length);
        const randomImage = listImages[randomIndex];
        setImage(randomImage);
        listImages.splice(randomIndex, 1);
    }

	return (
		<>
			{ ! loading ? (
				<ImagePreviewCard />
			) : loading ? (
				<ImageLoadingCard />
			) : (
				<ImageErrorCard />
			)}

			<div className="inputs-container">
				<TextGenerator 
					onButtonClick={createImage} 
					isButtonDisabled={loading} 
					isExceeded={limitExceeded}
				/>
			</div>

			<DialogError 
				title="Algo salió mal.."
				description="No pudo crearse la imagen, por favor vuelve a intentarlo."
				isOpen={error} 
				onClose={() => setError(false)}
            />

			<DialogError 
				title="No puedo crear eso"
				description="Lo que me pides no esta bien, por favor prueba con otra cosa."
				isOpen={noApto} 
				onClose={() => setNoApto(false)}
            />

			
		</>
	);
}
