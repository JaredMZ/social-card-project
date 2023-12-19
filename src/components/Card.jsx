import { useHeartToggle } from "./likeButtonLogic";
import fujiimage from "/src/assets/fuji-image.jpg";
import profilepic from "/src/assets/profile/user.png";
import { Bookmark, Heart, HeartSolid, Message, MoreVert } from "iconoir-react";
import { IconoirProvider } from "iconoir-react";
import "/src/styles/components/Card.css";

function Card() {
  const [isSolid, likeCount, toggleIcon] = useHeartToggle(false); // State to toggle between heart representations

  return (
    <IconoirProvider
      iconProps={{
        color: "#666666",
        strokeWidth: 2,
        width: "1.2rem",
        height: "2rem",
      }}
    >
      <div className="card-container">
        <div className="user-section">
          <div className="profile-wrapper">
            <a href="link_to_profile">
              <img className="profile-pic" src={profilepic} alt="" />
            </a>
          </div>
          <div className="user-info-wrapper">
            <a href="/profile" className="user-link">
              <h2 className="username">Lucas Bennett</h2>
            </a>
            <a href="/profile" className="user-link">
              <h3 className="nickname">@lucasb23</h3>
            </a>
          </div>
          <a className="more-button" href="#">
            <div className="more-icon-container">
              <MoreVert />
            </div>
          </a>
        </div>
        <div className="content-section">
          <div className="content-image-wrapper">
            <img className="content-image" src={fujiimage} alt="" />
          </div>
          <p className="content-description">
            Mesmerized by the majestic beauty of Mount Fuji. Nature's
            masterpiece never fails to awe and inspire! 🗻✨
          </p>
        </div>
        <div className="interaction-section">
          <div className="interaction-buttons">
            <button className="interaction-button">
              <Message />
              <span className="count">5</span>
            </button>
            <button className="interaction-button" onClick={toggleIcon}>
              {isSolid ? <HeartSolid className="red-heart" /> : <Heart />}
              <span className="count">{likeCount}</span>
            </button>
            <button className="interaction-button">
              <Bookmark />
              <span className="count"></span>
            </button>
          </div>
        </div>
      </div>
    </IconoirProvider>
  );
}

export default Card;
