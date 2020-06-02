export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND': 
      let targetIndex = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: state.friends.slice(0, targetIndex).concat(state.friends.slice(targetIndex+1))}
    default:
      return {friends: state.friends}
  }
}
