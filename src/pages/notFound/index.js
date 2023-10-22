import { useTheme } from "../../contexts/themeContext";
import Header from "../../components/header";
import "./style.css";

export default function NotFound() {
    const { theme } = useTheme()

    return (
        <div className={`notfound-page ${theme}`}>
            <div className="container">
                <Header />
                <div className="not-found">
                    <div className="error">
                        <h2 className="sign">404</h2>
                        <h2>Beyond the borders of the land of papers ...</h2>
                    </div>
                    <h3>No living papers for a thousand miles from here</h3>
                </div>
            </div>
        </div>
    )
}