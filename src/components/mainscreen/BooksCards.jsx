import React, { useState, useEffect } from 'react'
import Card from './Card'
import axios from 'axios'



const BooksCards = (props) => {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=trading&key=AIzaSyCL_XozaYDHhyxmJW3RWIvIMAwydjQqSkM'
    const [Books, setBooks] = useState([])

    // useEffect(() => {
    //     axios.get(url)
    //      .then((response) => {
    //        setBooks(response.data)
    //      }).catch((err) => {
    //        console.log(err)
    //      })
    //    }, [])

    //    console.log(books)

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axios.get(url);
            setBooks(response.data.items);
        }
        fetchItems();

    }, [])
    console.log(Books);
    
    return (
        <div className='Grid-Container grid gap-4 p-5 justify-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[4rem] relative'>

            {
                Books.map((book) => {
                    return <Card
                        image={book.volumeInfo.imageLinks.thumbnail}
                        judul={book.volumeInfo.title}
                        publisher={book.volumeInfo.publisher}
                        item={book}
                    />
                })



            }
            

        </div>
    )
}

export default BooksCards