import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard() {
  return (
    <>
      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 200, width: 200 }}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Python
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Python is a programming language that lets you work quickly and
            integrate systems more effectively
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Details </Button>
        </CardActions>
      </Card>

      <Card sx={{ maxWidth: 350 }}>
        <CardMedia
          sx={{ height: 200, width: 200 }}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="div">
            Python
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Python is a programming language that lets you work quickly and
            integrate systems more effectively
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More Details </Button>
        </CardActions>
      </Card>
    </>
  );
}
