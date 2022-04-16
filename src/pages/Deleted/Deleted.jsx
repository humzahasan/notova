import { React } from "react";
import { useNote } from "../../context/note-context";
import { Card, Sidebar } from "../../Components";

const Deleted = () => {
  const {
    state: { deleted },
    dispatch,
  } = useNote();

  return (
    <>
      <section className="mynotes-container">
        <div className="grid-col-2 grid-col-3by7">
          <div className="grid-item">
            <Sidebar />
          </div>
          {deleted.length > 0 ? (
            <div className="grid-item">
              {deleted.map(({ title, tag, content, id }) => (
                <Card
                  key={id}
                  title={title}
                  category={tag}
                  content={content}
                  permanentDeleteHandler={() => {
                    dispatch({
                      type: "DELETE_PERMANENT",
                      payload: { id, title, tag, content, date: new Date() },
                    });
                  }}
                  unarchiveHandler={() => {
                    dispatch({
                      type: "MOVE_TO_NOTES_FROM_DELETED",
                      payload: { id, title, tag, content, date: new Date() },
                    });
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="grid-item flex-center-row">
              <h2 className="md-title">No deleted notes found!</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Deleted;
