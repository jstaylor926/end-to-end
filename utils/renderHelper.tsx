import { ReactNode } from "react";
import { createMemoryHistory, MemoryHistory } from 'history';
import { render, RenderResult } from '@testing-library/react';
import { Router } from 'react-router-dom';


//define renderWithRouter

global.renderWithRouter = (renderComponent, route) => {
    const history = createMemoryHistory();

    if( route ) {
        history.push(route)
    }

    return {
        ...render(
            <Router history={history}>{renderComponent()}</Router>
        ),
        history
    }
}

//function create history objects, pushes route.

type RenderWithRouter = (
    renderComponent: () => ReactNode,
    route?: string;
) => RenderResult & { history: MemoryHistory }

// accepts renderComponent and optional route. RenderResult from testing-library is return type of render with history

declare global {
    namespace NodeJS {
        interface Global {
            renderWithRouter: RenderWithRouter
        }
    }

    namespace globalThis {
        const renderWithRouter: RenderWithRouter
    }
}