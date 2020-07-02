import React from "react";

//Search Button
function SearchButton({searchClick}) {

  const [stateSearchClicks, setSearchClicks] = searchClick;

  function clickButton(el){
    if(el && stateSearchClicks){
      setSearchClicks(false);
      el.click();
    }
  }

     return (
        <>
                <button ref={clickButton} className="searchBtn border-0" type="submit"><img src="/images/search.png" alt="search" /></button>
        </>
    )

}

export default SearchButton;