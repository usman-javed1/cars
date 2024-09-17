import React from "react";
import BlogHeader from "../components/Blog/BlogHeader/BlogHeader";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import BlogsTab from "../components/Blog/BlogsTab/blogstab";
// import FAQ from "../components/main/FAQ/Section1";
import HowWorks from "../components/main/HowWorks/HowWorks";
import Features from "../components/main/Features/Features";
import FAQ from "../components/main/FAQ/FAQ";

const Blog = () => {
  return(
    <>
    <Breadcrumb></Breadcrumb>
    <BlogHeader></BlogHeader>
    <BlogsTab></BlogsTab>
    <Features></Features>
    {/* <FAQ */}
    <FAQ />
    <div className="my-[10%]">
    <HowWorks></HowWorks>
    </div>
    </>
  );
};

export default Blog;
