import "./ProgressBar.css";
const Progress = ({ done, title }) => {
  const newStyle = {
    opacity: 1,
    width: `${done}%`,
  };

  return (
    <div className="progress-container">
      <span>{title}</span>
      <div className="progress">
        <div className="progress-done" style={newStyle}>
          {done}%
        </div>
      </div>
    </div>
  );
};
export default Progress;
