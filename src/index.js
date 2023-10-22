import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import MyRouter from "./myRouter";
import { ShoppingCartProvider } from "./contexts/shoppingCartContext";
import { ThemeProvider } from "./contexts/themeContext";
import globalStyle from './globalStyle.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<div>
		<ThemeProvider>
			<ShoppingCartProvider>
				<MyRouter />
			</ShoppingCartProvider>
		</ThemeProvider>
	</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
