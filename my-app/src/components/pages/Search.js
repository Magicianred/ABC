import React, {useState} from "react";
import axios from 'axios';

//Bootstrap
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";

//Component created by me
import BookCard from "./elements/BookCard";
import Error from "./elements/Error";
import Loading from "./elements/Loading";
import BookSearchForm from "./elements/BookSearchForm";


function Search() {

    //useState Hooks
    const [book, setBook] = useState('');
    //Updating books search result to state
    const [resultBook, setResultBook] = useState({ items: [] });
    //Error if you click the search button with empty input value
    const [error, setError] = useState(false);
    //Loading state
    const [loading, setLoading] = useState(false);

    const onInputChange = (e) => {
        setBook(e.target.value);
    }

    const apiKey = (process.env.REACT_APP_API_KEY);
    let URL = ("https://www.googleapis.com/books/v1/volumes");

    const getSearch = async () => {
        // Set loading before API operation starts
        setLoading(true);
        setError(false);
        try {
            // Call to API using Axios
            const result = await axios.get(URL + "?q=" + book + "&key=" + apiKey + "&maxResults=40");
            // Books result
            setResultBook(result.data);
        }
            //Call error if you click the search button with empty input value.
        catch(error) {
            setError(true);
        }
        // After API operation end
        setLoading(false);
    }

    // Submit handler
    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call getSearch async function
        getSearch();
    }

    //UI for books search result
    const items = resultBook.items.map((books, index) => {
            return (
                <div key={index}>
                    <BookCard
                        keys={books.id}
                        title={books.volumeInfo.title}
                    />
                </div>
            );
        }
    )


    return (
        <React.Fragment>
            <Container fluid>
                <BookSearchForm
                    onSubmitHandler={onSubmitHandler}
                    onInputChange={onInputChange}
                    book={book}
                />


                <br />
                {/*Loading*/}
                <Loading loading={loading} />



                <br />
                {/*Show the error to the user*/}
                <Error error={error}/>



                <br />
                {/*Search result*/}
                <CardDeck>{items}</CardDeck>
            </Container>
        </React.Fragment>
    )

}

export default Search;