import React, { useState } from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import ContainerWraper from "../components/General/ContainerWraper";
import Header from "../components/view-car/Header";
import CardContainer from "../components/Special/CardContainer";
import Pagination from "../components/Blog/Pagination/Pagination"
import HowWorks from "../components/main/HowWorks/HowWorks"
import FAQ from "../components/main/FAQ/FAQ"
import Explore from "../components/main/Explore/Explore"

const ViewCars = () => {

    const blogPosts = [
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "Mercedes-AMG GT Coupé",
            heading: "Sport cars",
            image: require("../images/cardwhite.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "BMW M8 Competition",
            heading: "Sport cars",
            image: require("../images/card3.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "Mercedes-AMG GT Coupé",
            heading: "Sport cars",
            image: require("../images/cardwhite.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "BMW M8 Competition",
            heading: "Sport cars",
            image: require("../images/card3.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "Mercedes-AMG GT Coupé",
            heading: "Sport cars",
            image: require("../images/cardwhite.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "BMW M8 Competition",
            heading: "Sport cars",
            image: require("../images/card3.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "2024 Kia Forte LXS 4dr Sedan",
            heading: "Sport cars",
            image: require("../images/blackcar.png"),
            price: "839",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "Mercedes-AMG GT Coupé",
            heading: "Sport cars",
            image: require("../images/cardwhite.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },
        {
            name: "BMW M8 Competition",
            heading: "Sport cars",
            image: require("../images/card3.png"),
            price: "1239",
            lease: "39 months",
            mile: "8000",
            seat: "4",
            discount: "-40%",
        },

    ];
    const [page, setPage] = useState(1)


    return (
        <>
            <div className="lg:px-0 pl-[5%]">
                <ContainerWraper>
                    <Breadcrumb crumbs={["Home", "Cars for lease"]} activeCrumb="Cars for lease" />
                    <Header />
                    <CardContainer blogPosts={blogPosts} isSearch={true} />
                    <div className=" text-center flex justify-center  text-black font-[500]">
                        Show more
                        <img src={require("../images/Frame 731.png")} alt="" />
                    </div>
                    <Pagination setPage={setPage} totalPages={10} currentPage={page} />
                    <br /><br />
                    <HowWorks />
                    <FAQ />
                </ContainerWraper>
            </div>
            <Explore /> 
        </>
    );
};

export default ViewCars;
