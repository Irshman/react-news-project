import ReactDOM from "react-dom/client";
import React from "react";
import {ThemeProvider} from "@/app/providers/ThemeProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./appStore.ts";
import BaseLayout from "@/app/layouts/BaseLayout.tsx";
import "@/shared/index.css"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider>
            <Provider store={store}>
                <BaseLayout />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
