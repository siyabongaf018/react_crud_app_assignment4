import { useState, useEffect } from "react";
import "./style.css";
import "./pic.png";
const AddMemberDetails = ({ addDataToLocalStorage, changeShowAddMember }) => {
  const [formData, setFormData] = useState({
    imageData: "",
    memberName: "",
    memberJobTitle: "",
  });
  //const [formData, setFormData] = useState({ name: "", email: "",imageData:"" });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? URL.createObjectURL(e.target.files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addDataToLocalStorage(formData);
    setFormData({ imageData: "", memberName: "", memberJobTitle: "" });
    alert("Member save!!");
    changeShowAddMember();
  };

  return (
    <form className="Add_form" onSubmit={handleSubmit}>
      <div className="form_control">
        <div className="image-preview">
          {formData.imageData ? (
            <img
              src={formData.imageData}
              alt="Preview"
              style={{ width: "50px", borderRradius: "50%" }}
            />
          ) : (
            <img
              src="./pic.png"
              alt="Preview"
              style={{ width: "50px", height: "50px", borderRradius: "50%" }}
            />
          )}
        </div>
        <input
          className="image_input"
          type="file"
          accept="image/*"
          name="imageData"
          onChange={handleChange}
          required
        />
        <span className="icon">➕</span>
      </div>
      <br /><br />
      <div className="form_control">
        <input
          type="text"
          name="memberName"
          placeholder="Full Name"
          value={formData.memberName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form_control">
        <input
          type="text"
          placeholder="Job title"
          name="memberJobTitle"
          value={formData.memberJobTitle}
          onChange={handleChange}
        />
      </div>
      <div className="form_control">
        <button type="submit" className="btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddMemberDetails;
