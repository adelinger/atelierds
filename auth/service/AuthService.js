import firebase from "firebase/compat/app";
import "firebase/auth";

export const AuthService = {
	loginWithGoogle: async () => {
		const provider = new firebase.auth.GoogleAuthProvider();
		try {
			const userCred = await firebase.auth().signInWithPopup(provider);
			return {
				user: userCred.user,
			};
		} catch (e) {
			return {
				error: e.message,
			};
		}
	},
	logout: async () => {
		await firebase.auth().signOut();
	},

	createUserWithEmailAndPassword: async (email, password) => {
		try {
			const userCred = await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			await userCred.user.sendEmailVerification({
				url: "http://localhost:3000",
			});
			return {
				user: userCred.user,
			};
		} catch (e) {
			return {

				error: e.message,
			};
		}
	},
	signInUserWithEmailAndPassword: async (email, password) => {
		let msg;
		try {
			const userCred = await firebase
				.auth()
				.signInWithEmailAndPassword(email, password);
			return {
				user: userCred.user,

			};
		} catch (e) {
			if (e.code === 'auth/wrong-password') {
				msg = 'Wrong password. Please try again.'
			} else if (e.code === 'auth/too-many-requests') {
				msg = 'You typed the wrong password too many times. Please try again.'
			} else {
				msg = "Login not successful. Please try again."
			}
			return {
				error : msg,
			};
		}
	},
	resetPassword: async (email) => {
		try {
			await firebase
				.auth()
				.sendPasswordResetEmail(email, { url: "http://localhost:3000/login" });
		} catch (e) {
			return e.message;
		}
	},

	deleteAccount: async () => {
		try {
			await firebase.auth().currentUser.delete();
		} catch (e) {
			return e.message;
		}
	},
	updatePassword: async (newPassword) => {
		try {
			await firebase.auth().currentUser.updatePassword(newPassword);
			return "Update successfully";
		} catch (e) {
			return e.message;
		}
	},
};