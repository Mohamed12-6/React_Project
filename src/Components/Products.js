import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import { Product } from ".";

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product))
    }

    useEffect(() => {
        const placeholderData = [
            {
                id: 1,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 32.499,
                image: "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            },
            {
                id: 2,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 17.082,
                image: "https://images.unsplash.com/photo-1597672996375-4d21cad0cbb9?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 3,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 14.788,
                image: "https://images.unsplash.com/photo-1566476927456-446189d7b1ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 4,
                title: "Hp",
                category: "hp",
                description: "HP 245 G7 laptop, Ryzen 3 3300U Core 4 processor, 8 GB RAM, 1 TB HDD, AMD Radeon Vega 6 graphics card, 14-inch HD (1366 x 768) anti-glare screen, Windows 10, dark silver color",
                price: 29.500,
                image: "https://images.unsplash.com/photo-1565906624603-eae91627707b?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 5,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 13.455,
                image: "https://images.unsplash.com/photo-1565375706404-082d37dd1f5d?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 6,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 19.255,
                image: "https://images.unsplash.com/photo-1588476376802-9e96f9d967f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 7,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 43.152,
                image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 8,
                title: "lenvo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 25.255,
                image: "https://images.unsplash.com/photo-1593642634402-b0eb5e2eebc9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 9,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 17.289,
                image: "https://images.unsplash.com/photo-1559163479-98365644374a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 10,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 53.255,
                image: "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 11,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 32.258,
                image: "https://images.unsplash.com/photo-1559163479-98365644374a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 12,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 25.300,
                image: "https://images.unsplash.com/photo-1545805524-7b1a4b0ae73b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 13,
                title: "Apple",
                category: "apple",
                description: "Description for Product 2",
                price: 70.300,
                image: "https://images.unsplash.com/photo-1602530647643-239476374fa1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 14,
                title: "Apple",
                category: "apple",
                description: "Description for Product 2",
                price: 65.255,
                image: "https://images.unsplash.com/photo-1522169799806-79cb544552bf?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 15,
                title: "Hp",
                category: "hp",
                description: "HP 245 G7 laptop, Ryzen 3 3300U Core 4 processor, 8 GB RAM, 1 TB HDD, AMD Radeon Vega 6 graphics card, 14-inch HD (1366 x 768) anti-glare screen, Windows 10, dark silver color",
                price: 599.99,
                image: "https://images.unsplash.com/photo-1490135900376-2e86d918a23b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 16,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 55.100,
                image: "https://images.unsplash.com/photo-1490135900376-2e86d918a23b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 17,
                title: "Hp",
                category: "hp",
                description: "HP 245 G7 laptop, Ryzen 3 3300U Core 4 processor, 8 GB RAM, 1 TB HDD, AMD Radeon Vega 6 graphics card, 14-inch HD (1366 x 768) anti-glare screen, Windows 10, dark silver color",
                price: 599.99,
                image: "https://images.unsplash.com/photo-1509701852059-c221a6f1e878?q=80&w=1991&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 18,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 16.257,
                image: "https://images.unsplash.com/photo-1544474560-5b2a788d024a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 19,
                title: "Hp",
                category: "hp",
                description: "HP 245 G7 laptop, Ryzen 3 3300U Core 4 processor, 8 GB RAM, 1 TB HDD, AMD Radeon Vega 6 graphics card, 14-inch HD (1366 x 768) anti-glare screen, Windows 10, dark silver color",
                price: 19.100,
                image: "https://images.unsplash.com/photo-1511844941619-5eadcd3735e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                id: 20,
                title: "Hp",
                category: "hp",
                description: "HP 245 G7 laptop, Ryzen 3 3300U Core 4 processor, 8 GB RAM, 1 TB HDD, AMD Radeon Vega 6 graphics card, 14-inch HD (1366 x 768) anti-glare screen, Windows 10, dark silver color",
                price: 20.100,
                image: "https://m.media-amazon.com/images/I/41OVO7NmezL._AC_SL1000_.jpg",
            },
            {
                id: 21,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 599.99,
                image: "https://m.media-amazon.com/images/I/61QhJ-8EUTL._AC_SX679_.jpg",
            },
            {
                id: 22,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 29.200,
                image: "https://m.media-amazon.com/images/I/41D8Xq0M-oL._AC_SX679_.jpg",
            },
            {
                id: 23,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price:28.100,
                image: "https://m.media-amazon.com/images/I/51+XYss2w3L._AC_SX679_.jpg",
            },
            {
                id: 24,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 30.500,
                image: "https://m.media-amazon.com/images/I/713skFDglHL._AC_SX679_.jpg",
            },
            {
                id: 25,
                title: "Hp",
                category: "hp",
                description: "HP 245 G7 laptop, Ryzen 3 3300U Core 4 processor, 8 GB RAM, 1 TB HDD, AMD Radeon Vega 6 graphics card, 14-inch HD (1366 x 768) anti-glare screen, Windows 10, dark silver color",
                price: 599.99,
                image: "https://m.media-amazon.com/images/I/71BWKAYWu6L._AC_SX679_.jpg",
            },
            {
                id: 26,
                title: "lenevo",
                category: "lenevo",
                description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS",
                price: 26.500,
                image: "https://m.media-amazon.com/images/I/512rfPA6vgL._AC_SX679_.jpg",
            },
            {
                id: 27,
                title: "Hp",
                category: "hp",
                description: "HP 245 G7 laptop, Ryzen 3 3300U Core 4 processor, 8 GB RAM, 1 TB HDD, AMD Radeon Vega 6 graphics card, 14-inch HD (1366 x 768) anti-glare screen, Windows 10, dark silver color",
                price: 36.500,
                image: "https://m.media-amazon.com/images/I/51ZOXEgJAmL._AC_SX679_.jpg",
            },
            {
                id: 28,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 39.500,
                image: "https://m.media-amazon.com/images/I/61QhJ-8EUTL._AC_SX679_.jpg",
            },
            {
                id: 29,
                title: "Dell",
                category: "dell",
                description: "the screen 14-inch HD screen (1366 x 768) ,Hard disk capacity 1 TB SATA hard disk",
                price: 40.600,
                image: "https://m.media-amazon.com/images/I/81Gphn97m9L._AC_SX679_.jpg",
            },
        ];

        if (componentMounted) {
            setData(placeholderData);
            setFilter(placeholderData);
            setLoading(false);
        }

        return () => {
            componentMounted = false;
        };
    }, []);

    const Loading = () => {
        return (
            <>
                <div className="col-12 py-5 text-center">
                    <Skeleton height={40} width={560} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
                <div className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                    <Skeleton height={592} />
                </div>
            </>
        );
    };

    const filterProduct = (cat) => {
        const updatedList = data.filter((item) => item.category === cat);
        setFilter(updatedList);
    }
    const ShowProducts = () => {
        return (
            <>
                <div className="buttons text-center py-5">
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => setFilter(data)}>All</button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("dell")}>Dell</button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("lenevo")}>
                        Lenevo
                    </button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("apple")}>Apple</button>
                    <button className="btn btn-outline-dark btn-sm m-2" onClick={() => filterProduct("hp")}>Hp</button>
                </div>

                {filter.map((product) => {
                    return (
                        <div id={product.id} key={product.id} className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4">
                            <div className="card text-center h-100" key={product.id}>
                                <img
                                    className="card-img-top p-3"
                                    src={product.image}
                                    alt="Card"
                                    height={300}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {product.title.substring(0, 12)}...
                                    </h5>
                                    <p className="card-text">
                                        {product.description.substring(0, 90)}...
                                    </p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item lead">{product.price}</li>
                                    {/* <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Vestibulum at eros</li> */}
                                </ul>
                                <div className="card-body">
                                    <Link to={"/product/" + product.id} className="btn btn-dark m-1">
                                        Buy Now
                                    </Link>
                                    <button className="btn btn-dark m-1" onClick={() => addProduct(product)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </>
        );
    };
    return (
        <>
            <div className="container my-3 py-3">
                <div className="row">
                    <div className="col-12">
                        <h2 className="display-5 text-center">Latest Products</h2>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </>
    );
};

export default Products;
