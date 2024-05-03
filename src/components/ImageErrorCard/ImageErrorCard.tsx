import "./ImageErrorCard.scss"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

export const ImageErrorCard = () => {
    return (
        <>
            <div className="container-left">
                <SentimentVeryDissatisfiedIcon fontSize="large"/>
                <p className="text-left">
                    Algo salió mal. <br />
                    Vuelve a intentarlo
                </p>
            </div>
        </>
    )
}