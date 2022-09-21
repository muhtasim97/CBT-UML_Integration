import React, { useEffect, useState } from "react";
import Drawio from "./components/drawio/Drawio";
import Utilities from "./components/drawio/Utilities";

function App() {
  const [status, setStatus] = useState(false)
  useEffect(() => { setTimeout(() => {
        setStatus(true)
  }, 1000);}, []);
    return (
        <React.Fragment>
            <Drawio />
            {status && <Utilities />}
        </React.Fragment>
    );
}

export default App;
