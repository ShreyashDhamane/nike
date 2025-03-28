const ShoeCard = ({
  imgUrl,
  changeBigShoeImage,
  bigShoeImg, // This prop is not used in the current implementation
}) => {
  const handleClick = () => {
    if (bigShoeImg != imgUrl.bigShoe) {
      changeBigShoeImage(imgUrl.bigShoe); // Call the function to change the big shoe image
    }
  };
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgUrl.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgUrl.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        ></img>
      </div>
    </div>
  );
};

export default ShoeCard;
