import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getAllCategories } from "../api";
import CategoryList from "../components/CategoryList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

export default function Home() {
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const { pathname, search } = useLocation();
    const { push } = useHistory();

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split("=")[1].toLowerCase()),
                      )
                    : data.categories,
            );
        });
    }, [search]);

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase()),
            ),
        );
        push({
            pathname,
            search: `?search=${str}`,
        });
    };

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}
