import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
}

const App = firebase.initializeApp(config)

export const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)


export default App
