export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          decoding="async"
        />
        <span className="product-card__category">{product.category}</span>
      </div>
      <div className="product-card__content">
        <h3 title={product.title}>{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__footer">
          <span className="product-card__price">${product.price.toFixed(2)}</span>
          <span
            className="product-card__rating"
            aria-label={`${product.rating.rate} out of 5 stars from ${product.rating.count} reviews`}
          >
            <span aria-hidden="true">&#9733;</span> {product.rating.rate}{" "}
            <small>({product.rating.count} reviews)</small>
          </span>
        </div>
      </div>
    </article>
  );
}
