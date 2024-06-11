import * as React from "react";
import Snackbar from "@mui/joy/Snackbar";

export default function SnackbarWithDecorators({ open, setOpen, type, title }) {
  return (
    <React.Fragment>
      <Snackbar
        autoHideDuration={2000}
        variant="soft"
        color={type}
        open={open}
        onClose={() => setOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {title}
      </Snackbar>
    </React.Fragment>
  );
}
