export const Keys = {
  'AC': 'AC',
  'Percent': '%',
  'Dot': '.',
  'MoreOrLess': '±',
  'Digit_Zero': '0',
  'Digit_One': '1',
  'Digit_Two': '2',
  'Digit_Three': '3',
  'Digit_Four': '4',
  'Digit_Five': '5',
  'Digit_Six': '6',
  'Digit_Seven': '7',
  'Digit_Eight': '8',
  'Digit_Nine': '9',
  'Ops_Plus': '+',
  'Ops_Minus': '-',
  'Ops_Multiply': 'x',
  'Ops_Divide': '÷',
  'Ops_Equals': '=',
}

export const Operation = {
  'Ops_Plus': '+',
  'Ops_Minus': '-',
  'Ops_Multiply': 'x',
  'Ops_Divide': '÷',
  'Ops_Equals': '='
}

export function getDisplay(prevValue, valueKey, operation, firstOperand) {
  // if (parseFloat(prevValue) > 0 || operation.trim().length > 0) {
  //   return prevValue.concat(valueKey);
  // } else {
  //   return valueKey;
  // }
  // if (operation.trim().length > 0) {
  //   return valueKey;
  // } else if (parseFloat(prevValue) > 0) {
  //   return prevValue.concat(valueKey);
  // } else {
  //   return valueKey;
  // }

  if (operation.trim().length > 0) {
    if (firstOperand.trim().length > 0) {

    }
  } else {
    if (parseFloat(prevValue) > 0) {
      return prevValue.concat(valueKey);
    } else {
      return valueKey;
    }
  }
}

export function getOperation() {

}