import { Box } from "@mui/material";
import "./ImageResultCard.scss";
import { useAtom } from 'jotai';
import { imageAtom } from "../../Providers/ImageProvider";

export const ImageResultCard = () => {
	const [image] = useAtom(imageAtom);

	return (
		<Box className="container-left container-imageResult">
			<img className="image" src={image} alt="Descripción de la imagen" />
		</Box>
	);
};
