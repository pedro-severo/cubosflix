import React from "react";
import {PageSelectorContainer, PageNumber} from "./styles";
import NavigateNext from "@material-ui/icons/NavigateNext";
import NavigateBefore from "@material-ui/icons/NavigateBefore";


const PageSelector = ({pageNumber, handleClickNextOrPreviousPage, movieName}) => {
    return (
        <PageSelectorContainer>
            {pageNumber === 1 ? <p /> : <NavigateBefore onClick={() => handleClickNextOrPreviousPage("previous")} />}
            <PageNumber>{pageNumber}</PageNumber>
            {movieName && pageNumber === 4 ? <p /> : <NavigateNext onClick={() => handleClickNextOrPreviousPage("next")} />}
        </PageSelectorContainer>
    )
}

export default PageSelector