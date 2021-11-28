import {appState} from './states'

const app = (state = appState, {type, value}: {type: string, value: any}) => {
  switch (type) {
    case 'SET_COUNT':
      console.log('SET_COUNT', value)
      return {...state, count: state.count + value}
    default:
      return state
  }
}

export {
  app
}