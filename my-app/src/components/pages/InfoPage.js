import React from "react";

import BookInfoPage from "./elements/infoPage/BookInfoPage";

const InfoPage = ({ match }) => {
    const {
        params: { bookId },
    } = match;

    return (
        <div>
            Pagina con i dettagli del libro: <strong>{bookId}</strong>
        </div>
    );
};

export default InfoPage;