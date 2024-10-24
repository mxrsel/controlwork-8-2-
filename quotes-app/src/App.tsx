import NavBar from "./containers/NavBar/NavBar";
import {Route, Routes} from "react-router-dom";
import QuoteForm from "./containers/QuoteForm/QuoteForm.tsx";
import Quotes from "./containers/Quotes/Quotes.tsx";
import EditQuote from "./containers/EditQuote/EditQuote.tsx";

const App = () => {
return(
    <>

        <header>
            <NavBar />
        </header>

        <div className='main-container '>
            <Routes>
                <Route path="/" element={<h1>Quote</h1>} />
                <Route path="/quotes" element={<Quotes />} />
                <Route path="/new-quote" element={<QuoteForm />} />
                <Route path='/quotes/:categoryId' element={<Quotes />}/>
                <Route path='/quotes/edit-quotes/:id' element={<EditQuote />}/>
                <Route path="/*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>

    </>
)
};

export default App
