import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import Comment from "./Comment";
import reviewData from "../reviewData";

const ReviewAndMessage = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [review, setReview] = useState({});
  const [editMessageID, setEditMessageID] = useState(0);
  const location = useLocation();
  useEffect(() => {
    reviewData.map((obj) => {
      if (obj.id === location.pathname.split("/")[2]) setReview(obj);
    });
  }, []);

  const displayStars = () => {
    const stars = [];
    for (let i = 0; i < review.rating; i++)
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{
            color: "hsla(47, 100%, 50%, 1)",
            marginTop: 10,
          }}
        />
      );
    return <div>{stars}</div>;
  };

  return (
    <div>
      <div style={{ height: "65vh", overflowY: "auto", paddingTop: "9vh" }}>
        <div
          style={{
            width: "80%",
            maxWidth: 1000,
            border: "1px solid hsla(0, 0%, 0%, 0.1)",
            borderRadius: 20,
            padding: 15,
            margin: "auto",
            background: "hsla(0, 0%, 99%, 1)",
          }}>
          <div style={{ marginBottom: 30 }}>
            <div style={{ fontSize: 25 }}>{review.place}</div>
            {displayStars()}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
            <div style={{ fontSize: 20 }}>{review.author}</div>
            <div style={{ position: "relative", top: 5, color: "gray" }}>
              {new Date(review.published_at).toLocaleDateString()}
            </div>
          </div>

          <div className='content' style={{ textAlign: "left", lineHeight: 1.5 }}>
            {review.content?.substring(0, 300)}
          </div>
        </div>
        {review.comment?.map((message) => (
          <Comment
            key={message.id}
            message={message}
            editMessageID={editMessageID}
            setEditMessageID={setEditMessageID}
          />
        ))}
        <div
          style={{
            width: "85%",
            maxWidth: 1000,
            position: "absolute",
            top: "87%",
            left: "50%",
            transform: " translate(-50%, -50%)",
            padding: 10,
            background: "white",
          }}>
          <label>
            <textarea
              placeholder='Type your message'
              style={{ width: "100%", marginBottom: 15 }}
              rows={3}
              cols={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <br />
          <label>
            Name:{" "}
            <input
              type='text'
              style={{
                width: "50%",
                border: "none",
                borderBottom: "1px solid black",
                marginRight: 10,
                padding: 5,
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <input
            type='submit'
            placeholder='Send comment'
            style={{ cursor: "pointer" }}
            disabled={review.comment?.length > 0 && editMessageID < 1}
            onClick={() => {
              if (name.trim() === "" || message.trim() === "") return;

              //edit the message
              if (editMessageID > 0) {
                let temp = review;
                temp.comment.map((obj) => {
                  if (editMessageID === obj.id) {
                    obj.name = name;
                    obj.message = message;
                  }
                });
                setReview({ ...temp });
                setEditMessageID(0);
                setMessage("");
                setName("");
                return;
              }

              let temp = review;
              let tempMessage = {
                id: Math.random() * 1000000000 + 1,
                name,
                message,
                date: new Date(new Date()).toLocaleDateString(),
              };
              if (temp.comment) temp.comment.push(tempMessage);
              else temp.comment = [tempMessage];
              setReview({ ...temp });
              setMessage("");
              setName("");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewAndMessage;
