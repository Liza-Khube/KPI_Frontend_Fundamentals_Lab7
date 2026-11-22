function Image({ width }) {
  return (
    <a href="https://omr.gov.ua/" target="_blank" rel="noreferrer">
      <img
        src="./imgs/odessa.jpg"
        alt="Одеса"
        style={width ? { width: `${width}px` } : undefined}
      />
    </a>
  );
}
export default Image;
