import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, text, imageUrl, linkUrl,}) => (
  <div className="card h-100 shadow-sm">
    {imageUrl ? (
      <img src={imageUrl} className="card-img-top card-image" alt={title} />
    ) : (
      <div className="card-img-top card-placeholder">
        500 x 325
      </div>
    )}
    <div className="card-body text-center">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
    <div className="card-footer text-center bg-white border-0">
      <a href={linkUrl || "#"} className="btn btn-primary">
        Find Out More!
      </a>
    </div>
  </div>
);

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default Card;

