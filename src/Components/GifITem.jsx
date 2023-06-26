export const GifItem = ({ image }) => {
  const { title, url } = image;

  return (
    <>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </>
  );
};
