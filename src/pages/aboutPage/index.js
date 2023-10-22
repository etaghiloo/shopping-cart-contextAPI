import { useTheme } from "../../contexts/themeContext";
import Header from "../../components/header";
import "./style.css";

export default function AboutPage() {
    const { theme } = useTheme()
    
    return (
        <div className={`about-page ${theme}`}>
            <div className="container">
                <Header />
                <div className="about">
                    <h3>We fold paper in our free time and one day we thouht why not sell them to those who enjoy having a piece of handicraft out of paper laying around.</h3>
                    <h3>And look! here you are. :)</h3>
                </div>
            </div>
        </div>
    )
}