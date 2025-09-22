import React from "react";
import HeroBanner from "./HeroBanner";
import Toolbar from "./Toolbar";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";

const MainSection = ({
  products,
  totalCount,
  page,
  setPage,
  totalPages,
  search,
  setSearch,
  sortBy,
  setSortBy,
  show,
  setShow,
  view,
  setView,
}) => {
  return (
    <main className="flex-1 p-4 mt-[65px] flex flex-col gap-6">
      <HeroBanner
        title="Adidas Men Running Sneakers"
        subtitle="Performance and design. Taken right to the edge."
        ctaLink="#"
        image={products[0]?.img || ""}
      />

      <Toolbar
        totalCount={totalCount}
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
        show={show}
        setShow={setShow}
        view={view}
        setView={setView}
      />

      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            : "flex flex-col gap-4 items-center"
        }
      >
        {products.map((product) => (
          <div
            key={product.id}
            className={view === "flex" ? "w-full max-w-md" : ""}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} totalPages={totalPages} />
    </main>
  );
};

export default MainSection;

