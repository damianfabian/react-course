export const update = (x=0,y=0) => {
  return {
    type: 'UPDATE',
    x: x,
    y: y
  }
}

export const sumNumbers = (x,y) => {
  return {
    type: 'SUM',
    x: x,
    y: y
  }
}

export const restNumbers = (x,y) => {
  return {
    type: 'REST',
    x: x,
    y: y
  }
}

export const mulNumbers = (x,y) => {
  return {
    type: 'MULTIPLY',
    x: x,
    y: y
  }
}

export const divNumbers = (x,y) => {
  return {
    type: 'DIVIDE',
    x: x,
    y: y
  }
}