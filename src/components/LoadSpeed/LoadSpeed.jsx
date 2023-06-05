import CircularProgressBar from "./Circular"

const LoadSpeed = () => {
  return (
    <div className="load-speed flex flex-col items-center justify-center gap-6 pb-[60px] pt-[60px]">
      <div className="flex flex-col items-center justify-center max-w-[1200px]">
        <div className="flex flex-col items-center justify-center max-w-[650px]">
          <h2 className="text-white font-bold text-3xl lg:text-5xl text-center pb-4">Fast Loading Speed Optimized for Your Website</h2>
          <h6 className="max-w-[510px] text-base text-center text-slate-300">Avarton is optimized to be fast & highly performant by having a good structure and well-written code.</h6>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 max-w-[780px] pt-[60px]">
        <CircularProgressBar percentage={98} maxPercentage={98} />
        <CircularProgressBar percentage={89} maxPercentage={89} />
        <CircularProgressBar percentage={70} maxPercentage={70} />
      </div>
    </div>
  )
}

export default LoadSpeed