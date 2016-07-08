const calc = (state, action) => {
  switch (action.type) {
    case 'UPDATE':
      return {
        x: action.x,
        y: action.y,
        action: 'UPDATE',
        result: 0
      }
    case 'SUM':
      return {
        x: action.x,
        y: action.y,
        action: 'SUM',
        result: eval(action.x + "+" + action.y)
      }
    case 'REST':
      return {
        x: action.x,
        y: action.y,
        action: 'REST',
        result: eval(action.x + "-" + action.y)
      }
    case 'MULTIPLY':
      return {
        x: action.x,
        y: action.y,
        action: 'MULTIPLY',
        result: eval(action.x + "*" + action.y)
      }
    case 'DIVIDE':
      return {
        x: action.x,
        y: action.y,
        action: 'DIVIDE',
        result: eval(action.x + "/" + action.y)
      }
    default:
      return {
        x: 0,
        y: 0,
        action: 'INIT',
        result: 0
      }
  }
}

export default calc