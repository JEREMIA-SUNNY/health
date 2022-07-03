import { useEffect, useState } from "react";
import Image from "next/image";
function cards() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(() => {
    const fetchings = async () => {
      const response = await fetch("http://localhost:4000/hours");
      const data = await response.json();
      setData(data);
    };
    fetchings();
  }, []);

  return (
    <>
      {data.map((product) => {
        return (
          //CARD PICS
          <div key={product.id} className=" h-96 lg:h-full shadow-md ">
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden"
              style={{
                backgroundImage: `url('${product.img}')`,
                backgroundSize: "cover",
              }}
            >
              <div
                className="dark:bg-indigo-900  rounded-2xl text-white  md:z-10 w-full h-2/3  md:h-4/5 absolute bottom-0 "
               
              >
                <div className="flex justify-around gap-8 mt-2">
                  <div className="">{product.category}</div>
                  <div>...</div>
                </div>
                <div className="mt-4 ml-6">
                  <h1 className="font-mono font">{product.time}</h1>
                </div>
                <div>
                  <p className="ml-4  font-2">{product.last}</p>
                </div>
              </div>
            </div>
            {/* health info page */}
          </div>
        );
      })}
    </>
  );
}
export default cards;
