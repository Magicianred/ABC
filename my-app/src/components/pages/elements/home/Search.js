import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import axios from 'axios';

//Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

//Component created by me
import BookCard from "./BookCard";
import Error from "./../Error";
import Loading from "./../Loading";
import BookSearchForm from "./BookSearchForm";
import MaxResult from "./MaxResult";


function Search() {

    //useState Hooks
    const [book, setBook] = useState('');
    //Updating books search result to state
    const [resultBook, setResultBook] = useState({ items: [] });
    //Error if you click the search button with empty input value
    const [error, setError] = useState(false);
    //Loading state
    const [loading, setLoading] = useState(false);
    //You can decide the max result of the research
    const [maxResults, setMaxResults] = useState(9);

    const onInputChange = (e) => {
        setBook(e.target.value);
    }

    //The api key is hidden
    const apiKey = (process.env.REACT_APP_API_KEY);
    let URL = ("https://www.googleapis.com/books/v1/volumes");

    const getSearch = async () => {
        // Set loading before API operation starts
        setLoading(true);
        setError(false);
        if (maxResults > 40 || maxResults < 1) {
            toast.error('Il risultato deve essere tra 1 e 40!');
            setLoading(false);
        } else {
            try {
                // Call to API using Axios
                const result = await axios.get(URL + "?q=" + book + "&key=" + apiKey + "&maxResults=" + maxResults );
                // Books result
                setResultBook(result.data);
                console.log(result.data);
            }
                //Call error if you click the search button with empty input value.
            catch (error) {
                setError(true);
            }
            // After API operation end
            setLoading(false);
        }
    }

    // Submit handler
    const onSubmitHandler = (e) => {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        // Call getSearch async function
        getSearch();
    }

    return (
        <>
            <Container>
                <BookSearchForm
                    onSubmitHandler={onSubmitHandler}
                    onInputChange={onInputChange}
                    book={book}
                    setBook={setBook}
                />

                <MaxResult
                    maxResults={maxResults}
                    setMaxResults={setMaxResults}
                />

                {/*Loading*/}
                <Loading loading={loading} />




                {/*Show the error to the user*/}
                <Error error={error} />



                {/*Search result*/}
                <Container>
                    <Row>
                        {/*UI for books search result*/}
                        <BookCard
                            resultBook={resultBook}
                        />
                    </Row>
                </Container>

            </Container>
        </>
    )

}

export default Search;