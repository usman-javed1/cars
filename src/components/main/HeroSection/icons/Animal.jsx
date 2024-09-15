import React from 'react';

const Animal = ({ bg = "white", color = "#B9B9B9" }) => {
    return (
        <div>
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="80" height="80" rx="15" fill={bg} />
                <path d="M62.5502 44.4035C62.3365 44.3451 61.8851 44.5367 61.1692 44.9526C61.1692 44.9526 60.4102 45.3475 59.1663 45.3475C58.208 45.3475 56.2137 43.9349 55.5122 43.4902C51.9425 41.2305 50.6219 40.3306 47.6961 38.7283C40.6467 34.8701 34.7674 32.8749 30.268 31.5993C27.4716 30.8068 25.8061 30.1331 23.7083 30.0133C21.0077 29.86 18.3589 31.0617 18.1251 32.0842C18.0867 32.2529 17.8175 32.6334 17.5271 32.9314C17.206 33.2611 17 33.5754 17 33.7335C17 34.1619 17.643 34.872 18.1375 34.9889C18.3762 35.0455 18.7077 35.1279 18.8764 35.172C18.9167 35.1825 18.9387 35.1854 18.9684 35.1921C18.9358 35.2668 18.9262 35.4068 18.9157 35.6761C18.8726 36.7935 19.5396 37.1011 20.3273 36.2865C20.8333 35.7633 21.7916 35.7633 22.75 35.7633C24.6666 35.7633 25.9373 36.0153 26.5833 36.7216L27.5416 37.6952H26.5833C25.1956 37.8026 23.9459 38.1514 23.4026 38.7465C22.9886 39.1998 22.7691 39.6905 22.7509 40.1514C22.7356 40.5319 22.8582 40.8932 23.1227 41.1979C23.4974 41.5353 23.7083 41.5285 24.1098 41.5285C25.3096 41.5285 25.1784 40.6018 25.6249 40.5702C26.1328 40.5348 27.5416 41.5285 30.4166 41.5285C32.0035 41.5285 33.2915 40.5702 33.2915 40.5702C33.2915 40.5702 34.1962 41.5285 39.0415 41.5285C42.5221 41.5285 41.9893 41.841 42.8748 43.4452C43.3741 44.2435 44.7914 46.3202 48.6248 46.3202C51.4997 46.3202 52.2012 46.6978 53.5544 47.5162C54.0307 47.8046 54.4456 48.0423 54.4753 48.0452C54.505 48.048 56.2684 49.5679 56.5223 49.727C56.6709 49.82 56.9881 49.9656 57.2267 50.0519C57.4653 50.1372 57.8764 50.1621 58.1438 50.1621C58.2099 50.1621 59.1683 50.1631 59.1683 48.8482V48.2464C59.1683 48.2464 60.7313 48.1899 61.7174 47.221C61.9723 47.0763 62.808 45.6589 62.9287 45.3724C63.1079 44.9459 62.9373 44.5099 62.5502 44.4035Z" fill={color}/>
                <path d="M62.5502 44.4035C62.3365 44.3451 61.8851 44.5367 61.1692 44.9526C61.1692 44.9526 60.4102 45.3475 59.1663 45.3475C58.208 45.3475 56.2137 43.9349 55.5122 43.4902C51.9425 41.2305 50.6219 40.3306 47.6961 38.7283C40.6467 34.8701 34.7674 32.8749 30.268 31.5993C27.4716 30.8068 25.8061 30.1331 23.7083 30.0133C21.0077 29.86 18.3589 31.0617 18.1251 32.0842C18.0867 32.2529 17.8175 32.6334 17.5271 32.9314C17.206 33.2611 17 33.5754 17 33.7335C17 34.1619 17.643 34.872 18.1375 34.9889C18.3762 35.0455 18.7077 35.1279 18.8764 35.172C18.9167 35.1825 18.9387 35.1854 18.9684 35.1921C18.9358 35.2668 18.9262 35.4068 18.9157 35.6761C18.8726 36.7935 19.5396 37.1011 20.3273 36.2865C20.8333 35.7633 21.7916 35.7633 22.75 35.7633C24.6666 35.7633 25.9373 36.0153 26.5833 36.7216L27.5416 37.6952H26.5833C25.1956 37.8026 23.9459 38.1514 23.4026 38.7465C22.9886 39.1998 22.7691 39.6905 22.7509 40.1514C22.7356 40.5319 22.8582 40.8932 23.1227 41.1979C23.4974 41.5353 23.7083 41.5285 24.1098 41.5285C25.3096 41.5285 25.1784 40.6018 25.6249 40.5702C26.1328 40.5348 27.5416 41.5285 30.4166 41.5285C32.0035 41.5285 33.2915 40.5702 33.2915 40.5702C33.2915 40.5702 34.1962 41.5285 39.0415 41.5285C42.5221 41.5285 41.9893 41.841 42.8748 43.4452C43.3741 44.2435 44.7914 46.3202 48.6248 46.3202C51.4997 46.3202 52.2012 46.6978 53.5544 47.5162C54.0307 47.8046 54.4456 48.0423 54.4753 48.0452C54.505 48.048 56.2684 49.5679 56.5223 49.727C56.6709 49.82 56.9881 49.9656 57.2267 50.0519C57.4653 50.1372 57.8764 50.1621 58.1438 50.1621C58.2099 50.1621 59.1683 50.1631 59.1683 48.8482V48.2464C59.1683 48.2464 60.7313 48.1899 61.7174 47.221C61.9723 47.0763 62.808 45.6589 62.9287 45.3724C63.1079 44.9459 62.9373 44.5099 62.5502 44.4035Z" fill={color} />
            </svg>
        </div>
    );
};

export default Animal;
