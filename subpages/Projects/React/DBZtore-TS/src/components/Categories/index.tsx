import { Select } from "antd";
import type { SelectProps } from "antd";
import { figList } from "../../datas/figlist";
import { CategoryProps } from "../../types";

const options: SelectProps["options"] = [];
const categories = figList.reduce(
  (acc: string[], fig) =>
    acc.includes(fig.category) ? acc : [...acc, fig.category],
  []
);
categories.map((cat) => {
  options.push({
    value: cat,
    label: cat,
  });
});

export default function Category({
  activeCategories,
  setActiveCategories,
}: CategoryProps) {
  const handleChange = (value: string) => {
    setActiveCategories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  return (
    <Select
      mode="tags"
      style={{
        minWidth: 200,
        maxWidth: 500,
        margin: "1rem",
      }}
      placeholder="Catégories"
      onChange={handleChange}
      options={options}
    />
  );
}
