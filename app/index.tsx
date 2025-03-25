import { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function IndexPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) return null; // Prevent flickering

  return <Redirect href={isAuthenticated ? "/(tabs)" : "/(auth)/sign-in"} />;
}
