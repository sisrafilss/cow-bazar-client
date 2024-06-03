/* eslint-disable react/no-unescaped-entities */
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('https://i.ibb.co/93L3QB4/cow-bazar-cover.jpg')",
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to CowBazar</h1>
          <p className="mb-5">
            Discover premium cows at CowBazar, your trusted marketplace for
            quality livestock. Whether you're looking to expand your herd or
            start a new venture, we offer a diverse selection of healthy,
            well-bred cows to meet your needs.
          </p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
