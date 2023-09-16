import { useEffect } from 'react';

export default function SearchStockResult(
    props: { 
        ticker: string
    }) {
    async function getCoins() {
        const response = await fetch("https://www.coingecko.com/coins/list");
        const coins = await response.json();
        return coins;
    }

    useEffect(() => {
        console.log('tyest');
    }, [props.ticker]);

    return (
        <div>
            { props.ticker }
        </div>
    )
}