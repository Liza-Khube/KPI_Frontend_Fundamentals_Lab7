function GoodsCard({ name, price, image }) {
  return (
    <div className="goods-card">
      <img src={image} alt={name}></img>
      <b>
        <p>{name}</p>
      </b>
      <p>{price} грн</p>
    </div>
  );
}
export default GoodsCard;
