import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


function Search() {
    return (
        <React.Fragment>
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button variant="dark" type="submit">Submit</Button>
            </Form>
        </React.Fragment>
    )

}

export default Search;