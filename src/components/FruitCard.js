import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Grid, Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 230,
  },

  media: {
    height: 140,
    width: 200,
    alignItems:'center',
  },
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "0px",
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
    <Container>
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <CardMedia
                component="img"
                image={image}
                alt={name}
                className={classes.media}
              />
              <Typography className={classes.title} color="textSecondary">
                {name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Price: {price} €
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default FruitsCard;
