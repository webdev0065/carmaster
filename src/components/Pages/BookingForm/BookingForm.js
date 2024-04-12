import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookingForm = ({ ServiceTitle, handleBookingSuccess,OnModalClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);

  

  const handleImageChange = (e) => {
    const files = e.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();

      // if (file.size > 50 * 1024) { // Check if file size is greater than 25KB
      //   toast.error("Please select images less than 50KB in size.");
      //   continue; // Skip this file
      // }

      reader.onload = () => {
        newImages.push({
          file,
          preview: reader.result,
        });

        if (newImages.length === files.length) {
          setImages([...images, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {setShowModal(false)
    OnModalClose()}
  const handleShow = () => setShowModal(true);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      address: "",
      feedback: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phonenumber: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      feedback: Yup.string().required("Required"),
      images: Yup.array().min(1, "At least one image is required"),
    }),
    onSubmit: async (values) => {
      const data = {
        firstName: values.firstname,
        lastName: values.lastname,
        email: values.email,
        phone: values.phonenumber,
        address: values.address,
        comment: values.feedback,
        photos: images.map((image) => image.preview),
        ServiceTitle: ServiceTitle
      };

      const Send_Email_Url = process.env.REACT_APP_MAIL_SEND_URL;
      try {
        const response = await axios.post(Send_Email_Url, data);
        if (response.status === 200) {
          handleBookingSuccess();
          toast.success('Successfully Email Sent!');
          alert("Successfully Email Sent!")
        }
      } catch (error) {
        console.log("Error:", error);
        toast.error("An error occurred while submitting the form.");
      }
    },
  });

  // Open modal directly when component is rendered
  React.useEffect(() => {
    handleShow();
  }, []);

  return (
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Booking Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputFirstname" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="inputFirstname"
                name="firstname"
                onChange={formik.handleChange}
                value={formik.values.firstname}
              />
              {formik.touched.firstname && formik.errors.firstname ? (
                <div className="text-danger">{formik.errors.firstname}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="inputLastname" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="inputLastname"
                name="lastname"
                onChange={formik.handleChange}
                value={formik.values.lastname}
              />
              {formik.touched.lastname && formik.errors.lastname ? (
                <div className="text-danger">{formik.errors.lastname}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="inputEmail" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-danger">{formik.errors.email}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="inputPhonenumber" className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="inputPhonenumber"
                name="phonenumber"
                onChange={formik.handleChange}
                value={formik.values.phonenumber}
              />
              {formik.touched.phonenumber && formik.errors.phonenumber ? (
                <div className="text-danger">{formik.errors.phonenumber}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="inputAddress" className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                name="address"
                placeholder="1234 Main St"
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {formik.touched.address && formik.errors.address ? (
                <div className="text-danger">{formik.errors.address}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="inputFeedback" className="form-label">Feedback</label>
              <textarea
                className="form-control"
                id="inputFeedback"
                name="feedback"
                rows="3"
                onChange={formik.handleChange}
                value={formik.values.feedback}
              ></textarea>
              {formik.touched.feedback && formik.errors.feedback ? (
                <div className="text-danger">{formik.errors.feedback}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label htmlFor="inputImage" className="form-label">Upload Images</label>
              <input
                type="file"
                className="form-control"
                id="inputImage"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              {formik.touched.images && formik.errors.images ? (
                <div className="text-danger">{formik.errors.images}</div>
              ) : null}
            </div>
            {/* Show image previews */}
            {/* {images.map((image, index) => (
              <div className="col-auto" key={index}>
                <img
                  src={image.preview}
                  alt={`Preview ${index + 1}`}
                  style={{ maxWidth: "200px", maxHeight: "200px" }}
                />
              </div>
            ))} */}
            {images.map((image, index) => (
  <div key={index} className="col-auto" style={{ position: "relative" }}>
    <img
      src={image.preview}
      alt={`Preview ${index + 1}`}
      style={{ maxWidth: "200px", maxHeight: "200px" }}
    />
    <button
      className="btn-close"
      style={{ position: "absolute", top: 0, right: 0 }}
      onClick={() => {
        const newImages = [...images];
        newImages.splice(index, 1); // Remove the image from array
        setImages(newImages); // Update the state
      }}
    ></button>
  </div>
))}

            <div className="mb-3">
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" type="submit">Submit</Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
  
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
            }  
export default BookingForm;

