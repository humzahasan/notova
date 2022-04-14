import React, { useState } from "react";
import "./Card.css";
import editIcon from "../../assets/edit.svg";
import unarchiveIcon from "../../assets/undo.svg";
import archiveIcon from "../../assets/archive.svg";
import deleteIcon from "../../assets/delete.svg";
import colorIcon from "../../assets/color.svg";
import permDeleteIcon from "../../assets/permanent.svg";
import { TwitterPicker } from "react-color";

const Card = ({
  title,
  content,
  category,
  editHandler,
  deleteHandler,
  archiveHandler,
  unarchiveHandler,
  colorHandler,
  permanentDeleteHandler,
  cardColor,
}) => {
  const [open, setopen] = useState(false);
  const [mycolor, setMyColor] = useState(cardColor);
  const openBox = () => {
    setopen(!open);
  };
  return (
    <section
      className="card card-lg card-w100"
      style={{ backgroundColor: `${mycolor}` }}
    >
      <div className="card-badge">
        <p className="card-badge-content">{category}</p>
      </div>
      <section className="card-text">
        <p className="card-title">{title}</p>

        <p className="card-content">{content}</p>
      </section>

      <section className="card-action card-action-end">
        {colorHandler && (
          <div>
            <img
              title="Change Color"
              src={colorIcon}
              alt="Change Color"
              className="card-action-icon"
              onClick={() => openBox()}
            />
            {open && (
              <TwitterPicker
                colors={["#B3E5FC", "#C1E1C5", "#FAD0C3", "#FEF3BD"]}
                onChange={(e) => setMyColor(e.hex)}
              />
            )}
          </div>
        )}
        {archiveHandler && (
          <img
            title="Archive"
            src={archiveIcon}
            alt="Delete"
            className="card-action-icon"
            onClick={archiveHandler}
          />
        )}
        {unarchiveHandler && (
          <img
            title="Back to Notes"
            src={unarchiveIcon}
            alt="Delete"
            className="card-action-icon"
            onClick={unarchiveHandler}
          />
        )}
        {editHandler && (
          <img
            title="Edit"
            src={editIcon}
            alt="Edit"
            className="card-action-icon"
            onClick={editHandler}
          />
        )}
        {deleteHandler && (
          <img
            title="Delete"
            src={deleteIcon}
            alt="Delete"
            className="card-action-icon"
            onClick={deleteHandler}
          />
        )}

        {permanentDeleteHandler && (
          <img
            title="Permanent Delete"
            src={permDeleteIcon}
            alt="Change Color"
            className="card-action-icon"
            onClick={permanentDeleteHandler}
          />
        )}
      </section>
    </section>
  );
};

export default Card;
