import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from "@mui/material";
import "./PrimaryButton.scss";

const theme = createTheme({
	palette: {
		primary: {
			main: "#E91E62",
		},
	},
});

export const PrimaryButton = ({
	value,
	onClick,
	disabled,
}: {
	value: string;
	onClick: () => void;
	disabled?: boolean;
}) => {
	
	const buttonStyle = {
		color: "black",
		fontWeight: "700",
		alignSelf: "flex-end",
	};

	return (
		<ThemeProvider theme={theme}>
			<Button
				style={buttonStyle}
				color="primary"
				variant="contained"
				classes={{ disabled: "disabled" }}
				onClick={onClick}
				disabled={disabled}
			>
				{value}
			</Button>
		</ThemeProvider>
	);
};
