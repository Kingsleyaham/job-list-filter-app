import removeIcon from "../assets/img/icon-remove.svg";

const JobFilter = (props) => {
  return (
    <div className="d-flex justify-content-between flex-row align-items-center filter_wrapper hide">
      <div>
        {props.keywords.map((filter, index) => (
          <div className="tabs" id={index} key={index}>
            <span>{filter}</span>
            <button
              className="removeBtn"
              onClick={(e) => props.removeFilter(filter)}
            >
              <img src={removeIcon} alt="remove icon" />
            </button>
          </div>
        ))}
      </div>
      <div>
        <button className="clearBtn" onClick={props.clearFilter}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default JobFilter;
