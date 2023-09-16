type EntryProps = {
    ticker: string,
}

export default function Entry({ ticker }: EntryProps) {
    return (
        <div>
            { ticker }
        </div>
    )
}