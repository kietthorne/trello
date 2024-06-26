import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ModeSelect from "../../components/ModeSelect";

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{ height: "100vh" }}>
      <Box
        sx={{
          backgroundColor: "primary.light",
          width: "100%",
          height: (theme) => theme.trello.appBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        <ModeSelect />
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.dark",
          width: "100%",
          height: (theme) => theme.trello.broadBarHeight,
          display: "flex",
          alignItems: "center",
        }}
      >
        Broad Bar
      </Box>
      <Box
        sx={{
          backgroundColor: "primary.main",
          width: "100%",
          height: (theme) =>
            `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.broadBarHeight})`,
          display: "flex",
          alignItems: "center",
        }}
      >
        Broad Content
      </Box>
    </Container>
  );
}

export default Board;
