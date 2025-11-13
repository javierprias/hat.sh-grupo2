/* eslint-disable @next/next/no-img-element */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "auto",
  },
  footer: {
    textAlign: "center",
    color: theme.palette.text.primary,
    padding: theme.spacing(3, 2),
  },
  textGlow: {
    color: "#00ff99",
    textShadow: "0 0 10px #00ff99, 0 0 20px #00cc88",
    fontFamily: "'Share Tech Mono', monospace",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body2" className={classes.textGlow}>
            Mejorado por el <strong>Grupo 2</strong> — Hat.sh Reforged © 2025
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
