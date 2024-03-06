import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import { Navbar } from "../Components";

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [similarProducts, setSimilarProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);

    const dispatch = useDispatch();

    const addProduct = (product) => {
        dispatch(addCart(product));
    };

    useEffect(() => {
        // Placeholder data for product
        const fakeProduct = 
        {
            id: 1,
            title: "Sample Product",
            description: "Lenovo V15 Laptop - Intel Core 10110U - i3, 4GB RAM, 1TB HDD, Intel HD Graphics 15, 15.6 Inch HD (1366 x 768) TN220 Anti-Glare, - Iron Gray, DOS.",
            price: 99.99,
            image: "https://images.unsplash.com/photo-1625766763788-95dcce9bf5ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }
        

        // Placeholder data for similar products
        const fakeSimilarProducts = [
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

        setLoading(true);
        setLoading2(true);

        // Set product and similar products with placeholder data
        setProduct(fakeProduct);
        setSimilarProducts(fakeSimilarProducts);

        setLoading(false);
        setLoading2(false);
    }, [id]);
    const Loading = () => {
        return (
            <>
                <div className="container my-5 py-2">
                    <div className="row">
                        <div className="col-md-6 py-3">
                            <Skeleton height={400} width={400} />
                        </div>
                        <div className="col-md-6 py-5">
                            <Skeleton height={30} width={250} />
                            <Skeleton height={90} />
                            <Skeleton height={40} width={70} />
                            <Skeleton height={50} width={110} />
                            <Skeleton height={120} />
                            <Skeleton height={40} width={110} inline={true} />
                            <Skeleton className="mx-3" height={40} width={110} />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const ShowProduct = () => {
        return (
            <>
                <div className="container my-5 py-2">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 py-3">
                            <img
                                className="img-fluid"
                                src={product.image}
                                alt={product.title}
                                width="400px"
                                height="400px"
                            />
                        </div>
                        <div className="col-md-6 col-md-6 py-5">
                            <h4 className="text-uppercase text-muted">{product.category}</h4>
                            <h1 className="display-5">{product.title}</h1>
                            <p className="lead">
                                {product.rating && product.rating.rate}{" "}
                                <i className="fa fa-star"></i>
                            </p>
                            <h3 className="display-6  my-4">${product.price}</h3>
                            <p className="lead">{product.description}</p>
                            <button
                                className="btn btn-outline-dark"
                                onClick={() => addProduct(product)}
                            >
                                Add to Cart
                            </button>
                            <Link to="/cart" className="btn btn-dark mx-3">
                                Go to Cart
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const Loading2 = () => {
        return (
            <>
                <div className="my-4 py-4">
                    <div className="d-flex">
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                        <div className="mx-4">
                            <Skeleton height={400} width={250} />
                        </div>
                    </div>
                </div>
            </>
        );
    };

    const ShowSimilarProduct = () => {
        return (
            <>
                <div className="py-4 my-4">
                    <div className="d-flex">
                        {similarProducts.map((item) => {
                            return (
                                <div key={item.id} className="card mx-4 text-center">
                                    <img
                                        className="card-img-top p-3"
                                        src={item.image}
                                        alt="Card"
                                        height={300}
                                        width={300}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {item.title.substring(0, 15)}...
                                        </h5>
                                    </div>
                                    {/* <ul className="list-group list-group-flush">
                    <li className="list-group-item lead">${product.price}</li>
                  </ul> */}
                                    <div className="card-body">
                                        <Link
                                            to={"/product/" + item.id}
                                            className="btn btn-dark m-1"
                                        >
                                            Buy Now
                                        </Link>
                                        <button
                                            className="btn btn-dark m-1"
                                            onClick={() => addProduct(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
                <div className="row my-5 py-5">
                    <div className="d-none d-md-block">
                        <h2 className="">You may also Like</h2>
                        <Marquee
                            pauseOnHover={true}
                            pauseOnClick={true}
                            speed={50}
                        >
                            {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
                        </Marquee>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
