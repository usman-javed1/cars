import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { useNavigate } from 'react-router-dom';

const BlogModal = ({ blogId = null, closeModal }) => {
    const [step, setStep] = useState(1);
    const [articleHeading, setArticleHeading] = useState('');
    const [description, setDescription] = useState('');
    const [images, setImages] = useState('');
    const [activeOption, setActiveOption] = useState("");
    const [publishDate, setPublishDate] = useState("")
    const navigate = useNavigate()
    const options = ["Company Updates", "New Models and Offers", "Customer Stories", "Tips and Advice", "Insights", "Financial Tips"]

    const titleRef = useRef(null);
    const descRef = useRef(null);

    const handleTitleInput = (e) => {
        setArticleHeading(e.target.value);
        // Adjust the textarea height based on content
        titleRef.current.style.height = 'auto';
        titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    };

    const handleDescriptionInput = (e) => {
        setDescription(e.target.value);
        // Adjust the textarea height based on content
        descRef.current.style.height = 'auto';
        descRef.current.style.height = `${descRef.current.scrollHeight}px`;
    };
    useEffect(() => {
        if (blogId) {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/blog/public/${blogId}`)  // Replace with your actual API endpoint
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
    }, [blogId]);
    const handleFileChange = async (e) => {
        const cloudinaryUploadURL = 'https://api.cloudinary.com/v1_1/dbzjzgav7/image/upload';
        const uploadPreset = 'wheeldeals';
        const selectedFiles = e.target.files[0];


        const formData = new FormData();
        formData.append('file', selectedFiles);
        formData.append('upload_preset', uploadPreset);

        try {
            // Upload image to Cloudinary
            const response = await fetch(cloudinaryUploadURL, {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.secure_url) {
                setImages(data.secure_url);
            } else {
                alert('Error uploading image');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image');
        }
    };

    const saveBlog = () => {
        const blogData = {
            title: String(articleHeading || '').trim(),
            description: String(description || '').trim(),
            publishDate: String(publishDate || '').trim(),
            category: String(activeOption || '').trim(),
            photos: images,

            "blocks": []
        };

        console.log("Blog data is", blogData)

        const url = blogId ? `${process.env.REACT_APP_BACKEND_URL}/blog/private/${blogId}` : `${process.env.REACT_APP_BACKEND_URL}/blog/private`;
        const method = blogId ? 'POST' : 'POST';
        console.log("URL is ", url)

        fetch(url, {
            method: method,
            body: JSON.stringify(blogData),
            headers: {
                "Content-Type": "application/json",
                "authorization": `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(response => {
                if (response.ok) {
                    // closeModal();
                    setStep(4);
                } else {
                    console.error('Failed to save article');
                    alert("Every error is not bad but this error is bad");
                }
            })
            .catch(err => console.error('Error:', err));
    };

    return (
        <div
            className="w-[100vw] h-[100vh] flex fixed justify-center items-center top-0 left-0"
            style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
        >
            {/* Modal content */}
            <div className="w-[690px]" style={{ display: step === 4 ? "none" : "block" }} >
                {step === 1 && (
                    <div className="w-[690px] flex flex-wrap rounded-[15px] h-[95vh] max-h-[778px] bg-white px-10 overflow-y-auto overflow-x-hidden">
                        <div className="">
                            <div className="head flex text-[16px] text-[#767676] w-[650px] font-[500] mt-[36px]">
                                <div>{blogId ? 'Edit Article' : 'Add New Article'}</div>
                                <div className="ml-[30px] text-[500] text-[#B9B9B9]">Step 1/2 Article Content</div>
                            </div>

                            {/* First Textarea for Article Title */}
                            <div className="w-full mt-10">
                                <textarea
                                    ref={titleRef}
                                    className="w-full text-[45px] font-[700] break-words resize-none placeholder:text-[#E9E9E9]"
                                    style={{
                                        color: articleHeading === '' ? '#E9E9E9' : 'black',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        overflow: 'hidden',
                                        padding: '0',
                                    }}
                                    value={articleHeading}
                                    placeholder="Article Title"
                                    onChange={handleTitleInput}
                                    rows={1} // Start with 1 row
                                />
                            </div>

                            {/* Second Textarea for Additional Content */}
                            <div className="w-full mt-3">
                                <textarea
                                    ref={descRef}
                                    className="w-full text-[16px] font-[500] break-words resize-none placeholder:text-[#D8D8D8]"
                                    style={{
                                        color: 'black',
                                        backgroundColor: 'transparent',
                                        border: 'none',
                                        outline: 'none',
                                        overflow: 'hidden',
                                        padding: '0',
                                    }}
                                    placeholder="Start typing a description here..."
                                    onChange={handleDescriptionInput}
                                    value={description}
                                    rows={1} // Start with 1 row
                                />
                            </div>

                            {/* File upload for hero photo */}
                            <div className="mt-10">
                                <div className="head text-[15px] font-[700] mb-2 text-black mt-[36px]">
                                    {"Add hero photo"}
                                </div>
                                <div className="text-[12px] font-[400] flex gap-3 text-[#4E4E4E]">
                                    <img src={require('../../images/info.png')} alt="" />
                                    <div className="">Max size 5 MB. Use PNG, JPG or JPEG formats</div>
                                </div>

                                <div className="w-[80px] mt-10"></div>
                                <input
                                    type="file"
                                    multiple
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="bg-lightgray mt-3 text-[16px] font-[500] px-7 py-4 rounded-[10px] cursor-pointer hidden"
                                    id="photoSelector"
                                />
                                <div className="w-[10px]"></div>

                                <div className="-mt-10 flex gap-5 items-center">

                                    <label htmlFor="photoSelector" className="bg-lightgray mt-3 text-[16px] font-[500] px-7 py-4 rounded-[10px] cursor-pointer">
                                        Browse files
                                    </label>
                                    {images && <div className="">
                                        <img src={images} alt="" className='w-[52px] h-[52px] rounded-lg' />
                                    </div>}
                                </div>
                            </div>
                            <div className="mt-16">
                                <div className="head text-[15px] font-[700] mb-2 text-black mt-[36px]">
                                    {"Main Body Text: "}
                                </div>
                                <div className="w-[580px]">
                                    <div className="w-[240px] border border-[#D8D8D8]"></div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[600px] flex justify-between font-[500] pb-[30px] items-center">

                            <div className="w-[600px]  mt-10 flex justify-end gap-5 ">
                                <button className="" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button className="bg-black text-white px-8 py-4 rounded-[15px]" onClick={() => { setStep(step + 1) }}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className="w-[690px] flex flex-wrap rounded-[15px] h-[95vh] max-h-[778px] bg-white px-10 overflow-y-auto overflow-x-hidden">
                        <div className="">
                            <div className="head flex text-[16px] text-[#767676] w-[650px] font-[500] mt-[36px]">
                                <div>{blogId ? 'Edit Article' : 'Add New Article'}</div>
                                <div className="ml-[30px] text-[500] text-[#B9B9B9]">Step 1/2 Article Content</div>
                            </div>
                            <div className="mt-16 text-[22px] font-[700]">
                                Specify Article Category:
                            </div>

                            <div className="flex flex-wrap gap-3 mt-4">
                                {options.map((data, index) => (
                                    <div
                                        key={index}
                                        className={`text-[14px] ${activeOption === data ? "text-white" : "text-[#4E4E4E]"}  
                ${activeOption === data ? "bg-black" : "bg-[#F8F8F8]"} 
                rounded-[43px] p-[16px] cursor-pointer`}
                                        onClick={() => setActiveOption(data)} // Wrap in an anonymous function
                                    >
                                        {data}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-16 text-[22px] font-[700]">
                                Add Publish Date:
                            </div>

                            <DatePicker
                                selected={publishDate}
                                onChange={(date) => setPublishDate(date)}
                                dateFormat="yyyy/MM/dd"
                                placeholderText="YYYY / MM / DD"
                                className="bg-lightgray rounded-[10px] p-3 pl-6 mt-4 outline-none w-[273px]"
                            />

                        </div>
                        <div className="w-[600px] flex justify-between font-[500] pb-[30px] items-center">
                            <button className="mt-10 flex gap-1 justify-center items-center" onClick={() => setStep(step - 1)}>
                                <img src={require("../../images/back.png")} alt="" />
                                Back
                            </button>
                            <div className=" mt-10 flex justify-end gap-5 ">
                                <button className="" onClick={closeModal}>
                                    Cancel
                                </button>
                                <button className="bg-black text-white px-8 py-4 rounded-[15px]" onClick={saveBlog} >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {step === 4 && <div className="w-[400px] flex flex-wrap rounded-[15px] h-[400px] max-h-[400px] bg-white px-10 overflow-y-auto overflow-x-hidden justify-center items-center">
                <div className="flex flex-col items-center justify-between h-[350px] pt-14 relative">
                    <img src={require("../../images/Vector.png")} className='absolute top-[10px] right-[10px] cursor-pointer' onClick={() => { closeModal(); window.location.reload() }} alt="" />
                    <div className=" flex flex-col items-center">
                        <div className="">
                            <img src={require("../../images/Group 33543.png")} alt="" />
                        </div>
                        <div className="font-[700] text-[30px]">
                            Success!
                        </div>
                        <div className="mt-[25px] text-[14px] text-[#959595] font-[500] text-center">
                            Article is successfully {blogId ? "edited" : "added"}
                        </div>
                    </div>
                    <div className="w-[352px] h-[50px]  bg-black text-white justify-center items-center flex rounded-[10px] cursor-pointer" onClick={() => { closeModal(); navigate('/dashboard') }}>
                        <div className="text-[16px] font-[500]" >
                            Back to Dashboard
                        </div>
                    </div>
                </div>


            </div>}

        </div>
    );
};

export default BlogModal;
