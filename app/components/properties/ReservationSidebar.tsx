const ReservationSidebar= ()=>{
    return(
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h2 className="mb-5 text-2xl">₹1299 per night</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block border-gray-400 rounded-xl">Guests</label>
                <select name="" id="" className="w-full ml-1 text-xs">
                    <option value="">1</option>
                    <option value="">3</option>
                    <option value="">2</option>

                </select>
            </div>
            <div className="w-full mb-6 py-6 text-center text-white bg-airbnb hover:bg-airbnb-dark rounded-xl">
                Book
            </div>
            <div className="mb-4 flex justify-between align-center ">
                <p>₹1999 * 4 nights</p>
                <p>₹6999</p>
            </div>
            <div className="mb-4 flex justify-between align-center ">
                <p>Airbnb fee 4 nights</p>
                <p>₹699</p>
            </div>
            <hr />
            <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>
                <p>₹7999</p>
            </div>
        </aside>
    )
}
export default ReservationSidebar