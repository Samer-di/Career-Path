const StepsTitles = () => {
  return (
    <div className="w-full grid-rows-[500px_500px] lg:grid-rows-[500px_150px] h-auto grid">
      <div className="w-full bg-[url('/stepsBack.avif')] bg-no-repeat bg-size-[180%_100%] md:bg-size-[150%_100%] lg:bg-size-[100%_100%] flex flex-col justify-center">
        <p className="text-xl pl-5 font-bold">MY CAREER PLAN</p>
        <h1 className="text-5xl text-wrap font-bold pl-5 pt-3">
          I don’t need to do <br />
          everything today. <br />
          <span className="text-blue-600">I need to know my next step.</span>
        </h1>
        <p className="pl-5 pt-3">
          A simple three-stage plan to help me prepare, improve my skills,
          <br /> and apply for the right opportunities.
        </p>
      </div>
      <div className="w-full h-auto bg-[#a7cdff] flex flex-col lg:flex-row">
        <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
          <div className="w-[80%] h-[80%] lg:w-[75%] lg:h-[75%] rounded-3xl bg-white flex flex-row">
            <div className="w-1/4 h-full flex items-center justify-center">
              <div className="ml-2 w-16.25 h-16.25 bg-blue-400 rounded-full flex items-center justify-center">
                <p className="text-5xl font-bold text-white">1</p>
              </div>
            </div>
            <div className="w-3/4 h-full flex flex-col justify-center">
              <h2 className="font-bold pl-3 text-xl">Prepare</h2>
              <p className="pl-3">Build my foundation</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
          <div className="w-[80%] h-[80%] lg:w-[75%] lg:h-[75%] rounded-3xl bg-white flex flex-row">
            <div className="w-1/4 h-full flex items-center justify-center">
              <div className="ml-2 w-16.25 h-16.25 bg-orange-500 rounded-full flex items-center justify-center">
                <p className="text-5xl font-bold text-white">2</p>
              </div>
            </div>
            <div className="w-3/4 h-full flex flex-col justify-center">
              <h2 className="font-bold pl-3 text-xl">Practice</h2>
              <p className="pl-3">Strengthen my skills</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[33.3%] lg:w-[33.3%] lg:h-full flex items-center justify-center">
          <div className="w-[80%] h-[80%] lg:w-[75%] lg:h-[75%] rounded-3xl bg-white flex flex-row">
            <div className="w-1/4 h-full flex items-center justify-center">
              <div className="ml-2 w-16.25 h-16.25 bg-green-500 rounded-full flex items-center justify-center">
                <p className="text-5xl font-bold text-white">3</p>
              </div>
            </div>
            <div className="w-3/4 h-full flex flex-col justify-center">
              <h2 className="font-bold pl-3 text-xl">Apply</h2>
              <p className="pl-3">Find opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsTitles;
