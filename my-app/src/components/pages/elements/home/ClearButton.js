import React from "react";

const ClearButton = ({ book, setBook }) => {

    //Clear Button on Search Bar
    function handelClick(e) {
        e.preventDefault();
        setBook('');
    }

    return (
        <>
            {
                book.length !== 0 &&
                <button onClick={handelClick} className="closeBtn">&times;</button>
            }
        </>
    );
};

export default ClearButton;