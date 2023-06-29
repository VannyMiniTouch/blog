import { createContext, useContext, useReducer } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const values = {
    name: "test",
    email: "test@gmail.com",
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};


//Reducer Test here

const reducer = (state, action)=>{
    if(action.type === "incremented_age"){
        return {
            age: state.age +1
        }
    }
    throw Error("Unknow action.")
}

export const Counter = () =>{
    const [state, dispatch] = useReducer(reducer, {age:42});
    return(
        <>
            <button onClick={()=>{
                dispatch({type:'incremented_age'})
            }}>increament_age</button>
            <p>Hello! You are {state.age}.</p>
        </>
    )
}
