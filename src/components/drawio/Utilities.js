import React from "react";
import { Helmet } from "react-helmet";

function Utilities() {
    return (
        <Helmet>
            <script type="text/javascript" src="drawio/js/EditorUi.js" />
            <script type="text/javascript" src="drawio/js/Editor.js" />
            <script type="text/javascript" src="drawio/js/Sidebar.js" />
            <script type="text/javascript" src="drawio/js/Graph.js" />
            <script type="text/javascript" src="drawio/js/Format.js" />
            <script type="text/javascript" src="drawio/js/Shapes.js" />
            <script type="text/javascript" src="drawio/js/Actions.js" />
            <script type="text/javascript" src="drawio/js/Menus.js" />
            <script type="text/javascript" src="drawio/js/Toolbar.js" />
            <script type="text/javascript" src="drawio/js/Dialogs.js" />
            <script type="text/javascript" src="drawio/loader.js" />
        </Helmet>
    );
}

export default Utilities;
