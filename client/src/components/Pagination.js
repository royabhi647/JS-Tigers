import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userPerPageDetails } from "../redux/Features/perPageData";

function Pagination({ allUsersDetails }) {
  //   console.log("allUsersDetails", allUsersDetails);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const limitedDataPerPage = allUsersDetails.slice(startIndex, endIndex);
  useEffect(() => {
    setTimeout(() => {
      dispatch(userPerPageDetails(limitedDataPerPage));
    }, 0);
  }, [currentPage, limitedDataPerPage]);

  return (
    <div className="pagination-container">
      <p
        className="pagination-item"
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        Prev
      </p>
      <p className="pagination-item" style={{ cursor: "none", color: "#000" }}>
        {currentPage}
      </p>
      <p
        className="pagination-item"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Next
      </p>
    </div>
  );
}

export default Pagination;
