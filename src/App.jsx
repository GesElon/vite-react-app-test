import ComponentA from "./ComponentA";
import PixelatedImg  from "./PixelatedImg";

import LazyImage from "./LazyImage";

function App() {
    return (
        <>
            <ComponentA />
            <p>Here</p>
            <LazyImage blurhash={"U27V0uIC01?t8zxae?tQ01R8?aNG4V?@?[Ri"} src={"Leaves-4K.jpg"} width={400} height={400} />
            <LazyImage blurhash={"Ug5Qw=VsW=aep{e.aebHY7ofjFbbXnkCn$j["} src={"mountain-lake.jpg"} width={400} height={400} />
            <LazyImage blurhash={"U44eW:7MyZx_E0veVrRNIR$fV?R%-rK+tSxw"} src={"cybercity.jpg"} width={400} height={400} />
            <LazyImage blurhash={"U]HL^|axM{ay~qayRkay-VbHoyj[WBj[s:j["} src={"blueish-valley.jpg"} width={400} height={400} />
        </>
    );
}

export default App;