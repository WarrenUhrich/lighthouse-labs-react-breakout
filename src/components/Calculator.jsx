import {useEffect, useState} from 'react';

export default function Calculator ({heading, additionMessage, subtractionMessage, multiplicationMessage, divisionMessage}) {
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(0);
    
    useEffect(() => {
        setResult(() => {
            switch(operator) {
                case '+':
                    return Number(operand1) + Number(operand2);
                    break;
                case '-':
                    return operand1 - operand2;
                    break;
                case '*':
                    return operand1 * operand2;
                    break;
                case '/':
                    return operand1 / operand2;
                    break;
            }
        });
    }, [operand1, operand2, operator]);

    return (
        <form onSubmit={event => {event.preventDefault();}}>
            <h2>{heading}</h2>
            <label>
                Operand 1:
                <input
                    id="operand-1"
                    type="number"
                    value={operand1}
                    onChange={event => setOperand1(event.target.value)}
                />
            </label>
            <label>
                Operator:
                <select
                    onChange={event => setOperator(event.target.value)}
                >
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">&times;</option>
                    <option value="/">&divide;</option>
                </select>
            </label>
            <label>
                Operand 2:
                <input
                    id="operand-2"
                    type="number"
                    value={operand2}
                    onChange={event => setOperand2(event.target.value)}
                />
            </label>
            <button onClick={() => {setOperand1(0); setOperand2(0);}}>Clear</button>
            <output for="operand-1 operand-2">
                {operator === '+' && additionMessage}
                {operator === '-' && subtractionMessage}
                {operator === '*' && multiplicationMessage}
                {operator === '/' && divisionMessage}
                {result}
            </output>
        </form>
    );
}
