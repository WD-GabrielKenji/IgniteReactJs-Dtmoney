import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header/indeex";
import { GlobalStyle } from "./styles/global";

export function App(){
    return (
        <>
            <Header />
            <Dashboard />
            <GlobalStyle />
        </>
    );
}