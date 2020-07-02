import React, {useState} from "react";
import { toast } from 'react-toastify';
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
//Filters
import MaxResult from "./Filters/MaxResult";
import OrderBy from "./Filters/OrderBy";
import Filter from "./Filters/Filter";



function Search({ searchBook, searchClick }) {
    const [book, setBook] = searchBook;

    //useState Hooks
    //Updating books search result to state
    const [resultBook, setResultBook] = useState({ items: [] });
    //Error if you click the search button with empty input value
    const [error, setError] = useState(false);
    //Loading state
    const [loading, setLoading] = useState(false);
    //You can decide the max result of the research
    const [maxResults, setMaxResults] = useState(9);


    function onInputChange() {
        const book = document.getElementById("search-box").value;
        setBook(book);
    }



    //The api key is hidden
    const apiKey = (process.env.REACT_APP_API_KEY);
    let URL = ("https://www.googleapis.com/books/v1/volumes");

    const getSearch = async () => {
        // Set loading before API operation starts
        setLoading(true);
        setError(false);
        const filter = document.getElementById("books-type").value;
        const orderBy = document.getElementById("book-sort-by").value;
        if (maxResults > 40 || maxResults < 1) {
            toast.error('Il risultato deve essere tra 1 e 40!');
            setLoading(false);
        } else {
            try {
                // Call to API using Axios
                const result = await axios.get(URL + "?q=" + book + "&key=" + apiKey + "&maxResults=" + maxResults + "&orderBy=" + orderBy + "&filter=" + filter )
                // Books result
                setResultBook(result.data);
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

                {/*Form*/}
                <BookSearchForm
                    onSubmitHandler={onSubmitHandler}
                    onInputChange={onInputChange}
                    book={book}
                    setBook={setBook}
                    searchClick={searchClick}
                />

                <Form className="mt-5">
                    <Form.Row>

                        {/*Max result of the research*/}
                        <MaxResult
                            maxResults={maxResults}
                            setMaxResults={setMaxResults}
                        />

                        {/*You can change the ordering by setting the orderBy parameter to be one of these values: relevance and newest*/}
                        <OrderBy onInputChange={onInputChange} />

                        {/*You can use the filter parameter to restrict the returned results further by setting it the to one of the following values:
                         partial, full, free-ebooks, paid-ebooks, ebooks*/}
                        <Filter onInputChange={onInputChange} />

                    </Form.Row>
                </Form>

                {/*Loading*/}
                <Loading loading={loading} />


                {/*Show the error to the user*/}
                <Error error={error} />


                {/*Search result*/}
                <Container>
                    <Row>
                        {/*UI for books search result*/}
                        <BookCard resultBook={resultBook} />
                    </Row>
                </Container>

            </Container>
        </>
    )

}

export default Search;