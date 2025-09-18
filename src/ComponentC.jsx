import { useContext } from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentC() {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Component C</h1>
            <p>Goodbye {user}</p>
        </div>
    );
}

export default ComponentC;