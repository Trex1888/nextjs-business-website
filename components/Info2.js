function Info2({ info, info1, info2, info3, info4, info5 }) {
  return (
    <div
      className="border relative border-white max-w-6xl mx-6 mb-24 
     lg:py-6 lg:px-4 lg:mb-32 lg:mx-24 xl:mx-auto"
    >
      <h2
        className="text-white justify-center text-center text-2xl my-4 mx-10
        font-light leading-relaxed lg:my-6"
      >
        "{info} <span className="text-teal1 font-normal">{info1}</span> {info2}{" "}
        <span className="text-teal1 font-normal">{info3}</span>."
      </h2>
      <p
        className="text-white justify-center text-right text-md my-4 mx-6
        font-light lg:my-6"
      >
        {info4}
        <br />
        {info5}
      </p>
    </div>
  );
}

export default Info2;
