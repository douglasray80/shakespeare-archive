import firebase, { firestore } from '../../firebase'

const openBook = book => ({
	type: 'READ_BOOK',
	book
})

export const closeBook = () => ({
	type: 'CLOSE_BOOK'
})

export const getBook = (book) => dispatch => {
	const bookRef = firestore.collection('plays').doc(book)

	return bookRef.get().then(function(doc) {
		if (doc.exists) {
      dispatch(openBook(doc.data()))
    } else {
      console.log('No such document!');
    }
	}).catch(function(error) {
	    console.log('Error getting document:', error);
	});
}
