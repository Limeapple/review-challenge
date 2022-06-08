import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

const Comment = ({ message, editMessageID, setEditMessageID }) => {
  return (
    <div
      style={{
        width: "80%",
        maxWidth: 1000,
        borderRadius: 20,
        padding: 15,
        display: "block",
        margin: "auto",
        position: "relative",
      }}>
      <div
        style={{
          width: "80%",
          maxWidth: 1000,
          border:
            editMessageID && message.id === editMessageID
              ? "1px solid hsla(38, 95%, 50%, 1)"
              : "1px solid hsla(0, 0%, 0%, 0.1)",
          background: "hsla(0, 0%, 99%, 1)",
          padding: 15,
          borderRadius: 15,
          wordBreak: "break-all",
        }}>
        <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: 30 }}>
          <div style={{ fontSize: 18 }}>{message.name}</div>
          <div style={{ display: "flex" }}>
            <div style={{ color: "gray" }}>{message.date}</div>
            <FontAwesomeIcon
              icon={faEdit}
              style={{
                color: "lightgray",
                paddingLeft: 10,
                cursor: "pointer",
              }}
              onClick={() => {
                setEditMessageID(editMessageID < 1 ? message.id : 0);
              }}
            />
          </div>
        </div>

        <div style={{ lineHeight: 1.5 }}>{message.message}</div>
      </div>
    </div>
  );
};

export default Comment;
