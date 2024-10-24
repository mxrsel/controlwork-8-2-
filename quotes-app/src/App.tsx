import NavBar from "./containers/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import QuoteForm from "./containers/QuoteForm/QuoteForm.tsx";

const App = () => {
return(
    <>
        <header>
            <NavBar />
        </header>

        <div className='main-container'>
            <Routes>
                <Route path="/" element={<h1>Quote</h1>} />
                <Route path="/new-quote" element={<QuoteForm />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    </>
)
};

export default App
