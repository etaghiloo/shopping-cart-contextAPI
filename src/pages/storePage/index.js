import { useTheme } from "../../contexts/themeContext";
import Header from "../../components/header";
import StoreItemsList from "../../components/storeItemsList";
import "./style.css";

export default function StorePage() {
    const { theme } = useTheme()

    return (
        <div className={`store-page ${theme}`}>
            <Header />
            <StoreItemsList />
        </div>
    )
}