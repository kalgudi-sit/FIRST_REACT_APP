import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
const {books} = require('./books_db')

const Booklist = () => {
    return (
        <>
            <h1>AMAZON BEST SELLERS</h1>
            <section className='booklist'> {
                books.map((book,index) => {
                    const { img, title, author, id} = book;
                    return <Book img={img} title={title} author={author} key={id} number={index}/>
                })
            }
            </section>
        </>
    );
}

const Book = (props) => {
    return (
        <article className='book'>
            <img src={props.img} alt=""/>
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
            <span className="number"> {`${props.number + 1}`}</span>
        </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Booklist/>);