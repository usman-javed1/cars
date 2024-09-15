import React from 'react';

const OvalO = ({ bg = "white", color = "#B9B9B9" }) => {
    return (
        <div>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="15" fill={bg} />
                <path d="M39.5 26C33.9181 26 28.8508 27.5053 25.1292 29.997C21.4076 32.4888 19 36.0278 19 40C19 43.9722 21.4076 47.5112 25.1292 50.003C28.8508 52.4947 33.9181 54 39.5 54C45.0819 54 50.1492 52.4947 53.8708 50.003C57.5924 47.5112 60 43.9722 60 40C60 36.0278 57.5924 32.4888 53.8708 29.997C50.1492 27.5053 45.0819 26 39.5 26ZM39.5 27.6471C44.7864 27.6471 49.5598 29.0901 52.9611 31.3674C56.3624 33.6447 58.36 36.6955 58.36 40C58.36 43.3045 56.3624 46.3553 52.9611 48.6326C49.5598 50.9099 44.7864 52.3529 39.5 52.3529C34.2136 52.3529 29.4402 50.9099 26.0389 48.6326C22.6376 46.3553 20.64 43.3045 20.64 40C20.64 36.6955 22.6376 33.6447 26.0389 31.3674C29.4402 29.0901 34.2136 27.6471 39.5 27.6471ZM39.5 29.2941C29.9905 29.2941 22.28 34.0879 22.28 40C22.28 45.9121 29.9905 50.7059 39.5 50.7059C49.0095 50.7059 56.72 45.9121 56.72 40C56.72 34.0879 49.0095 29.2941 39.5 29.2941ZM39.5 30.9412C39.9936 30.9412 40.4801 30.9574 40.9606 30.9862C40.9885 30.9879 41.016 30.9894 41.0439 30.991C42.8627 31.1072 44.5756 31.4333 46.1369 31.9175C48.1008 32.5953 49.34 33.5649 49.34 34.6471C49.34 36.1615 46.9234 37.4629 43.4655 38.0377C43.0087 33.9587 41.409 30.9412 39.5 30.9412ZM39.5 30.9412C37.591 30.9412 35.9913 33.9587 35.5345 38.0377C32.0766 37.4629 29.66 36.1615 29.66 34.6471C29.66 33.5649 30.8992 32.5953 32.8631 31.9175C34.4244 31.4333 36.1382 31.1072 37.9561 30.991C37.984 30.9894 38.0115 30.9879 38.0394 30.9862C38.5199 30.9574 39.0064 30.9412 39.5 30.9412ZM39.5 34.2353C40.5545 34.2353 41.4513 35.9055 41.8014 38.2468C41.0618 38.3135 40.2938 38.3529 39.5 38.3529C38.7062 38.3529 37.9382 38.3135 37.1986 38.2468C37.5487 35.9055 38.4455 34.2353 39.5 34.2353ZM26.601 35.6025C27.462 37.5485 30.8921 39.1269 35.4144 39.7314C35.4079 39.957 35.4 40.182 35.4 40.4118C35.4 44.214 36.3722 47.4842 37.7719 48.9913C30.4362 48.4659 24.74 44.6431 24.74 40C24.74 38.4032 25.4194 36.9053 26.601 35.6025ZM52.399 35.6025C53.5806 36.9053 54.26 38.4032 54.26 40C54.26 44.6431 48.5638 48.4659 41.2281 48.9913C42.6278 47.4842 43.6 44.214 43.6 40.4118C43.6 40.182 43.5921 39.957 43.5856 39.7314C48.1079 39.1269 51.538 37.5485 52.399 35.6025ZM37.0512 39.9035C37.845 39.9644 38.662 40 39.5 40C40.338 40 41.1558 39.9644 41.9504 39.9035C41.9553 40.0715 41.96 40.2405 41.96 40.4118C41.96 43.8228 40.8587 46.5882 39.5 46.5882C38.1413 46.5882 37.04 43.8228 37.04 40.4118C37.04 40.2405 37.0455 40.0715 37.0512 39.9035Z" fill={color} />
            </svg>
        </div>
    );
}

export default OvalO;
