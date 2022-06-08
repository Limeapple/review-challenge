import reviewData from "../reviewData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Reviews = ({ sortBy }) => {
  const [data, setData] = useState(reviewData);

  let navigate = useNavigate();

  useEffect(() => {
    let data = [...reviewData];
    if (sortBy === "Place") data.sort((a, b) => a.place.localeCompare(b.place));
    else if (sortBy === "Rating") data.sort((a, b) => b.rating - a.rating);
    else data.sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    setData(data);
  }, [sortBy]);

  return (
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      {data.map((obj) => {
        return (
          <div
            key={obj.id}
            style={{
              width: 350,
              height: 400,
              border: "1px solid hsla(0, 0%, 93%, 1)",
              borderRadius: 20,
              margin: 15,
              padding: 15,
              position: "relative",
              background: "hsla(0, 0%, 99%, 1)",
            }}>
            <div style={{ display: "flex", marginBottom: 30 }}>
              <div style={{ fontSize: 25 }}>{obj.place}</div>
              <div>
                <FontAwesomeIcon icon={faStar} size='4x' className='star' />
                <div className='star-rating'>{obj.rating}</div>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 15 }}>
              <div style={{ fontSize: 20 }}>{obj.author}</div>
              <div style={{ position: "relative", top: 5, color: "gray" }}>
                {new Date(obj.published_at).toLocaleDateString()}
              </div>
            </div>

            <div className='content' style={{ textAlign: "left", lineHeight: 1.5 }}>
              {obj.content.substring(0, 300)}...
              <span
                style={{ color: " hsla(38, 95%, 50%, 1)", cursor: "pointer" }}
                onClick={() => navigate(`comment/${obj.id}`)}>
                MORE
              </span>
            </div>
            <div>
              <div className='comment'>
                <div
                  style={{
                    position: "relative",
                    top: 3,
                    right: 6,
                    fontSize: 20,
                    fontWeight: "bold",
                  }}>
                  {obj.comment?.length}
                </div>
                <FontAwesomeIcon
                  icon={faComment}
                  size='2x'
                  onClick={() => navigate(`comment/${obj.id}`)}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
