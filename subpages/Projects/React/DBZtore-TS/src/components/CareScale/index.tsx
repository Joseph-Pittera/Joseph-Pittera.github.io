import { StarOutlined } from "@ant-design/icons";

type CareScaleProps = {
  careType: "quality" | "size";
  scaleValue: number;
};

function CareScale({ scaleValue, careType }: CareScaleProps) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "quality" ? (
      <img src={`${(<StarOutlined />)}`} alt="star-icon" />
    ) : (
      <img src={`${(<StarOutlined />)}`} alt="size-icon" />
    );

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
