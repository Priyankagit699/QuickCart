export default function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-card__image" />
      <div className="skeleton-card__content">
        <div className="skeleton skeleton-card__title" />
        <div className="skeleton skeleton-card__title skeleton-card__title--short" />
        <div className="skeleton skeleton-card__line" />
        <div className="skeleton skeleton-card__line skeleton-card__line--short" />
        <div className="skeleton-card__footer">
          <div className="skeleton skeleton-card__price" />
          <div className="skeleton skeleton-card__rating" />
        </div>
      </div>
    </div>
  );
}
