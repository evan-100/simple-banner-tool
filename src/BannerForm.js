import React, { useState } from "react";
import { TwitterPicker } from "react-color";
import CopyToClipboard from "react-copy-to-clipboard";

const BannerForm = () => {
  const [formData, setFormData] = useState({
    text: "Create. Curate. Connect.",
    text2: "eLearning Made Easy.",
    imageUrlBanner:
      "https://i.imgur.com/HrPDcjx.jpg",
    box1headline: "New Employee Training",
    box1text:
      "/courses/event/LearnerSession",
    box2headline: "Winners circle",
    box2text:
      "/achievements",
  });

  const [previewCode, setPreviewCode] = useState("");

  const handleAlignmentChange = (e) => {
    setFormData({
      ...formData,
      alignment: e.target.value,
    });
  };

  const generatePreviewCode = () => {
    const {
      text,
      text2,
      box1headline,
      box1text,
      box2headline,
      box2text,
      imageUrlBanner,
    } = formData;
    const code = `<style>
    /* --------------------------------- */
/* DASHBOARD BANNER */
/* --------------------------------- */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
.banner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 3em;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("${imageUrlBanner}") no-repeat center center;
  background-size: cover;
}
  .banner,div#htmlBanner{
    height: 500px;
  }
.banner img {
  max-height: 75px;
  -webkit-filter: drop-shadow(2px 3px 5px rgb(0 0 0 / 20%));
    filter: drop-shadow(2px 3px 5px rgb(0 0 0 / 20%));
}
.banner .banner-text {
  max-width: 75%;
}
.banner h1,
.banner p {
  font-family: "Poppins", sans-serif;
  color: white;
  text-shadow: 2px 3px 5px rgb(0 0 0 / 20%);
}
.banner h1 {
  font-size: 4em;
}
.banner p {
  font-size: 1.5em;
  font-weight: 300;
}
.banner .btn-default {
  margin-left: 1em;
}
  </style>
  <div class="banner">
    <div class="banner-text">
      <h1>${text}</h1>
      <p>${text2}</p>
    </div>
    <div class="banner-buttons">
      <a class="btn btn-lg btn-primary" href="${box1text}">${box1headline}</a>
      <a class="btn btn-lg btn-default" href="${box2text}">${box2headline}</a>
    </div>
  </div>`;
    setPreviewCode(code);
  };

  const [codeSnippet, setCodeSnippet] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generatePreviewCode();
    const {
      text,
      text2,
      box1headline,
      box1text,
      box2headline,
      box2text,
      imageUrlBanner,
    } = formData;
    setCodeSnippet(
      `<style>
      /* --------------------------------- */
  /* DASHBOARD BANNER */
  /* --------------------------------- */
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
  .banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 3em;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("${imageUrlBanner}") no-repeat center center;
    background-size: cover; 
  }
  .banner,div#htmlBanner{
    height: 500px;
  }
  .banner img {
    max-height: 75px;
    -webkit-filter: drop-shadow(2px 3px 5px rgb(0 0 0 / 20%));
      filter: drop-shadow(2px 3px 5px rgb(0 0 0 / 20%));
  }
  .banner .banner-text {
    max-width: 75%;
  }
  .banner h1,
  .banner p {
    font-family: "Poppins", sans-serif;
    color: white;
    text-shadow: 2px 3px 5px rgb(0 0 0 / 20%);
  }
  .banner h1 {
    font-size: 4em;
  }
  .banner p {
    font-size: 1.5em;
    font-weight: 300;
  }
  .banner .btn-default {
    margin-left: 1em;
  }
    </style>
    <div class="banner">
      <div class="banner-text">
        <h1>${text}</h1>
        <p>${text2}</p>
      </div>
      <div class="banner-buttons">
        <a class="btn btn-lg btn-primary" href="${box1text}">${box1headline}</a>
        <a class="btn btn-lg btn-default" href="${box2text}">${box2headline}</a>
      </div>
    </div>`
    );
  };

  return (
    <div className="container my-4">
      <h1 className="display-1">Banner Tool</h1>
      <hr />
      <form onSubmit={handleSubmit} className="row">
        <div className="col-md-4">
          <div className="mb-4">
            <label htmlFor="imageUrlBanner">Banner Background Image URL:</label>
            <input
              type="text"
              name="imageUrlBanner"
              value={formData.imageUrlBanner}
              onChange={handleChange}
              className="form-control"
              id="imageUrlBanner"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text">Banner Headline:</label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="form-control"
              id="text"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text">Banner Sub-headline:</label>
            <input
              type="text"
              name="text2"
              value={formData.text2}
              onChange={handleChange}
              className="form-control"
              id="text2"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-4">
            <label htmlFor="text">Button 1 Text:</label>
            <input
              type="text"
              name="box1headline"
              value={formData.box1headline}
              onChange={handleChange}
              className="form-control"
              id="box1headline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text">Button 1 URL:</label>
            <input
              type="text"
              name="box1text"
              value={formData.box1text}
              onChange={handleChange}
              className="form-control"
              id="box1text"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="mb-4">
            <label htmlFor="text">Button 2 Text:</label>
            <input
              type="text"
              name="box2headline"
              value={formData.box2headline}
              onChange={handleChange}
              className="form-control"
              id="box2headline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text">Button 2 URL:</label>
            <input
              type="text"
              name="box2text"
              value={formData.box2text}
              onChange={handleChange}
              className="form-control"
              id="box2text"
            />
          </div>
        </div>
        <div className="col-md-12 text-center">
          <button type="submit" className="btn btn-primary mb-4">
            Generate Code
          </button>
        </div>
      </form>

      <br />
      {codeSnippet && (
        <div className="row">
          <div className="col-md-12">
            <h4>Preview:</h4>
            <div dangerouslySetInnerHTML={{ __html: previewCode }}></div>
          </div>
          <hr className="my-4" />
          <div className="col-md-12">
            <h4>Banner HTML:</h4>
            <div className="form-text">
              Copy & Paste the code into the banner HTML section of your demo
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                id="codeSnippet"
                value={codeSnippet}
                readOnly
              />
            </div>
            <CopyToClipboard text={codeSnippet}>
              <button type="button" className="btn btn-primary my-4">
                Copy Code
              </button>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </div>
  );
};

export default BannerForm;
