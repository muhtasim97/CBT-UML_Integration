import React from "react";
import { Helmet } from "react-helmet";

function Drawio() {
  return (
    <React.Fragment>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="drawio/styles/grapheditor.css"
        />
        <script type="text/javascript" src="drawio/urlParam.js" />
        <script type="text/javascript" src="drawio/js/Init.js" />
        <script type="text/javascript" src="drawio/deflate/pako.min.js" />
        <script type="text/javascript" src="drawio/deflate/base64.js" />
        <script type="text/javascript" src="drawio/jscolor/jscolor.js" />
        <script
          type="text/javascript"
          src="drawio/sanitizer/sanitizer.min.js"
        />
        <script
          type="text/javascript"
          src="drawio/javascript/src/js/mxClient.js"
        />
      </Helmet>
      <div className="geEditor"></div>
    </React.Fragment>
  );
}

export default Drawio;
