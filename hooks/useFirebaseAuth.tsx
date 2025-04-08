import { useEffect } from "react";
import { auth, signInAnonymously, onAuthStateChanged } from "@/lib/firebase";

export function useFirebaseAuth() {
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (!user) {
                signInAnonymously(auth).catch((error) => {
                    console.error("Firebase anonymous sign-in failed:", error);
                });
            }
        });

        return () => unsubscribe();
    }, []);
}
