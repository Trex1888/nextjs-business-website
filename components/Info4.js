function Info4() {
  return (
    // <section className="bg-[#F8F9FA] pb-20 pt-20 px-10">
    // max-w-3xl mx-auto
    <div
      className="border relative border-white max-w-6xl mx-10 py-10 mb-24 
    lg:px-12 lg:mb-32 lg:mx-24 xl:mx-auto"
    >
      <h1 className="mx-auto items-center text-center text-white text-2xl text-semibold">
        TEAMMATE SPOTLIGHT - 2021 BLACK BELT AWARD RECIPIENTS
      </h1>

      <h2 className="text-lg font-light text-left text-white my-5 px-5">
        Each year, we recognize select teammates for exemplifying our core
        values by being great leaders, experts, owners, and teachers. This
        year's recipients join{" "}
        <span className="white">present Source Ally black belts</span> and{" "}
        <span className="white">alumni</span>.
      </h2>

      <div className="grid">
        <div className="grid grid-cols-2 lg:inline-flex items-center mx-auto">
          <img
            className="h-32 rounded-full cursor-pointer hover:animate-pulse"
            src="https://www.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92.jpg"
            alt="img"
          />
          <h2 className="avatar">Tommy Towel</h2>

          <img
            className="h-32 rounded-full my-1 cursor-pointer hover:animate-pulse"
            src="https://cdn.iconscout.com/icon/free/png-512/avatar-369-456321.png"
            alt="img"
          />
          <h2 className="avatar">Ashley Adams</h2>

          <img
            className="h-32 rounded-full my-1 cursor-pointer hover:animate-pulse"
            src="https://vectorified.com/images/business-avatar-icon-11.png"
            alt="img"
          />
          <h2 className="avatar">Mike Miller</h2>

          <img
            className="h-32 rounded-full"
            src="https://avatarfiles.alphacoders.com/791/79102.png"
            alt="img"
          />
          <h2 className="avatar">Suzy Sand</h2>
        </div>
      </div>
    </div>
    // </section>
  );
}

export default Info4;
