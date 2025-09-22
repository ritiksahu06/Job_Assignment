import React, { useState, useMemo, useEffect } from "react";
import Sidebar from "./components/Sidebar.jsx";
import MainSection from "./components/MainSection.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import products from "./data/Product.jsx";

const App = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Name");
  const [show, setShow] = useState(6);
  const [view, setView] = useState("grid");
  const [page, setPage] = useState(1);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedHotDeals, setSelectedHotDeals] = useState([]);
  const [maxPrice, setMaxPrice] = useState(10000);

  const [sidebarOpen, setSidebarOpen] = useState(false); // MOBILE toggle

  // Toggle handlers
  const toggleHotDeal = (brand) => {
    setPage(1);
    setSelectedHotDeals(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleBrand = (brand) => {
    setPage(1);
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleColor = (color) => {
    setPage(1);
    setSelectedColors(prev =>
      prev.includes(color) ? prev.filter(c => c !== color) : [...prev, color]
    );
  };

  const onPriceChange = (value) => {
    setPage(1);
    setMaxPrice(value);
  };

  // Filter & sort logic
  const filtered = useMemo(() => {
    let out = products.slice();

    if (search.trim()) out = out.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
    if (selectedHotDeals.length > 0) out = out.filter(p => p.isHot && selectedHotDeals.includes(p.brand));
    if (selectedBrands.length > 0) out = out.filter(p => selectedBrands.includes(p.brand));
    if (selectedColors.length > 0) out = out.filter(p => p.colors.some(c => selectedColors.includes(c)));
    out = out.filter(p => p.discountPrice <= maxPrice);

    switch (sortBy) {
      case "Price": out.sort((a,b)=>a.discountPrice-b.discountPrice); break;
      case "Rating": out.sort((a,b)=>b.ratingValue-a.ratingValue); break;
      case "Newest": out.sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)); break;
      default: out.sort((a,b)=>a.name.localeCompare(b.name));
    }

    return out;
  }, [search, selectedBrands, selectedColors, selectedHotDeals, maxPrice, sortBy]);

  const total = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / show));
  const paginated = useMemo(() => {
    const start = (page - 1) * show;
    return filtered.slice(start, start + show);
  }, [filtered, page, show]);

  useEffect(() => setPage(1), [search, selectedBrands, selectedColors, selectedHotDeals, maxPrice, sortBy, show]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with sidebar toggle */}
      <Navbar onToggleSidebar={() => setSidebarOpen(true)} />

      <div className="flex flex-1 overflow-x-hidden relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:flex flex-col w-[355px] flex-shrink-0">
          <Sidebar
            maxPrice={maxPrice}
            onPriceChange={onPriceChange}
            selectedBrands={selectedBrands}
            toggleBrand={toggleBrand}
            selectedColors={selectedColors}
            toggleColor={toggleColor}
            selectedHotDeals={selectedHotDeals}
            toggleHotDeal={toggleHotDeal}
          />
        </div>

        {/* Main section (always full width on mobile) */}
        <main className="flex-1 w-full px-2 sm:px-4 md:px-6">
          <MainSection
            products={paginated}
            totalCount={total}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
            search={search}
            setSearch={setSearch}
            sortBy={sortBy}
            setSortBy={setSortBy}
            show={show}
            setShow={setShow}
            view={view}
            setView={setView}
          />
        </main>

        {/* Mobile Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex lg:hidden">
            <div className="w-4/5 max-w-xs bg-white h-full p-4 overflow-y-auto flex flex-col gap-6">
              <button
                onClick={() => setSidebarOpen(false)}
                className="self-end mb-4 text-red-500 font-semibold"
              >
                ✕ Close
              </button>
              <Sidebar
                maxPrice={maxPrice}
                onPriceChange={onPriceChange}
                selectedBrands={selectedBrands}
                toggleBrand={toggleBrand}
                selectedColors={selectedColors}
                toggleColor={toggleColor}
                selectedHotDeals={selectedHotDeals}
                toggleHotDeal={toggleHotDeal}
              />
            </div>
            <div className="flex-1 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)}></div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default App;




