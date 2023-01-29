
export const Card = ({ name, email, gender, phone, picture }) => {
    return (
        <div className="w-[15rem] h-[20rem] p-4 rounded overflow-hidden shadow-lg m-2">
            <div className="px-6 py-4">
                <div className="font-regular text-xl mb-2">
                    <img src={picture.large} alt="" className="rounded-full" />
                </div>
            </div>
            <div className="flex items-start justify-center w-full flex-col gap-1">
                <span> Name: {name.first+ ` ` + name.last}</span>
                <span className="w-full text-ellipsis overflow-hidden whitespace-nowrap"> Email: {email}</span>
                <span> Gender {gender}</span>
                <span> Phone: {phone}</span>
            </div>
        </div>
    );
}