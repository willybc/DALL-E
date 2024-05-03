import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Typography from "@mui/material/Typography";
import "./Footer.scss";

export function Footer() {
	return (
		<footer className="footer-main">
			<section className="footer-container">
				<InfoOutlinedIcon />
				<Typography className="footer-typo">
					Estamos utilizando las tecnologías <strong>DALL-E</strong> para
					creación de imágenes.
				</Typography>
			</section>
		</footer>
	);
}
