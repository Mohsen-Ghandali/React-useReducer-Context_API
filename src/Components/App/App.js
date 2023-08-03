import ComA from "../ComA/ComA";
import MyContextProvider from "../Context/MyContextProvider";


const App = () => {

    return (
        <>
            <MyContextProvider>
                <ComA />
            </MyContextProvider>
        </>
    );
}

export default App;