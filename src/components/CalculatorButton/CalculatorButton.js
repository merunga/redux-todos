import React from 'react';
import PropTypes from 'prop-types';
import "./CalculatorButton.css";

function CalculatorButton( { myFunction, value } ) {
	return (
		<button
			onClick={ myFunction } 
		>
			{ value }
		</button>
	);
}

CalculatorButton.propTypes = {
	 myFunction: PropTypes.func	
};

export default CalculatorButton