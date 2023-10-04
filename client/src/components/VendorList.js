import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import "./styles.css";

function VendorList() {
  const [userDetails, setUserDetails] = useState([]);
  // console.log("userDetails", userDetails);

  const getDetails = async () => {
    const fetchData = await fetch(
      "https://vendor-management-c26x.onrender.com/details"
    );
    let result = await fetchData.json();
    // console.log("fetchData", result);
    setUserDetails(result);
  };

  getDetails();

  const handleDelete = async (id) => {
    // console.log("Delete", id);
    let deleteData = await fetch(
      `https://vendor-management-c26x.onrender.com/delete/${id}`,
      {
        method: "Delete",
      }
    );

    deleteData = await deleteData.json();
    // console.log("deleteData", deleteData);
    if (deleteData.acknowledged === true) {
      toast.success("record is deleted");
      getDetails();
    }
  };

  const perPageData = useSelector((state) => state.pageLimitedData.perPageData);
  console.log("perPageData", perPageData);

  return (
    <>
      <div className="table-container">
        {perPageData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Account No.</th>
                <th>Bank Name</th>
                <th>Address 1</th>
                <th>Address 2</th>
                <th>City</th>
                <th>Country</th>
                <th>Zip Code</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {perPageData.map((users, index) => (
                <tr key={index}>
                  <td>{users.name}</td>
                  <td>{users.accountNo}</td>
                  <td>{users.bankName}</td>
                  <td>{users.address1}</td>
                  <td>{users.address2}</td>
                  <td>{users.city}</td>
                  <td>{users.country}</td>
                  <td>{users.zipCode}</td>
                  <td style={{ display: "flex" }}>
                    <button onClick={() => handleDelete(users._id)}>
                      Delete
                    </button>
                    <Link to={"/update/" + users._id} className="edit-button">
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No Record Found
          </h1>
        )}
      </div>
      <Pagination allUsersDetails={userDetails} />
    </>
  );
}

export default VendorList;
