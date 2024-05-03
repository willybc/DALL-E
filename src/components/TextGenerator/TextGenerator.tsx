import { Box, TextField, Typography, Button } from "@mui/material";
import { useAtom } from 'jotai';
import { isEditableAtom } from "../../Providers/modeProvider";
import { textToGenerateAtom } from "../../Providers/TextToGenerateProvider";
import { PrimaryButton } from "../common/PrimaryButton/PrimaryButton";
import "./TextGenerator.scss";

export const TextGenerator = ({ 
	onButtonClick, 
	isButtonDisabled,
	isExceeded,
	onButtonStartAgain
} : {
	onButtonClick: () => void;
	isButtonDisabled: boolean;
	isExceeded: boolean;
	onButtonStartAgain?: () => void;
}) => {
	const [isEditable] = useAtom(isEditableAtom);
	const [textToGenerate, setTextToGenerate] = useAtom(textToGenerateAtom)

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setTextToGenerate(inputValue);
	}

	return (
		<>
			<Box className={`container-textGenerator ${isEditable ? 'with-edit-mode' : ''}`}>
				<Box className="container-textField">
					{!isEditable ? (
						<Typography className="textGenerator-title">
							Escribe aquí lo que quieras generar
						</Typography>
					): isExceeded ? (
						<Typography className="text-add text-danger">
							Alcanzaste el limite de cambios. Vuelve a empezar.
						</Typography>
					) : (
						<Typography className="text-add">
							Prueba agregando algo más a la imagen ya creada.
						</Typography>
					)}

					<TextField
						className="textGenerator-textField"
						multiline
						rows={5}
						placeholder="Puedes probar con un estilo de ilustración, un sentimiento o una hora del día."
						variant="filled"
						sx={{
							':before': { borderBottomColor: 'red' },
								// underline when selected
							':after': { borderBottomColor: 'red' },
						}}
						value={textToGenerate}
						onChange={handleInputChange}
					/>
				</Box>
			</Box>

			{isEditable ? (
				<Box className="buttons-container">
					<Button className="start-again-button" onClick={onButtonStartAgain}>Volver a empezar</Button>
					<PrimaryButton value="crear" onClick={onButtonClick} disabled={isButtonDisabled} />
				</Box>
				) : (
				<PrimaryButton
					value="crear"
					onClick={onButtonClick}
					disabled={isButtonDisabled}
				/>
			)}
		</>
	);
};
