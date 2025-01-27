"use client";

import { useState } from "react";
import { Button, Checkbox, Container, FormControlLabel, Typography, Snackbar } from "@mui/material";
import { signIn } from "next-auth/react";
import GoogleIcon from "@mui/icons-material/Google";
import Link from "next/link";

export default function SignUpView() {
  const [isChecked, setIsChecked] = useState(false);  // Track checkbox state
  const [error, setError] = useState(false);  // Track error message visibility
  const [errorMessage, setErrorMessage] = useState("");  // Error message text

  // Handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  // Handle button click
  const handleSignUpClick = () => {
    if (!isChecked) {
      setErrorMessage("Prosím, zaškrtnite súhlas s podmienkami!");
      setError(true);  // Show error message if checkbox is not ticked
    } else {
      signIn("google");  // Proceed with Google sign-in
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 5,
        p: 3,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      {/* Logo / Title */}
      <Typography variant="h5" sx={{ mb: 3 }}>
        Registrácia
      </Typography>

      {/* Sign-in link */}
      <Typography variant="body1" sx={{ mb: 6 }}>
        Už máte účet? <Link href="/auth/prihlasenie">Prihláste sa</Link>
      </Typography>

      {/* GDPR consent checkbox */}
      <FormControlLabel
        control={<Checkbox color="primary" checked={isChecked} onChange={handleCheckboxChange} />}
        label={
          <Typography variant="body2">
            Súhlasím s{" "}
            <Link href="/gdpr">
              <Typography component="span" sx={{ color: "#1976d2" }}>
                GDPR
              </Typography>
            </Link>{" "}
            a{" "}
            <Link href="/podmienky">
              <Typography component="span" sx={{ color: "#1976d2" }}>
                podmienkami používania
              </Typography>
            </Link>.
          </Typography>
        }
        sx={{ mb: 3 }}
      />

      {/* Instruction text to tick the checkbox */}
      {!isChecked && (
        <Typography variant="body2" sx={{ color: "red", mb: 2 }}>
          Prosím, zaškrtnite súhlas s podmienkami pred pokračovaním.
        </Typography>
      )}

      {/* Google Sign Up */}
      <Button
        variant="outlined"
        fullWidth
        startIcon={<GoogleIcon />}
        onClick={handleSignUpClick}
        disabled={!isChecked}  // Disable button if checkbox is not ticked
        sx={{
          mb: 2,
          bgcolor: "#d32f2f",
          color: "white",
          "&:hover": {
            bgcolor: "#c2185b",  // Hover effect for Google button
          },
        }}
      >
        Registrovať sa účtom Google
      </Button>

      {/* Error message snackbar */}
      <Snackbar
        open={error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        message={errorMessage}
      />
    </Container>
  );
}
