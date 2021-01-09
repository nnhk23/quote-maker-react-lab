export default function quotes(state = [], action) {
  let quote
  let index
  switch(action.type){
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(s => s.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      return [...state.slice(0, index), 
        Object.assign({}, quote,
        {votes: quote.votes += 1})
      ]
    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      if(quote.votes > 0){
        return [...state.slice(0, index), 
          Object.assign({}, quote,
          {votes: quote.votes -= 1})
        ]
      } else {
        return [...state.slice(0, index), 
          Object.assign({}, quote,
          {votes: quote.votes = 0})
        ]
      }
      break;
    default:
      return state
  }
}
