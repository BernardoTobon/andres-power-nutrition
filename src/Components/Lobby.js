import Tilt from "react-parallax-tilt";

const Lobby = () => {
    return(
        <div className="w-full h-screen overflow-auto">
        <div className="flex justify-center">
          <Tilt>
            <img
              className="drop-shadow-2xl rounded-full h-70 w-[70vw] md:w-96 md:h-80 lg:w-96 lg:h-80 border-2 m-6 border-dark-green "
              src="/apnl.png"
            />
          </Tilt>
        </div>

        <div className="flex justify-center">
          <div className="w-[80vw] bg-white md:w-[60vw]">
           
          </div>
        </div>
        </div>
    )
}

export default Lobby