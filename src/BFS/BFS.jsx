import React, { useState, useContext } from "react";
import { Fab } from "@rmwc/fab";
import { ThemeProvider } from "@rmwc/theme";
import { Tooltip } from "@rmwc/tooltip";
import { Button } from "@rmwc/button";
import SmoothCollapse from "react-smooth-collapse";
import IntroExpandedContext from "../Context/IntroExpandedContext";

import '@rmwc/theme/styles';
import 'material-design-icons';
import '@rmwc/fab/styles';
import '@rmwc/icon/styles';
import '@rmwc/tooltip/styles';
import '@rmwc/button/styles';
import './BFS.css'

const BFS = () => {
    const IntroExpanded = useContext(IntroExpandedContext);

    // const isOpened = IntroExpanded.pagesExpanded[0];
    // const setIsOpened = IntroExpanded.setExpanded;

    const [isOpened, setIsOpened] = useState(true);
    const [collapsedTitleState, setCollapsedTitleState] = useState("");

    const collapseHandler = () => {
        setIsOpened(prevState => {
            return !prevState;
        });

        IntroExpanded.setExpanded(0);

        if (isOpened) {
            const timer = setTimeout(() => {
                setCollapsedTitleState(" intro-section-collapsed");
            }, 150);
        } else {
            const timer = setTimeout(() => {
                setCollapsedTitleState("");
            }, 20);
        }

    }

    return (
        <div>
            <div className={"intro-section" + collapsedTitleState}>
                <div className="intro-section-content">
                    <div className={"intro-section-content-title" + collapsedTitleState}>
                        <h1>Breadth-First Search</h1>
                    </div>

                    <SmoothCollapse expanded={isOpened}>
                        <div className="description">
                            <p>
                                "Breadth-first search (BFS) is an algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph,
                                sometimes referred to as a 'search key'), and explores all of the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.
                                It uses the opposite strategy as depth-first search, which instead explores the node branch as far as possible before being forced to backtrack and expand other nodes."
                            </p>

                            <p>--Wikipedia</p>
                        </div>
                    </SmoothCollapse>

                </div>
            </div>

            <div className="collapse-button">
                <ThemeProvider
                    options={{
                        primary: 'black'
                    }} >
                    <Button onClick={collapseHandler} label={isOpened ? "collapse" : "expand"} outlined />
                </ThemeProvider>
            </div>

            <div className="operation-section">
                <div className="add-node-button">
                    <ThemeProvider
                        options={{
                            secondary: 'red'
                        }}
                    >
                        <Tooltip content="add node" showArrow>
                            <Fab icon={{
                                icon: 'add',
                            }} />
                        </Tooltip>

                    </ThemeProvider>
                </div>
            </div>
        </div>
    );
}

export default BFS;