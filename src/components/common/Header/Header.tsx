import "./Header.scss";
import { useNavigate } from "react-router-dom";

export function Header() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/')
    };

    return (
        <header className="header-main">
            <section className="header-container">
                <h3 >
                    <a onClick={handleRedirect}>APP-DALL-E</a>
                </h3>
            </section>
        </header>
    );
}
