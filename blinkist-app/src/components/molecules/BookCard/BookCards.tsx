import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import "./card.css";
import { Time } from "../../atoms/Icons/icons/icons";

interface CardProps {
  img: string;
  title: string;
  author: string;
  readCount: string;
  readTime: string;
  increasedHeight: string;
  personAvatar: string;
}
const BookCards = (props: CardProps) => {

  return (
    <Card
      sx={{
        maxWidth: "282px",
        borderBottom: "1px solid white",
        borderRadius: "8px 8px 0px 0px",
        height: "max-Content",

      }}
    >
      <CardMedia
        component="img"
        image={props.img}

        height={props.increasedHeight} alt="media"
        sx={{ "objectFit": 'contain' }}
      />
      <CardContent>
        <div className="book-card_title">{props.title}</div>
        <div className="book-card_author">{props.author}</div>
        <div className="book-card_stats">
          <div className="book-card_stats-item">
            <span className="icon">
              <Time />
            </span>
            <span className="book-card_readTime" > 13-minutes read</span>
            <span className="book-card_reads">
              <span className="book-card_icon"><img src={props.personAvatar} /></span>
              <span className="book-card_readCount">{props.readCount}</span>
            </span>
          </div>
        </div>
        <div className="ellipsis"><b>...</b></div>
      </CardContent>
    </Card >
  );
};
export default BookCards;
