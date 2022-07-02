import images from "../images/images";
console.log(images);

const Die = (props) => {
  return (
    <div className="Die">
      <img src={images[`dice${props.value}${props.filled ? "filled" : ""}`]} />
    </div>
  );
};

export default Die;
