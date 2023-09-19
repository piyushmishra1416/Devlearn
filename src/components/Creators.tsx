

function Creators() {
  const creators = [
    { name: 'Creator 1', imageSrc: 'image1.jpg' },
    { name: 'Creator 2', imageSrc: 'image2.jpg' },
    { name: 'Creator 3', imageSrc: 'image3.jpg' },
    { name: 'Creator 4', imageSrc: 'image4.jpg' }
  ];

  return (
    <div className="bg-white">
      <h2 className="text-3xl font-bold mb-4">Learn from Industry Experts</h2>
      <div className="flex justify-center">
        {creators.slice(0, 2).map((creator, index) => (
          <div key={index} className="card">
            <img src={creator.imageSrc} alt={creator.name} />
            <p className="text-center">{creator.name}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        {creators.slice(2).map((creator, index) => (
          <div key={index} className="card">
            <img src={creator.imageSrc} alt={creator.name} />
            <p className="text-center">{creator.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creators;
