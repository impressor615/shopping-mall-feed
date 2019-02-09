import "@/assets/styles/main.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "@/components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("app") as HTMLElement,
);