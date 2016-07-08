const calc = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        numbers: action.numbers,
        action: 'UPDATE',
        result: 0
      }
    case 'SUM':
      return {
        numbers: action.numbers,
        action: 'SUM',
        result: eval(action.numbers[0].value + "+" + action.numbers[1].value)
      }
    case 'REST':
      return {
        numbers: action.numbers,
        action: 'REST',
        result: eval(action.numbers[0].value + "-" + action.numbers[1].value)
      }
    case 'MULTIPLY':
      return {
        numbers: action.numbers,
        action: 'MULTIPLY',
        result: eval(action.numbers[0].value + "*" + action.numbers[1].value)
      }
    case 'DIVIDE':
      return {
        numbers: action.numbers,
        action: 'DIVIDE',
        result: eval(action.numbers[0].value + "/" + action.numbers[1].value)
      }
    default:
      return {
        numbers: [],
        action: 'INIT',
        result: 0
      }
  }
}

export default calc