import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./styles.css";

function VendorForm() {
  const navigate = useNavigate();
  const [nameValidate, setNameValidate] = useState(true);
  const [accountValidate, setAccountValidate] = useState(true);
  const [bankNameValidate, setBankNameValidate] = useState(true);
  const [data, setData] = useState({
    name: "",
    accountNo: "",
    bankName: "",
    address1: "",
    address2: "",
    city: "",
    country: "",
    zipCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name !== "" && data.accountNo !== "" && data.bankName !== "") {
      // console.log(data);

      const fetchData = await fetch(
        "https://vendor-management-c26x.onrender.com/upload",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      setData({
        name: "",
        accountNo: "",
        bankName: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        zipCode: "",
      });

      const dataRes = await fetchData.json();
      // console.log("dataRes", dataRes);
      if (dataRes) {
        toast.success("Data uploaded seccuessfully");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } else {
      if (data.name === "" && data.accountNo === "" && data.bankName === "") {
        setNameValidate(false);
        setAccountValidate(false);
        setBankNameValidate(false);
        setTimeout(() => {
          setNameValidate(true);
          setAccountValidate(true);
          setBankNameValidate(true);
        }, 3000);
      } else if (data.name === "") {
        setNameValidate(false);
        setTimeout(() => {
          setNameValidate(true);
        }, 3000);
      } else if (data.accountNo === "") {
        setAccountValidate(false);
        setTimeout(() => {
          setAccountValidate(true);
        }, 3000);
      } else if (data.bankName === "") {
        setBankNameValidate(false);
        setTimeout(() => {
          setBankNameValidate(true);
        }, 3000);
      }
    }
  };

  return (
    <div>
      <form className="form-container" onSubmit={handleSubmit}>
        <label htmlFor="name">Vendor Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          className="input-field"
        />
        {nameValidate === false && (
          <p className="warning-msg">Vendor Name is missing</p>
        )}

        <label htmlFor="accountNo">Bank Account No</label>
        <input
          type="text"
          name="accountNo"
          value={data.accountNo}
          onChange={handleChange}
          className="input-field"
        />
        {accountValidate === false && (
          <p className="warning-msg">Account No is missing</p>
        )}

        <label htmlFor="bankName">Bank Name</label>
        <input
          type="text"
          name="bankName"
          value={data.bankName}
          onChange={handleChange}
          className="input-field"
        />
        {bankNameValidate === false && (
          <p className="warning-msg">Bank Name is missing</p>
        )}

        <label htmlFor="address1">Address Line 1</label>
        <input
          type="text"
          name="address1"
          value={data.address1}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="address2">Address Line 2</label>
        <input
          type="text"
          name="address2"
          value={data.address2}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={data.city}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          value={data.country}
          onChange={handleChange}
          className="input-field"
        />

        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="text"
          name="zipCode"
          value={data.zipCode}
          onChange={handleChange}
          className="input-field"
        />

        <button className="submitButton">Submit</button>
      </form>
    </div>
  );
}

export default VendorForm;
