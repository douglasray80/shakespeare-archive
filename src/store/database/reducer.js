const initialState = {
	book: null
}

const dbReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'READ_BOOK':
			return {
				book: action.book
			}

		case 'CLOSE_BOOK':
			return initialState

    default:
      return state
  }
}

export default dbReducer
