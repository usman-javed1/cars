import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Blog/Breadcrumb/Breadcrumb";
import Newscontact from "../components/Newscontact/Newscontact";
import ContainerWraper from "../components/General/ContainerWraper";
import NewsContactAll from "../components/NewsContactAll/NewsContactAll";
import ImageFullWidth from "../components/ImageFullWidth/ImageFullWidth";
import HowWorks from "../components/main/HowWorks/HowWorks";
import FAQ from '../components/main/FAQ/FAQ';
import Articles from "../components/NewsContactAll/Articles";
import { useNavigate, useParams } from "react-router-dom";

const News = () => {
  const [blogId, setBlogId] = useState(0);
  const { id } = useParams()
  const [images, setImages] = useState("");
  const [description, setDescription] = useState("");
  const [articleHeading, setArticleHeading] = useState("");
  const [activeOption, setActiveOption] = useState("");
  const [publishDate, setPublishDate] = useState("");


  useEffect(() => {
    setBlogId(id)
    if (id) {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/public/${id}`)  // Replace with your actual API endpoint
            .then(response => response.json())
            .then(data => {
                setImages(data?.data.photos)
                setDescription(data?.data?.description)
                setArticleHeading(data?.data?.title)
                console.log(data);
                setPublishDate(data?.data?.publishDate)
                setActiveOption(data?.data?.category)
            })
            .catch(err => console.error(err));
    }
}, [id]);
  return (
    <>
      <div className="w-full max-w-full mx-auto flex flex-col justify-between items-center">
      {blogId > 0 &&<>
        <ContainerWraper>
          
          <Breadcrumb crumbs={[{label: "Home", url: "/"}, {label: "News", url: "/news"}, {label: articleHeading, url: `/news/${id}`}]} activeCrumb={articleHeading} ></Breadcrumb>
          <Newscontact description={description} category={activeOption} publishDate={publishDate} heading={articleHeading} ></Newscontact>
        </ContainerWraper>
          <ImageFullWidth image={images}></ImageFullWidth>
          </>}
        <ContainerWraper>
          <NewsContactAll></NewsContactAll>
          <Articles />
          <div className="lg:mt-[50px] mt-[10px] ">
            <HowWorks></HowWorks>
          </div>
          <div className="lg:mb-[100px] mb-[10px]">
            <FAQ></FAQ>
          </div>
        </ContainerWraper>

      </div>
    </>
  );
};

export default News;
