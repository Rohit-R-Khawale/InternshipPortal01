"use client";
import { Provider } from "react-redux";
import {store} from "./store";
// We used this since we cannot use Provider in layout.js directly due to some issues with Next.js 13
// So we created this Providers component and used it in layout.js
export function Providers({ children }){
    return <Provider store={store}>
        {children}
    </Provider>
}