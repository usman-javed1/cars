import React from "react";
import BlogHeader from "../components/Blog/BlogHeader/BlogHeader";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import BlogsTab from "../components/Blog/BlogsTab/blogstab";
// import FAQ from "../components/main/FAQ/Section1";
import HowWorks from "../components/main/HowWorks/HowWorks";
import Features from "../components/main/Features/Features";
import FAQ from "../components/main/FAQ/FAQ";
import ContainerWraper from "../components/General/ContainerWraper";
import Pagination from "../components/Blog/Pagination/Pagination";

const Blog = () => {
  return (
    <>
      <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center">
        <ContainerWraper>
          <Breadcrumb></Breadcrumb>
          <BlogHeader></BlogHeader>
          <BlogsTab></BlogsTab>
          {/* <Pagination/> */}
          <div className="lg:ml-0 -ml-3">
            <Features heading="Explore our special deals"></Features>
            {/* <FAQ */}
            <HowWorks />
            <div className="my-[10%]">
              <FAQ />
            </div>
          </div>
        </ContainerWraper>
      </div>
    </>
  );
};

export default Blog;
