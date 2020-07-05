import React from "react";

const ClearButton = ({ book, setBook }) => {

    //Clear Button on Search Bar
    function handelClick(e) {
        // Prevent browser refreshing after form submission
        e.preventDefault();
        //Delete the words on the form
        setBook('');
    }

    return (
        <>
            {
                book.length !== 0 &&
                <button onClick={handelClick} className="clearBtn">&times;</button>
            }
        </>
    );
};

export default ClearButton;