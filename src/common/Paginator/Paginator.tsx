import s from "../Paginator/Paginator.module.css";
import React from "react";

type PaginatorPropsType = {
    onPageChanged: (pageNumber: number) => void
    currentPage: number
    totalUserCount: number
    pageSize: number
}

export const Paginator: React.FC<PaginatorPropsType> = (
    {
        onPageChanged,
        currentPage
    }: PaginatorPropsType) => {
    // const pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    const pages = []
    for (let i = 1; i <= 30; i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((el, index) => {
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
        </div>
    )
}