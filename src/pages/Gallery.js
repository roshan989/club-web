import React from "react";
import ReactPlayer from "react-player";
import Card from "./component/Card";
import classes from "./css/Gallery.module.css";
function GalleryPage() {
  return (
    <div>
      <h1>New Videos!</h1>
      <Card>
        <h2>
          {" "}
          <u>Double Kick</u>
        </h2>
        <div className={classes.videoPlayer}>
          <ReactPlayer url="https://youtu.be/7VJWx5a9Tdk" />
        </div>
      </Card>
      <Card>
        <h2>
          <u>Swing Kick</u>
        </h2>
        <div className={classes.videoPlayer}>
          <ReactPlayer url="https://youtu.be/-McC-fUAsT0" />
        </div>
      </Card>
      <Card>
        <h2>
          <u>any</u>{" "}
        </h2>
        <div className={classes.videoPlayer}>
          <ReactPlayer url="https://www.youtube.com/watch?v=UVCP4bKy9Iw" />
        </div>
      </Card>
    </div>
  );
}
export default GalleryPage;
