import ReactDOM from "react-dom/client";
import React from "react";
import {ThemeProvider} from "@/app/providers/ThemeProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./appStore.ts";
import "@/shared/index.css"
import {RouterProvider} from "react-router-dom";
import {appRouter} from "@/app/appRouter.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <RouterProvider router={appRouter} />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
