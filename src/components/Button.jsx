const Button = ({
  label,
  iconUrl, // Assuming you want to use this for an icon next to the label
  backgroundColor = "bg-coral-red",
  borderColor = "border-coral-red",
  textColor = "text-white",
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white border-coral-red"
      } rounded-full `}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 rounded-full w-5 h-5"
        ></img>
      )}
    </button>
  );
};

export default Button;
