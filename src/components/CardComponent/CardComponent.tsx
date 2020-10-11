import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyle from './style';
import { NewsType } from '../../type/news';

type Props = {
  props: NewsType
}

const CardComponent: React.FC<Props> = ({ props }): JSX.Element => {
  const classes = useStyle();
  return (
    <Card className={classes.root}>
      <a href={props.url} className={classes.link}>
        <CardActionArea>
          {
            props.urlToImage ? (
              <CardMedia
                className={classes.image}
                image={props.urlToImage}
                title="Contemplative Reptile"
              />
            ) : (
              <p>No image</p>
            )
          }
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" className={classes.text}>
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </a>
    </Card>
  );
}

export default CardComponent