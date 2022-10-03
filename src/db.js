import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import config from './config'

// Initialize Firebase
const app = initializeApp(config)


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

