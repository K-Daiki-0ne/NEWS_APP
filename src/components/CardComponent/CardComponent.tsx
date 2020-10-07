import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { NewsType } from '../../type/news';

type Props = {
  props: NewsType
}

const CardComponent: React.FC<Props> = ({ props }): JSX.Element => {
  console.log(props)
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          image={props.urlToImage}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardComponent