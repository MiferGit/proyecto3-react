import { useState } from "react";
import ResidentCard from "./ResidentCard";
import "./Styles/ResidentList.css";

function ResidentsList({ residents }) {
  const [page, setPage] = useState(1);
  const itemsPerPage = 15;
  const totalItems = residents ? residents.length : 0;
  console.log(totalItems);
  const maxPage = Math.ceil(totalItems / itemsPerPage);
  console.log(maxPage);

  // Funtions Pages:
  const onPrev = () => {
    if (page > 1) {
      setPage(page - 1)
    }
  };

  const onNext = () => {
    if (page < maxPage) {
      setPage(page + 1);
    }
  };

  const currentPageItems = residents
    ? residents.slice((page - 1) * itemsPerPage, page * itemsPerPage)
    : [];

  return (
    <>
      <div className="cards">
        {currentPageItems.map((resident) => {
          const residentSplit = resident.split("/");
          const id = residentSplit[residentSplit.length - 1];
          return <ResidentCard key={id} url={resident} />;
        })}
      </div>

      <div className="cards__btnPag">
        <button
          className="cards__btnPag-pn"
          onClick={onPrev}
          disabled={page === 1}
        >
          Anterior
        </button>
        <span className="cards__btn-span">
          {" "}
          {page}/{maxPage}📑{" "}
        </span>
        <button
          onClick={onNext}
          disabled={page === maxPage}
          className="cards__btnPag-pn"
        >
          siguiente
        </button>
      </div>
    </>
  );
}

export default ResidentsList;
