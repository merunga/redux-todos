import React, { Component } from "react";
import { connect } from "react-redux";
import "./Calculator.css";
import { operators } from "../operators";
import {
      enterNumber
    , setOperator
    , clear
    , evaluate
} from "../ducks/calculator";
import CalculatorButton from "./CalculatorButton/CalculatorButton";
import Display from "./Display/Display";
export class Calculator extends Component {
    render() {
        const {
              currentValue, enterNumber, setOperator, clear, evaluate
        } = this.props;
        const numberButtons = [ 7, 8, 9, 4, 5, 6, 1, 2, 3, 0 ].map( ( number ) => (
            <CalculatorButton
                myFunction={ () => enterNumber( number ) }
                key={ number }
                value={ number }
                
            />
        ) );
        return (
            <main className="calculator">
                <Display value={ currentValue } />
                <div className="">
                    <section className="">
                        <CalculatorButton
                            myFunction={clear}
                            value="AC"
                        />
                        { numberButtons }
                       ---
                    </section>
                </div>
            </main>
        );
    }
}
