"use client"

import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '@/lib/firebase';
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {user !== undefined ? children : null}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider />');

  const provider = new GoogleAuthProvider();

  const loginWithGoogle = async () => {
        try {
            await signInWithPopup(auth, new GoogleAuthProvider());
        } catch (error) {
            if (error.code === "auth/popup-closed-by-user") {
            console.log("User closed the popup without signing in.");
            } else {
            console.error("Google sign-in error:", error);
            }
        }
    };

  const logout = async () => {
    await signOut(auth);
  };

  return {
    user: ctx.user,
    loginWithGoogle,
    logout,
  };
};
