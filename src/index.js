import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./index.css";

import store from "./store";

import Calculator from "./components/Calculator";

ReactDOM.render(
	<Provider store={ store }>
		<Calculator />
	</Provider>,
	document.getElementById( 'root' )
);
