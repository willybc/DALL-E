import { Box, ThemeProvider, createTheme } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import "./ImageLoadingCard.scss";

export const ImageLoadingCard = () => {
    const theme = createTheme({
        palette: {
            secondary: {
                main: "#27E686",
            }
        }
    })

    return (
        <>
            <Box className="container-left">
                <p className="text-left">
                    Tu imagen se esta generando
                </p>

                <ThemeProvider theme={theme}>
                    <LinearProgress className="photoLoading-progress" color="secondary" />
                </ThemeProvider>

            </Box>
        </>
    )
}