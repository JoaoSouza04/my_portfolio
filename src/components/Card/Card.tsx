import { Card, CardContent, CardActions, CardMedia, Typography, Button } from "@mui/material";

type CardProps = {
  image: string;
  description: string;
  title: string;
  buttonText: string;
  onClick: () => void;
};

const MyCard = ({ image, title,description, buttonText, onClick }: CardProps) => (
  <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 3 }}>
    <CardMedia
      component="img"
      image={image}
      alt="project preview"
    />
    <CardContent>
      <Typography gutterBottom variant="h5">{title}</Typography>
      <Typography variant="body2" color="text.secondary">{description}</Typography>
    </CardContent>
    <CardActions>
      <Button onClick={onClick} size="small" color="primary" href="#">{buttonText}</Button>
    </CardActions>
  </Card>
);

export default MyCard;
