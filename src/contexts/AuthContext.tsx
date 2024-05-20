import { createContext, useCallback, useState, useMemo } from 'react';
import { AuthService } from '../services/api/AuthService';

interface IAuthContextData {
  isAuthenticated: boolean;
  signIn: (id: string, password: string) => Promise<string | void>;
  signOut: () => void;
}

const AuthContext = createContext({} as IAuthContextData);

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [accessToken, setAccessToken] = useState<string>();

  const handleSignIn = useCallback(async (id: string, password: string) => {
    const result = await AuthService.authenticate(id, password);
    if (result instanceof Error) {
      return result.message;
    } else {
      setAccessToken(result.accessToken);
    }
  }, []);

  const handleSignOut = useCallback(() => setAccessToken(undefined), []);

  const isAuthenticated = useMemo(() => !!accessToken, [accessToken]);
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, signIn: handleSignIn, signOut: handleSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
