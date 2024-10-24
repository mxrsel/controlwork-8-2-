import {Link, NavLink, useParams} from "react-router-dom";
import {CATEGORIES} from "../../categories.ts";
import React, {useCallback, useEffect, useState} from "react";
import {Quote, QuotesObject} from "../../types.ts";
import axiosApi from "../../axiosApi.ts";
import './Quotes.css'



const Quotes: React.FC = () => {
    const {categoryId} = useParams();
    const [quotes, setQuotes] = useState<Quote[]>([]);




    const fetchQuotes = useCallback(async () => {
        let baseUrl = '/quotes.json';
        if (categoryId !== undefined) {
            baseUrl += `?orderBy="category"&equalTo="${categoryId}"`;
        }

        const {data: quotes} = await axiosApi.get<QuotesObject | null>(baseUrl);
        if(quotes === null) {
            setQuotes([]);
        } else {
            const newQuotes: Quote[] = Object.keys(quotes).map((id) => ({id, ...quotes[id]}));
            setQuotes(newQuotes);
        }
    }, [categoryId])

    useEffect(() => {
        void fetchQuotes()
    }, [fetchQuotes]);

    const handleRemove = (id: string) => {
        const newQuotes = quotes.filter((quote) => quote.id !== id);
        setQuotes(newQuotes);
    }
    return (
        <div className='d-flex justify-content-between'>
            <ul className="nav flex-column ">
                <li className="nav-item">
                    <NavLink to='/quotes' className="btn btn-dark ps-5 pe-5 m-1 ">All</NavLink>
                </li>

                {CATEGORIES.map((category) => (
                    <NavLink className='categoryItem btn btn-group btn-dark p-3 m-1' key={category.id} to={`/quotes/${category.id}`}>{category.title}</NavLink>
                ))}

            </ul>

            <div className='d-flex flex-column gap-3'>
                {quotes.map((quote) => (
                    <div className='card align-items-center' style={{width: '300px'}} key={quote.id}>
                        <div className='body'>
                            <p>{quote.quote}</p>
                            <p> - {quote.author}</p>
                            <Link className='btn btn-success' to={`/quotes/edit-quotes/${quote.id}`}>Edit</Link>
                            <button className=' deleteBtn btn btn-danger align-items-end' type='submit' onClick={() => handleRemove(quote.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Quotes;