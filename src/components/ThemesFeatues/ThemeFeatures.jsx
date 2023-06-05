import FeatureItem from "../../constants/FeatureItem"

const ThemeFeatures = () => {
  return (
    <div className="bg-white flex flex-col items-center w-full pt-[620px]">
      <div className="flex flex-col justify-center items-center max-w-[720px]">
        <h6 className="bg-gradient-to-r from-blue-500 via-red-500 to-blue-500 text-transparent bg-clip-text font-bold text-xl mb-0">
          Theme Features
        </h6>
        <h2 className="pt-6 text-4xl lg:text-5xl text-center font-bold mb-9">
          Buy Avarton & enjoy some exclusive features
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center lg:grid grid-cols-4 max-w-[1200px]">
        {FeatureItem.map((item, index) => (
          <div key={index} className="flex flex-col items-center mb-16 w-[100%]">
            <div className="w-[100px] h-[100px] flex items-center justify-center mb-7 shadow-md rounded-md">
              <img src={item.icon} alt="" />
            </div>
            <div className="font-bold text-lg max-w-[190px] text-center">
              {item.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ThemeFeatures