import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

function Hero() {
  return (
    <div className="relative lg:border-b-8 border-green-500 h-[300px] sm:h-[400px] lg:h-[500px] lg:mx-32 xl:h-[600px] 2xl:h-[700px]">
      <Image
        // src="https://links.papareact.com/0fm"
        // src="https://st2.depositphotos.com/3591429/12543/i/450/depositphotos_125433004-stock-photo-person-using-laptop-typing-on.jpg"
        src="https://media.istockphoto.com/vectors/cartoon-person-typing-on-keyboard-vector-illustration-vector-id625408886?k=6&m=625408886&s=170667a&w=0&h=UUk_q0t-ls28aOjYLHTUTIPzpdgSDMCGpXfvfUGFitI="
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/4 w-full text-center">
        <p className="text-l sm:text-3xl text-left ml-16 mb-2 xl:ml-24">
          Your Partner <br /> For Building
        </p>
        <p className="text-2xl sm:text-5xl text-left ml-16 xl:ml-24 text-black">
          TECHNOLOGY <br />
          SERVICES
        </p>
        <button
          className="text-green-500 bg-white px-10 py-4 shadow-md rounded-full 
       font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150"
        >
          LEARN MORE
        </button>
      </div>
    </div>
    // <div className="relative">
    //   <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
    //   <Carousel
    //     autoPlay={false}
    //     infiniteLoop
    //     showStatus={false}
    //     showIndicators={false}
    //     showThumbs={false}
    //     interval={5000}
    //   >
    //     <div>
    //       <img
    //         loading="lazy"
    //         src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/219234690_386869352801322_4250261090152196600_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=0debeb&_nc_ohc=saeKsuDFBVwAX8WW1xF&_nc_ht=scontent-ort2-2.xx&oh=45bc15b1f3586a53a3e54198cb54b549&oe=61419D2B"
    //         alt="img"
    //       />
    //     </div>

    //     <div>
    //       <img
    //         loading="lazy"
    //         src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/228955385_383381916483399_5445800686378818015_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=0debeb&_nc_ohc=g-Yx3cCV2E4AX9kMubV&_nc_ht=scontent-ort2-2.xx&oh=2372f369c313c470ef9e330d353ecd7d&oe=612FA285"
    //         alt="img"
    //       />
    //     </div>

    //     <div>
    //       <img
    //         loading="lazy"
    //         src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/222369287_384097983078459_6497722196841793939_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=0debeb&_nc_ohc=aszhUw6PHX0AX_e-Rs8&_nc_ht=scontent-ort2-2.xx&oh=9db2916511595bbd1665472f0098ddfd&oe=61316134"
    //         alt="img"
    //       />
    //     </div>
    //   </Carousel>
    // </div>
  );
}
export default Hero;
