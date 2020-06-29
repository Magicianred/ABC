import React from "react";

//If there is a plot or not of the book
export const createDescMarkup = (description) => {
    if (description === undefined) return {__html: "Trama non disponibile"};
    return { __html: description };
};

//Different situations for the price of the book
export const checkPrice = (saleInfo) => {
    if (saleInfo.saleability === "FOR_SALE") {
        return <>
            {(saleInfo.listPrice && saleInfo.listPrice.amount) ? saleInfo.listPrice.amount : " "}
            &nbsp;
            {(saleInfo.listPrice && saleInfo.listPrice.currencyCode ) ? saleInfo.listPrice.currencyCode : " "}
        </>
    } else if (saleInfo.saleability === "NOT_FOR_SALE") {
        return "Non in vendita"
    } else if (saleInfo.saleability === "FREE") {
        return "Gratis"
    }
}
