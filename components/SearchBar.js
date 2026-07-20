export default function SearchBar({
  searchTerm,
  onSearchChange,
  variant = "navbar",
}) {
  const label =
    variant === "large" ? "Search the product collection" : "Search products";

  return (
    <label className={`search search--${variant}`}>
      <span className="search__icon" aria-hidden="true">⌕</span>
      <span className="sr-only">{label}</span>
      <input
        type="search"
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        placeholder="Search products..."
        aria-label={label}
      />
      {searchTerm && (
        <button
          type="button"
          onClick={() => onSearchChange("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </label>
  );
}
