import s from "../Paginator/Paginator.module.css";
import React, {useState} from "react";

type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    totalItemCount: number
    pageSize: number
    portionSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = (
    {
        onPageChanged,
        currentPage,
        totalItemCount,
        pageSize,
        portionSize = 10
    }: PaginatorPropsType) => {

    const pagesCount = Math.ceil(totalItemCount / pageSize);
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize;

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}>PREV</button>}
            {
                pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((el, index) => {
                        const setCurrentPageHandler = () => onPageChanged(el);
                        return (
                            <span
                                onClick={setCurrentPageHandler}
                                className={`${el === currentPage
                                    ? s.selectedPage
                                    : s.page} ${s.page}`}
                                key={index}>
                                {el}
                            </span>
                        )
                    })
            }
            {portionCount > portionNumber &&
            <button onClick={() => {
                setPortionNumber(portionNumber + 1)
            }}>NEXT</button>}
        </div>
    )
}