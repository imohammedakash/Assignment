
export const LoadingCard = () => {
    return (
        <div className="w-[15rem] h-[20rem] rounded overflow-hidden shadow-lg m-2">
            <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
            <div className="px-6 py-4 items-center">
                <div className="font-regular text-xl mb-2 w-20 h-4 bg-gray-300 animate-pulse"></div>
            </div>
        </div>
    );
}

export const LoadingPosts = () => {
    const loadPages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
        <div className=" w-full p-4 rounded flex items-start justify-center flex-wrap gap-4">
        {loadPages.map(num => {return <LoadingCard />})}
        </div>
    );
}