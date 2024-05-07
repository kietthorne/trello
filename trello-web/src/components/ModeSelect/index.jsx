import { useColorScheme } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function ModeSelect() {
  // Gọi hook `useColorScheme` để lấy giá trị mode và hàm setMode
  const { colorScheme: mode, setColorScheme: setMode } = useColorScheme();

  const handleChange = (e) => {
    const selectedMode = e.target.value;
    setMode(selectedMode);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LightModeIcon fontSize="small" /> Light
          </Box>
        </MenuItem>

        <MenuItem value="dark">
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <DarkModeOutlinedIcon fontSize="small" /> Dark
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default ModeSelect;
