import _ from 'lodash'

export const setSample = ({sample}) => (dispatch, getState) => {
  dispatch({ type: 'setSample', sample })
}