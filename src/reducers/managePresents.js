let initialState = {
  numberOfPresents: 0
}

let action = {
  type: "INCREASE"
}

export function managePresents(state = initialState, action){
  switch (action.type) {
    case "INCREASE":
      return {
        numberOfPresents: state.numberOfPresents + 1
      }
    default:
      return state
  }
}