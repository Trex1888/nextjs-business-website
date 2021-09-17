function Work({ img, title, description, buttonText }) {
  return (
    <section className="relative lg:flex mt-24 lg:ml-32">
      <div className="relative h-96 max-w-[500px] sm:max-w-[900px] lg:max-w-[975px]">
        <img src={img} alt="img" className="object-cover rounded-2xl" />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-white">{description}</p>

        <button
          className="text-sm bg-green-500 text-white hover:bg-white hover:text-green-500
          py-4 px-12 mt-5"
        >
          {buttonText}
        </button>
      </div>

      <div
        className="relative bg-white mb-20 py-4 max-w-[500px] sm:max-w-[900px] lg:max-w-[700px]
         rounded-2xl lg:right-20 lg:top-20 lg:mb-40 lg:mr-20"
      >
        <h2 className="text text-green-400 mx-2 text-center text-2xl mb-4 px-2">
          BUILDING APIs TO CONNECT YOUR BUSINESS
        </h2>

        <p className="px-4 text-blue-800">
          PROBLEM: A partner of ours has an internal tool used by marketing for
          customers to purchase software. As business needs have changed, the
          amount of flexibility needed for new products and marketing has
          increased. The current application is built upon monolithic
          architecture, which prevents flexibility and the necessary agility to
          compete in today’s market. <br /> <br /> SOLUTION: Our team was able
          to create a new application with microservice architecture to act as
          RESTful APIs. This design reduces code complexity, allows rapid
          changes, decreases response time, and provides a high level of
          reliability. With this new platform, the team was able to automate
          several manual processes, reduced errors, and allowed marketing to set
          up new incentives in minutes. We also added additional functionality
          that resulted in market penetration and increased sales. <br /> <br />{" "}
          TECH STACK: AWS (ECS Fargate & Elasticsearch), React, Redux, Next.js
          Node.js
        </p>
      </div>
    </section>
  );
}

export default Work;
