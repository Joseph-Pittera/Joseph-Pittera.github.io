import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { plantList } from "../../datas/figlist";
import { CategoryProps } from "../../types";
import styled from "styled-components";

const CenteredDiv = styled.div`
  text-align: center;
  margin: 1rem;
`;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const categories = plantList.reduce(
  (acc: string[], plant) =>
    acc.includes(plant.category) ? acc : [...acc, plant.category],
  []
);

function getStyles(
  category: string,
  activeCategories: readonly string[],
  theme: Theme
) {
  return {
    fontSize: 12,
    fontWeight:
      activeCategories.indexOf(category) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({
  activeCategories,
  setActiveCategories,
}: CategoryProps) {
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<typeof activeCategories>) => {
    const {
      target: { value },
    } = event;

    setActiveCategories(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <CenteredDiv>
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel id="demo-multiple-chip-label" sx={{ fontSize: 14 }}>
          Catégories
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          sx={{ fontSize: 14 }}
          multiple
          value={activeCategories}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Catégories" />}
          renderValue={(selected) => (
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0.5,
              }}
            >
              {selected.map((value, i) => (
                <Chip
                  key={`${value}-${i}`}
                  label={value}
                  sx={{ fontSize: 12 }}
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
          // sx={{ borderColor: "#d2194b" }}
        >
          {categories.map((category, i) => (
            <MenuItem
              key={`${category}-${i}`}
              value={category}
              style={getStyles(category, activeCategories, theme)}
            >
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </CenteredDiv>
  );
}
