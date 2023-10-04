import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css";

function VendorEdit() {
  const params = useParams();
  //   console.log("params", params);
  const navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let result = await fetch(`http://localhost:5000/details/${params.id}`);
    result = await result.json();
    // console.log("result", result);
    setData(result);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    let result = await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "Put",
      body: JSON.stringify({
        name: data.name,
        accountNo: data.accountNo,
        bankName: data.bankName,
        address1: data.address1,
        address2: data.address2,
        city: data.city,
        country: data.country,
        zipCode: data.zipCode,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log("Result", result);
    if (result.acknowledged === true) {
      toast.success("Data updated successfully");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.success("Data not updated");
    }
  };
  return (
    <div>
      <form className="form-container" onSubmit={handleUpdate}>
        <label htmlFor="name">Vendor Name</label>
        <input
          type="text"
          name="name"
          value={data?.name}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="accountNo">Bank Account No</label>
        <input
          type="text"
          name="accountNo"
          value={data?.accountNo}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="bankName">Bank Name</label>
        <input
          type="text"
          name="bankName"
          value={data?.bankName}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="address1">Address Line 1</label>
        <input
          type="text"
          name="address1"
          value={data?.address1}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="address2">Address Line 2</label>
        <input
          type="text"
          name="address2"
          value={data?.address2}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={data?.city}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={data?.country}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={data?.zipCode}
          onChange={handleChange}
          className="input-field"
        />

        <button className="submitButton">Update</button>
      </form>
    </div>
  );
}

export default VendorEdit;
