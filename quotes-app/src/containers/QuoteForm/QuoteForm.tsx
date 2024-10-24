import {CategoriesProps} from "../../types.ts";


const CATEGORIES: CategoriesProps[] = [
    {title: 'Star Wars', id: 'star-wars'},
    {title: 'Famous people', id: 'famous-people'},
    {title: 'Saying', id: 'saying'},
    {title: 'Humour', id: 'humour'},
    {title: 'Motivational', id: 'motivational'},
]

const QuoteForm = () => {
    return (
        <>
         <h1>Quote Form</h1>
            <form>
                <div className='form-group mb-3'>
                    <select
                        name='category'
                        id='category'
                        required
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
                        className='form-control'
                    />
                </div>

                <div className='form-group'>
                    <textarea
                        name='quote'
                        id='quote'
                        required
                        className='form-control'
                    />
                </div>
                <button type='submit' className='btn btn-dark mt-4'>Create</button>
            </form>
        </>
    );
};

export default QuoteForm;