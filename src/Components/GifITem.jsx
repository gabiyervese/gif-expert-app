import propTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </>
  );
};

GifItem.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};
