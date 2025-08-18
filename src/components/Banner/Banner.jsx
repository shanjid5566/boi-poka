import BannerImg from "../../assets/bannerImg.png"

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96 p-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-2/4 flex justify-center items-center">
            <img
          src={BannerImg}
          className="max-w-sm rounded-lg h-96"
        />
        </div>
        <div className="w-2/4 flex flex-col items-center">
          <h1 className="w-64 text-2xl md:text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
          <button class="btn btn-success text-white px-6 py-3 rounded-xl">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
