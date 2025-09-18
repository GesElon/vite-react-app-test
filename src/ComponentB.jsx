import ComponentC from "./ComponentC.jsx";

function ComponentB() {
    return (
        <div>
            <h1>Component B</h1>
            <p>Halfway</p>
            <ComponentC />
        </div>
    );
}

export default ComponentB;