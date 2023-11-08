import kunal from '../assets/kunal.jpeg';
import kirat from "../assets/kirat.png";
import gamer from "../assets/gamer.png";
import mosh from "../assets/mosh.jpeg";

function Creators() {
  const creators = [
    { name: 'Kunal Kushwaha', imageSrc: kunal },
    { name: 'Harkirat', imageSrc: kirat },
    { name: 'Game', imageSrc: gamer },
    { name: 'Mosh', imageSrc: mosh }
  ];

  return (
    <div className="bg-white py-8 md:py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl font-bold pb-4 md:pb-8 mb-4 md:mb-8 text-center">Learn from Industry Experts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-screen-lg mx-auto">
        {creators.map((creator, index) => (
          <div key={index} className="card rounded-md overflow-hidden bg-gray-100">
            <img src={creator.imageSrc} alt={creator.name} className='w-full h-56 object-cover' />
            <div className="p-4 text-center">
              <p className="text-xl font-bold mb-2">{creator.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creators;
