import { createContext, useState } from "react";


export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const [tf, setTf] = useState(true)
    const info = {
        tf,
        setTf
    }
    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;