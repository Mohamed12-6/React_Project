import React from "react";
import mainimg from "../image/img/keila-hotzel-tJtUvIG3vPI-unsplash.jpg"
const Main = () => {
    return (
        <>
            <div className="hero border-1 pb-3">
                <div className="card bg-dark text-white border-0 mx-3">
                    <img
                        className="card-img img-fluid  imagee"
                        src={mainimg}
                        alt="Card"
                    />
                    <div className="card-img-overlay d-flex align-items-center">
                        <div className="container text">
                            <h5 className="card-title fs-1 text fw-lighter">Laptop</h5>
                            <p className="card-text fs-5 d-none d-sm-block te">
                                This is a laptop exhibition to buy a laptop
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;