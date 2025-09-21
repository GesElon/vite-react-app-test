import { useState, createContext, Suspense, lazy } from "react";
import ComponentB from "./ComponentB.jsx";
import LoadingGradient from "./LoadingGradient.jsx";

export const UserContext = createContext();

const LazyComponent = lazy(() => import("./LazyComponent.jsx"));

function ComponentA() {
    const [user, setUser] = useState("Bro code");

    return (
        <div>
            <h1>Component A</h1>
            <p>Hello {user}</p>
            <UserContext.Provider value={user}>
                <ComponentB />
            </UserContext.Provider>
            {/* <div style={{width: "256px", height: "256px", borderRadius: '1rem', margin: '1rem'}}>
                <Suspense fallback={<LoadingGradient />}>
                    <LazyComponent />
                </Suspense>
            </div> */}
        </div>
    );
}

export default ComponentA;