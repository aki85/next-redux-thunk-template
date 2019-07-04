const initialState = {
  sample: 'samples'
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'setSample':
    return {
      ...state,
      sample: action.sample
    }
  }
  return state
}