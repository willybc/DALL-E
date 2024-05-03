import "./ShowImage.scss";
import { ImageResultCard } from "../../components/ImageResultCard/ImageResultCard";
import { ImageLoadingCard } from "../../components/ImageLoadingCard/ImageLoadingCard";
import { ImageErrorCard } from "../../components/ImageErrorCard/ImageErrorCard";

import { ResultContainer } from "../../components/ResultContainer/ResultContainer";

import { DialogError } from "../../components/DialogError/DialogError";

import { useAtom } from 'jotai';
import { loadingAtom, errorAtom, noAptoAtom } from "../../Providers/StateProvider";


export function ShowImage() {
	const [loading] = useAtom(loadingAtom);
	const [error, setError] = useAtom(errorAtom);
	const [noApto, setNoApto] = useAtom(noAptoAtom);

	return (
		<>
			{ ! loading ? (
				<ImageResultCard />
			) : loading ? (
				<ImageLoadingCard />
			) : (
				<ImageErrorCard />
			)}

			<ResultContainer />

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
