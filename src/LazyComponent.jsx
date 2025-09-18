import myImg from "./assets/profile-pic.gif";

function LazyComponent() {
    return (<>
        <img src={myImg} style={{width: "100%", height: "100%"}}></img>
        <figcaption style={{textAlign: 'center'}}>This is a lazily loaded component!</figcaption>
    </>);
}

export default LazyComponent;