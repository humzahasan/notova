import { React } from "react";
import { Card, Sidebar } from "../../Components";

import { useNote } from "../../context/note-context";

const Archive = () => {
  const {
    state: { archives },
    deleteFromArchive,
    restoreToNote,
  } = useNote();

  return (
    <>
      <section className="mynotes-container">
        <div className="grid-col-2 grid-col-3by7">
          <div className="grid-item">
            <Sidebar />
          </div>
          {archives.length > 0 ? (
            <div className="grid-item">
              {archives.map(({ title, tag, content, id }) => (
                <Card
                  key={id}
                  title={title}
                  category={tag}
                  content={content}
                  deleteHandler={() => {
                    deleteFromArchive(id);
                  }}
                  unarchiveHandler={() => {
                    restoreToNote(id);
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="grid-item flex-center-row">
              <h2 className="md-title">No notes have been archived!</h2>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Archive;
