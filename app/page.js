"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import SkeletonCard from "../components/SkeletonCard";

const categories = [
  { label: "All", value: "all" },
  { label: "Men's Clothing", value: "men's clothing" },
  { label: "Women's Clothing", value: "women's clothing" },
  { label: "Jewelry", value: "jewelery" },
  { label: "Electronics", value: "electronics" },
];

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  async function loadProducts() {
    setIsLoading(true);
    setError(false);
    const controller = new AbortController();
    const requestTimeout = setTimeout(() => controller.abort(), 10000);

    try {
      const response = await fetch("https://fakestoreapi.com/products", {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error("Could not load products");
      }

      const productData = await response.json();
      setProducts(productData);
    } catch {
      setError(true);
    } finally {
      clearTimeout(requestTimeout);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadProducts();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  function clearFilters() {
    setSearchTerm("");
    setSelectedCategory("all");
  }

  return (
    <>
      <Navbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <main>
        <section className="hero" id="home">
          <div className="hero__eyebrow">
            <span aria-hidden="true">&#10022;</span> Curated for everyday life
          </div>
          <h1>Everyday finds, made simple.</h1>
          <p>
            Browse quality essentials, standout style, and smart picks—all in
            one thoughtfully curated collection.
          </p>
          <a className="hero__button" href="#products">
            Shop the collection <span aria-hidden="true">→</span>
          </a>
        </section>

        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <span className="section-heading__label">Explore</span>
              <h2>Featured products</h2>
            </div>
            {!isLoading && !error && (
              <p>
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </p>
            )}
          </div>

          <div className="product-tools">
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              variant="large"
            />
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {isLoading && (
            <div
              className="product-grid"
              aria-label="Loading products"
              aria-busy="true"
            >
              {Array.from({ length: 8 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          )}

          {error && (
            <div className="status status--error" role="alert">
              <span className="status__icon" aria-hidden="true">!</span>
              <h3>Unable to load products</h3>
              <p>Please check your connection and try again.</p>
              <button
                className="status__button"
                type="button"
                onClick={loadProducts}
                disabled={isLoading}
              >
                {isLoading ? "Retrying..." : "Try again"}
              </button>
            </div>
          )}

          {!isLoading && !error && filteredProducts.length === 0 && (
            <div className="status">
              <span className="status__icon" aria-hidden="true">⌕</span>
              <h3>No products found</h3>
              <p>Try searching with a different product name or category.</p>
              <button className="status__button" type="button" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          )}

          {!isLoading && !error && filteredProducts.length > 0 && (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </section>
      </main>

      <footer>
        <div className="footer__brand">
          <a className="brand brand--footer" href="#home">
            <span className="brand__mark" aria-hidden="true">Q</span>
            QuickCart
          </a>
          <p>© 2026 QuickCart</p>
        </div>
        
        <div className="footer__right">
          <nav className="footer__links" aria-label="Footer navigation">
            <a href="#home">Privacy</a>
            <a href="#products">Help Center</a>
          </nav>
          <div className="footer__socials" aria-label="QuickCart social links">
            <a
              className="social-link social-link--linkedin"
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="QuickCart on LinkedIn"
            >
              <span aria-hidden="true">in</span>
            </a>
            <a
              className="social-link social-link--facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="QuickCart on Facebook"
            >
              <span aria-hidden="true">f</span>
            </a>
            
            <a
              className="social-link social-link--twitter"
              href="https://x.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="QuickCart on Twitter"
            >
              <span aria-hidden="true">𝕏</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
