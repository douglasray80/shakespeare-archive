const initialState = {
	posts: null,
	postDetail: null,
	tags: {}
}

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
		case 'POSTS_UPDATED':
			return {
				...state,
				posts: action.posts
			}

		case 'POPULATE_TAGS':
			return {
				...state,
				tags: action.data
			}

		case 'SHOW_POST_DETAIL':
			return {
				...state,
				postDetail: action.payload
			}

    default:
      return state
  }
}

export default contentReducer
