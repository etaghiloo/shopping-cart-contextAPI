import { useTheme } from "../../contexts/themeContext";
import Header from "../../components/header";
import "./style.css";

export default function HomePage() {
    const { theme } = useTheme()

    return (
        <div className={`home-page ${theme}`}>
            <div className="container">
                <Header />
                <div className="home">
                    <h2>Hello :)</h2>
                    <h3>Welcome to our origami shop.</h3>
                    <h3>Don't be a stranger and look around.</h3>
                </div>
            </div>
        </div>
    )
}