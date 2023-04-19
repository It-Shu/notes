import RootStore from "./RootStore";
import {createContext, ReactNode, useContext} from "react";

let store: RootStore

// create the context
const StoreContext = createContext<RootStore | undefined>(undefined);

// create the provider component
export function RootStoreProvider({ children }: { children: ReactNode }) {
    //only create the store once ( store is a singleton)
    const root = store ?? new RootStore()

    return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
}

// create the hook
export function useRootStore() {
    const context = useContext(StoreContext)
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider")
    }

    return context
}
