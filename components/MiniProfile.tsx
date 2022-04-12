function MiniProfile() {
    return (
        <div className="flex items-center justify-between mt-7 ml-10">
            <img 
            className="w-16 h-16 rounded-full border p-[2px]"
            src="https://images.pexels.com/photos/2416871/pexels-photo-2416871.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
  
           <div className="flex-1 mx-4">
               <h2 className="font-bold">mihirpaunikar</h2>
               <h3 className="text-sm text-gray-400">Welcome to Offensivegrm</h3>
           </div>
  
           <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
  
        </div>
    )
  }
  
  export default MiniProfile