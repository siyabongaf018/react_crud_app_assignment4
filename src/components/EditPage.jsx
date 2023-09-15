import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./style.css";
const EditPage = () => {
  const { memberid } = useParams(); // Get the articleId from the URL parameters
  const [members, setMembers] = useState({
    imageData: "",
    memberName: "",
    memberJobTitle: "",
  });
  const { memberData, setMemberData } = useState();

  const [formData, setFormData] = useState([]);
  // const [formData, setFormData] = useState({
  //   imageData: "",
  //   memberName: "",
  //   memberJobTitle: "",
  // });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setMembers({
      ...members,
      [name]: type === "file" ? URL.createObjectURL(e.target.files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // localStorage.setItem("MemberData", JSON.stringify(formData));
    //addDataToLocalStorage(formData);
    setFormData({ imageData: "", memberName: "", memberJobTitle: "" });
    alert("Member save!!");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("MemberData")) || [];
    //setMembers(storedData);
    setFormData(storedData);
  }, []);

  useEffect(() => {
    formData.forEach((user, index) => {
      if (index.toString() === memberid) {
        setMembers((prevMembers) => ({
          ...prevMembers,
          imageData: user.imageData,
          memberName: user.memberJobTitle,
          memberJobTitle: user.memberJobTitle,
        }));
      }
    });
  }, [formData, memberid]);

  return (
    <div>

      <NavLink to={{ pathname: `/` }}>
        <button
          color="primary"
          aria-label="Edit"
          className="btn"
        >
          ⬅ BACK
        </button>
      </NavLink>
      <h2>EditPage {memberid}</h2>

      <form className="Add_form" onSubmit={handleSubmit}>
        <div className="form_control">
          <div className="image-preview">
            {members.imageData && (
              <img
                src={members.imageData}
                alt="Preview"
                style={{ width: "50px", borderRradius: "50%" }}
              />
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            name="imageData"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form_control">
          <input
            type="text"
            name="memberName"
            placeholder="Full Name"
            value={members.memberName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form_control">
          <input
            type="text"
            placeholder="Job title"
            name="memberJobTitle"
            value={members.memberJobTitle}
            onChange={handleChange}
          />
        </div>
        <div className="form_control">
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPage;
