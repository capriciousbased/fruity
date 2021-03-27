import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    paddingBottom: "30px",

  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const FruitsCard = ({ image, name, price, _callback }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      xs={12} sm={6} md={3}
      
      className={classes.gridContainer}
      justify="center"
    >
      <Grid item >
        <Card className={classes.root} variant="outlined">
        <CardContent>
            <CardMedia
              component="img"
              className={classes.cardMedia}
              image={image}
              alt={name}
              style={{ width: "180px", height: "180px" }}
            />
              <Typography className={classes.title}color="textSecondary" gutterBottom>
                <h3>{name}</h3>
                <p>Price: {price} €</p>
              </Typography>
            </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FruitsCard;
