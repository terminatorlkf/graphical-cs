import { createContext } from "react";

const IntroExpandedContext = createContext({
    pagesExpanded: [],
    setExpanded: (index, value) => { }
});

export default IntroExpandedContext;