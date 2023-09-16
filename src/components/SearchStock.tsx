import { useState } from 'react';
import SearchStockResult from "./SearchStockResult";

export default function SearchStock() {
    const placeholder = "Search for a ticker or something, haha"

    const [tickerInput, setTickerInput] = useState("");

    return (
        <div className="flex flex-col justify-center w-1/4 font-semibold ">
            <input type="text"
                className="
                    rounded-full p-2 border-4 
                    border-indigo-100 bg-indigo-100
                    focus:ring-2
                    text-center
                    w-full
                    "
                placeholder={ placeholder }
                onFocus={(e) => e.target.placeholder=""}
                onBlur={(e) => {
                    e.target.placeholder=placeholder;
                    e.target.value = e.target.value.toUpperCase();
                    setTickerInput(e.target.value);
                }}
            />
            <SearchStockResult ticker={ tickerInput }/>
        </div>
    )
}