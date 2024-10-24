import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import {QuotesInfo} from "../../types.ts";
import {CATEGORIES} from "../../categories.ts";

const EditQuote = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quote, setQuote] = useState<QuotesInfo>({
        category: '',
        author: '',
        quote: ''
    });

    useEffect(() => {
        const fetchQuote = async () => {
            const {data: quoteData} = await axiosApi.get<QuotesInfo>(`/quotes/${id}.json`);
            if(quoteData) {
                setQuote(quoteData)
            }
        };
        void fetchQuote()
    }, [id]);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
            const {name, value} = event.target;
            setQuote((prevState) => ({
                ...prevState,
                [name]: value
            }))
    }

    const handleSubmit = async(event: React.FormEvent) => {
        event.preventDefault()
        await axiosApi.put(`/quotes/${id}.json`, quote);
        navigate('/quotes');
    }

    return (
        <>
            <h1>Редактировать цитату</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <select
                        name="category"
                        value={quote.category}
                        onChange={handleChange}
                        className="form-select"
                    >
                        <option>Выберите категорию</option>
                        {CATEGORIES.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.title}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-group mb-3">
                    <input
                        type="text"
                        name="author"
                        value={quote.author}
                        onChange={handleChange}
                        className="form-control"
                        required
                    />
                </div>

                <div className="form-group mb-3">
          <textarea
              name="quote"
              value={quote.quote}
              onChange={handleChange}
              className="form-control"
              required
          />
                </div>

                <button type="submit" className="btn btn-dark mt-4">
                    Save
                </button>
            </form>
        </>
    );
};

export default EditQuote;