import React, { useContext, useEffect, useState } from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import ContainerWraper from "../components/General/ContainerWraper";
import Header from "../components/view-car/Header";
import CardContainer from "../components/Special/CardContainer";
import Pagination from "../components/Blog/Pagination/Pagination";
import HowWorks from "../components/main/HowWorks/HowWorks";
import FAQ from "../components/main/FAQ/FAQ";
import Explore from "../components/main/Explore/Explore";
import { context } from "../context/context";

const ViewCars = () => {
  const { carData, viewPage, setViewPage, isFilter, setIsFilter, priceRange, setPriceRange } = useContext(context);

  const [blogPosts, setBlogPosts] = useState([]);
  // const [page, setPage] = useState(1);

//   useEffect(() => {
//     console.log("Car data in view page is ", carData);
//   }, [carData]);

  useEffect(() => {
    if (carData && carData.cars) {
      const posts = carData.cars.map((car) => ({
        name: car.name,
        heading: `${car.category}`,
        image: Array.isArray(car.photos) ? car.photos[0] : car.photos,
        price: car.monthly_payment.toString(),
        lease: `${car.leaseTerm}`,
        mile: car.miles,
        seat: car.seats.toString(), // Convert number to string
        discount: "-40%", // Static discount of 40%
        transType: car.transType
      }));

      setBlogPosts(posts);
      setViewPage(carData.page || 1); // Ensure page is set correctly
    }
  }, [carData]);

  const handlePageChange = (newPage) => {
    setViewPage(newPage);
  };

  return (
    <>
      <div className="lg:px-0">
        <ContainerWraper>
          <Breadcrumb
            crumbs={["Home", "Cars for lease"]}
            activeCrumb="Cars for lease"
          />
          <Header carData={carData && carData.cars} total={carData && carData.total} setIsFilter={setIsFilter} isFilter={isFilter} setPriceRange={setPriceRange} priceRange={priceRange} />
          <CardContainer blogPosts={blogPosts} isSearch={true} />
          {/* <div className="text-center flex justify-center text-black font-[500] cursor-pointer">
            Show more
            <img src={require("../images/Frame 731.png")} alt="Show more" />
          </div> */}
          <Pagination
            setPage={handlePageChange}
            totalPages={carData.lastPage}
            currentPage={viewPage}
          />
          <br />
          <br />
          <HowWorks />
          <FAQ />
        </ContainerWraper>
      </div>
      <Explore />
    </>
  );
};

export default ViewCars;
