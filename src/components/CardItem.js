// src/components/CardItem.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Group.css";

import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PeopleIcon from "@mui/icons-material/People";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Divider from "@mui/material/Divider";
import { Typography, Box } from "@mui/material";

function CardItem({
  to,
  category,
  location,
  date,
  title,
  description,
  people,
  comments,
  imageUrl,
  icon,
  recruitText,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = (e) => {
    e.preventDefault(); // 링크 이동 방지
    e.stopPropagation(); // 이벤트 전파 방지
    setIsBookmarked(!isBookmarked);
  };

  const cardContent = (
    <Box className="group-cardContainer">
      <Box className="group-imageContainer">
        <img src={imageUrl} alt="Card" className="group-cardImage" />

        {/* 검정색 테두리 아이콘 */}
        <BookmarkBorderIcon
          onClick={toggleBookmark}
          className="group-bookmarkIconBorder"
          sx={{
            fontSize: "2rem",
            color: "#000000",
            position: "absolute",
            top: "8px",
            left: "17px",
            cursor: "pointer",
            zIndex: 2,
          }}
        />

        {/* 노란색 아이콘 */}
        <BookmarkIcon
          className="group-bookmarkIcon"
          sx={{
            fontSize: "2rem",
            color: isBookmarked ? "#FFD700" : "transparent",
            position: "absolute",
            // 위치 맞추기 용
            top: "4px",
            left: "4px",
            zIndex: 1,
          }}
        />
      </Box>

      <Box className="group-cardContent">
        <Box className="group-cardHeader">
          <Typography variant="caption" className="group-category">
            {category}
          </Typography>
          <Divider orientation="vertical" flexItem sx={{ mx: 1 }} />
          <LocationOnIcon fontSize="small" sx={{ color: "#909090" }} />
          <Typography variant="caption" className="group-location">
            {location} {date}
          </Typography>
          {recruitText && (
            <Box className="group-recruitingBox">{recruitText}</Box>
          )}
        </Box>

        <Typography variant="h6" className="group-title">
          {title}
        </Typography>
        <Typography variant="body2" className="group-description">
          {description}
        </Typography>

        <Box className="group-cardFooter">
          <PeopleIcon fontSize="small" className="group-icon" />
          <Typography variant="caption">{people}</Typography>
          <ChatBubbleOutlineIcon
            fontSize="small"
            className="group-icon group-commentIcon"
          />
          <Typography variant="caption">{comments}</Typography>
        </Box>
      </Box>
    </Box>
  );

  return to ? (
    <Link to={to} className="group-cardContainer">
      {cardContent}
    </Link>
  ) : (
    <Box className="group-cardContainer">{cardContent}</Box>
  );
}

export default CardItem;
