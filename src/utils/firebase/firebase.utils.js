import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCd5uAUsWnEfKu2AxlqxO3oVxBb9rSAxYo",
    authDomain: "justmestyles-db.firebaseapp.com",
    projectId: "justmestyles-db",
    storageBucket: "justmestyles-db.appspot.com",
    messagingSenderId: "759134213770",
    appId: "1:759134213770:web:b964e4917b23dc8ba9ff73"
};

const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error){
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef
}