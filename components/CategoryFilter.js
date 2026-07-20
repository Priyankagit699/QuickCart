export default function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}) {
  return (
    <div className="category-filter" aria-label="Filter products by category">
      {categories.map((category) => (
        <button
          key={category.value}
          className={
            selectedCategory === category.value
              ? "category-filter__button category-filter__button--active"
              : "category-filter__button"
          }
          type="button"
          onClick={() => onCategoryChange(category.value)}
          aria-pressed={selectedCategory === category.value}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
