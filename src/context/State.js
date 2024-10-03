import { useEffect, useState } from "react";
import { context as Context } from "./context";


const StatesStore = ({ children }) => {
    const [carData, setCarData] = useState([]);

    const [selectedValues, setSelectedValues] = useState({
        Make: ['All'],  // "All" is selected by default for "Make"
        Categories: [],
        Model: [],
        BodyType: [],
        Price: []
    });

    const [activeSort, setActiveSort] = useState({name:"Oldest to Newest", value:"OTN"});


    const [priceRange, setPriceRange] = useState({ min: 0, max: 100 });

    useEffect(() => {
        fetchData();
    }, [selectedValues])

    const fetchData = async () => {
        try {
            const queryParams = new URLSearchParams();
    
            if (!selectedValues.Make.includes('All')) {
                queryParams.append('brand', selectedValues.Make.join(','));
            }
    
            if (selectedValues.Categories.length > 0) {
                queryParams.append('categories', selectedValues.Categories.join(','));
            }

            if (selectedValues.BodyType.length > 0) {
                queryParams.append('BodyType', selectedValues.BodyType.join(','));
            }
    
            // Add "Model" filter (if any models are selected)
            if (selectedValues.Model.length > 0) {
                queryParams.append('model', selectedValues.Model.join(','));
            }
            if (activeSort) {
                queryParams.append('sort', activeSort.value);
            }
    
            // Add "Year" filter (if any years are selected)
            
    
            // Add "Price" filter (if price range is defined)
            if (priceRange.min !== 0 || priceRange.max !== 100) {
                queryParams.append('minPrice', priceRange.min);
                queryParams.append('maxPrice', priceRange.max);
            }
    
            // Fetch the data with the applied filters
            const response = await fetch(`http://localhost:3333/car/public?${queryParams.toString()}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setCarData(data.data);
            console.log(data); // Handle the filtered data as needed
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };
    
    
    return (
        <Context.Provider value={{ carData, setCarData, priceRange, setPriceRange,  selectedValues, setSelectedValues, activeSort, setActiveSort, fetchData }} >
            {children}
        </Context.Provider>
    )
}

export default StatesStore