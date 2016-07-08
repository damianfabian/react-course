export const update = (numbers) => {
  return {
    type: 'UPDATE',
    numbers: numbers
  }
}

export const sumNumbers = (numbers) => {
  return {
    type: 'SUM',
    numbers: numbers
  }
}

export const restNumbers = (numbers) => {
  return {
    type: 'REST',
    numbers: numbers
  }
}

export const mulNumbers = (numbers) => {
  return {
    type: 'MULTIPLY',
    numbers: numbers
  }
}

export const divNumbers = (numbers) => {
  return {
    type: 'DIVIDE',
    numbers: numbers
  }
}