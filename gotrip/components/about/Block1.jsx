import Image from "next/image";

const Block1 = () => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">About Dream Trip</h2>
        <p className="mt-5">These popular destinations have a lot to offer</p>
        <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
          Kashmir – The Paradise on Earth
           Nestled in the lap of the Himalayas, 
           Kashmir is a breathtaking region known for its snow-capped mountains, lush valleys, and serene lakes. 
           With its rich cultural heritage, vibrant traditions, and warm hospitality, 
           Kashmir is a dream destination for travelers and nature lovers alike.
          <br />
          <br />
              From the iconic Dal Lake and its charming houseboats to the majestic peaks of Gulmarg and Pahalgam, 
              Kashmir offers a perfect blend of adventure, tranquility, and natural splendor. 
              Whether you're skiing on powdery slopes, enjoying a shikara ride, or savoring the region's rich cuisine, 
              every moment in Kashmir feels like a dream.
              Immerse yourself in the warmth of Kashmiri hospitality, explore its timeless traditions, 
              and witness the artistry of handwoven Pashmina shawls and intricate handicrafts. 
              Kashmir isn’t just a destination; it’s an experience that stays with you forever.
              Plan your journey to this paradise and let Kashmir weave its magic around you.
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
