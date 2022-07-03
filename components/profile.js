import Image from "next/image";
import jerry from "../public/images/jerry.jpg";
function profile() {
  return (
    <div
      className="flex flex-col md:flex md:flex-col md:justify-center md:items-center justify-center items-center md:w-40 w-full"
      style={{ borderRadius: "20px" }}
    >
      <div
        className="relative  w-full  bg-indigo-600 z-10 "
        style={{ borderRadius: "20px" }}
      >
        {/* firstdiv //////////////////////////////////*/}
        <div className=" md:m-0 m:auto text-center" style={{ margin: "20px" }}>
          <Image
            src={jerry}
            width={100}
            height={100}
            alt="jerry"
            className="md:rounded-full 
             border-4 border-white object-cover "
            style={{ border: "5px solid white" }}
          />
        </div>
        <div className="p1 text-center text-white">Report For</div>
        <div className="p-2 text-2xl text-center text-white">Jeremia</div>
        <div className=" p-2 text-2xl text-center text-white">Sunny</div>
      </div>
      {/* seconddiv //////////////////////////////////////////*/}
      <div
        className=" dark:bg-indigo-900 w-100  h-32 rounded-b-2xl z-0  "
        style={{ marginTop: "-10px" }}
      >

        <h1 className=" text-center mt-4 md:ml-3 md:mt-4  text-white">Daily</h1>
        <h4 className=" text-center mt-4 md:ml-3 md:mt-4  text-white">Weekly</h4>
        <h4 className=" text-center mt-4 md:ml-3 md:mt-4  text-white">Wonthly</h4>
      </div>
    </div>
  );
}
export default profile;
