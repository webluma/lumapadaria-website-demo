"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: string | null;
  login: (username: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Verificar se há sessão ativa ao carregar
    const checkAuth = () => {
      if (typeof window !== "undefined") {
        const session = localStorage.getItem("luma_admin_session");
        const username = localStorage.getItem("luma_admin_user");

        if (session === "authenticated" && username) {
          setIsAuthenticated(true);
          setUser(username);
        }
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  const login = (username: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("luma_admin_session", "authenticated");
      localStorage.setItem("luma_admin_user", username);
      setIsAuthenticated(true);
      setUser(username);
    }
  };

  const logout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("luma_admin_session");
      localStorage.removeItem("luma_admin_user");
      setIsAuthenticated(false);
      setUser(null);
      // Redirecionar para a homepage após logout
      window.location.href = "/";
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
