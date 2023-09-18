import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import "./style.css";
const EditPage = () => {
  const { memberid } = useParams(); // Get the articleId from the URL parameters
  // const [members, setMembers] = useState({
  //   imageData: "",
  //   memberName: "",
  //   memberJobTitle: "",
  // });
  const [members, setMembers] = useState([]);

  const navigate = useNavigate();
  const [storedMembersData, setStoredMembersData] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setMembers({
      ...members,
      [name]: type === "file" ? URL.createObjectURL(e.target.files[0]) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = storedMembersData.map((record, index) =>
      index.toString() === memberid ? members : record
    );
    let oldData = [...storedMembersData];
    let newData = oldData[memberid];

    newData.imageData = members.imageData;
    newData.memberName = members.memberName;
    newData.memberJobTitle = members.memberJobTitle;

    oldData[memberid] = newData;

    setStoredMembersData(oldData);

    localStorage.setItem("MemberData", JSON.stringify(storedMembersData));
    setMembers({ imageData: "", memberName: "", memberJobTitle: "" });
    alert("Member save!!");
    navigate("/");
  };

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("MemberData")) || [];
    //setMembers(storedData);
    setStoredMembersData(storedData);
  }, []);

  useEffect(() => {
    storedMembersData.forEach((user, index) => {
      if (index.toString() === memberid) {
        const data = user;
        setMembers(data);
      }
    });
  }, [storedMembersData, memberid]);

  return (
    <div>
      <div className="back_nev">
        <NavLink to={{ pathname: `/` }}>
          <button color="primary" aria-label="Edit" className="btn">
            ⬅ BACK
          </button>
        </NavLink>
      </div>

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
          <div className="input_Image_container">
            <input
              className="image_input"
              type="file"
              accept="image/*"
              name="imageData"
              onChange={handleChange}
            />
            <span className="icon">➕</span>
          </div>
        </div>
        <br /><br />

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
