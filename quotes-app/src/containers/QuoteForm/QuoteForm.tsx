import {QuotesInfo} from "../../types.ts";
import React,  {useState} from "react";
import axiosApi from "../../axiosApi.ts";
import {CATEGORIES} from "../../categories.ts";
import './QuoteForm.css'

const QuoteForm = () => {
    const [quoteInfo, setQuoteInfo] = useState<QuotesInfo>({
        category: '',
        author: '',
        quote: '',
    })

    const saveQuoteInfo = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setQuoteInfo((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        await axiosApi.post('/quotes.json', quoteInfo)

    }
    return (
        <>
         <h1>Quote Form</h1>
            <div className='formContainer'>
            <form onSubmit={onFormSubmit}>
                <div className='form-group mb-3'>
                    <select
                        name='category'
                        id='category'
                        required
                        value={quoteInfo.category}
                        onChange={saveQuoteInfo}
                        className='form-select'
                    >
                        <option>
                            Select Quote
                        </option>
                        {CATEGORIES.map((category) => (
                            <option key={category.id} value={category.id}>{category.title}</option>
                        ))}
                    </select>
                </div>

                <div className='form-group mb-3'>
                    <input
                        type='text'
                        name='author'
                        id='author'
                        required
                        value={quoteInfo.author}
                        onChange={saveQuoteInfo}
                        className='form-control'
                    />
                </div>

                <div className='form-group'>
                    <textarea
                        name='quote'
                        id='quote'
                        required
                        value={quoteInfo.quote}
                        onChange={saveQuoteInfo}
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-dark mt-4'>Create</button>
            </form>
            </div>
        </>
    );
};

export default QuoteForm;