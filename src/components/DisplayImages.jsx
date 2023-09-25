import React, { useEffect, useState } from "react";
import { fetchAllData, fetchImage } from "../services/fetchUrl";
import "./styles.css";

const DisplayImages = () => {
    
    const [data, setData] = useState();
    const [chosenImgsIdx, setChosenImgsIdx] = useState([]);
    const [imagesSrc, setImagesSrc] = useState([]);
    const [isBrighten, setIsBrighten] = useState(false);
    
    useEffect(() => {
        fetchAllData()
        .then(data => {
            setData(data.products);
            set2NewRandomIdx(data.products);
        });
    
        
    },[]);

    const set2NewRandomIdx = (products) => {  
        const max = products.length-1;

        let num1 = Math.floor(Math.random() * max);
        while (chosenImgsIdx.includes(num1)) {
            num1 = Math.floor(Math.random() * max);
        }
        let num2 = Math.floor(Math.random() * max);
        while (num1 === num2 || chosenImgsIdx.includes(num2)) {
            num2 = Math.floor(Math.random() * max);
        }
        console.log("numbers: ", [num1, num2]);
        setChosenImgsIdx([num1, num2]);
    
    }
      

    useEffect(() => {
        if (data && chosenImgsIdx){

            const twoImgs = [data[chosenImgsIdx[0]], data[chosenImgsIdx[1]]];
            
            Promise.all(twoImgs.map(id => {
                return fetchImage(id.uuid)
                .then(image => image.blob()) // The response, the image is a ReadableStream - in order to disaplay must be read as "Binary Large Object"
                .then (blob => URL.createObjectURL(blob))
            })).then(res => {
                setImagesSrc(res);
                setIsBrighten(false);
            }
        );
        }
        
    },[chosenImgsIdx]);

    const onReplaceClick = () => {
        set2NewRandomIdx(data);
        
    }

    const onBrightenClick = () => {
        console.log("im here");
        setIsBrighten(true);
            
    }


    return (
        <div className="image-container">
            {imagesSrc && imagesSrc.map((imgSrc, index) => 
                <img id="image" className={ isBrighten ? "brighten-img" : null} key={`image${index}`} alt={`sentinel-${index}`} src={ imgSrc } />) }
            <div>
                <button onClick={onReplaceClick}>Replace</button>
                <button onClick={onBrightenClick}>Brighten</button>
            </div>
            
        </div>
    )

};

export default DisplayImages;