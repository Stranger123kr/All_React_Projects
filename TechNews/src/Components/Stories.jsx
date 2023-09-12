import { useGlobal } from "./Context";
import "./CssFile/Stories.css";
// -------------------------------------------------
const Stories = () => {
  const { hits, page, nbPages, isLoading, DeletePost } = useGlobal();

  // ---------------------------------------------------------
  if (isLoading) {
    return (
      <>
        <div className="lds-roller">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="Story_container">
        {hits.map((information) => {
          const { title, author, num_comments, url, objectID } = information;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments} </span>
                comments
              </p>
              <div className="card_buttons">
                <a href={url} target="_blank">
                  Read More
                </a>
                <a href="#" onClick={() => DeletePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Stories;
