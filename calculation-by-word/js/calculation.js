const operation = prompt('Which operation you`d like to do? \n add (+) sub (-) mult (*) div (/)')
const firstOperand = +prompt('Enter first operand')
const secondOperand = +prompt('Enter second operand')

switch (operation) {
    case 'add':
        alert(`${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`)
        break
    case 'sub':
        alert(`${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`)
        break
    case 'mult':
        alert(`${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`)
        break
    case 'div':
        alert(`${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`)
        break
    default:
        alert('Wrong operation type')
}
