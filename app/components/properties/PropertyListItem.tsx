import Image from "next/image"

const PropertyListItem = ()=>{
    return(
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image fill src="/beach_1.jpg" alt="Beach Image"
                sizes="(max-width:768px)786px, (max-width:1200px):768px, 768px"
                className="hover:scale-110 object-cover transition h-full w-full"
                // width={120} height={120}
                />
            </div>
            <div className="mt-2">
                <p className="text-lg font-bold">Property Name</p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500"><strong>₹1299 </strong>per night</p>
            </div>

        </div>
    )
}
export default PropertyListItem