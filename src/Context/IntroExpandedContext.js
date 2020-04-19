import { createContext } from "react";

const IntroExpandedContext = createContext({
    pagesExpanded: [],
    setExpanded: (index) => { }
});

export default IntroExpandedContext;