const Card = (props) => {
  return (
    <div className={`card p-2 ${props.featured ? "featured_wrapper" : ""}`}>
      <div className="card-body row d-flex justify-content-between align-items-center">
        <div className="col-md-6 col-sm-12 my-2">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-lg-2 p-2">
              <div className="img_wrapper">
                <img src={props.logo} alt="" />
              </div>
            </div>
            <div className="col-lg-10 role_position">
              <div className="px-3">
                <div className="pb-1 photosnap">
                  <span className="card_heading fw-bold">{props.company}</span>
                  {props.new && (
                    <span className="badge rounded-pill">NEW!</span>
                  )}
                  {props.featured && (
                    <span className="badge rounded-pill featured">
                      FEATURED
                    </span>
                  )}
                </div>
                <div className="pb-1">
                  <h4 className="fw-bold role">{props.position}</h4>
                </div>
                <div className="pb-1">
                  <ul className="d-flex">
                    <div className="pe-3">
                      <span className="px-1">{props.postedAt}</span>
                    </div>
                    <div className="px-1">
                      <li className="px-1">{props.contract}</li>
                    </div>
                    <div className="px-3">
                      <li>{props.location}</li>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="d-block d-lg-none d-xl-none d-md-none text-center">
            <hr className="d-inline-block" style={{ width: "90%" }}></hr>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 technology_requirements mb-2">
          <div className="tabs" onClick={(e) => props.addToFiltered(e)}>
            <button className="tags">{props.role}</button>
            <button className="tags">{props.level}</button>
            {props.languages.map((language, index) => (
              <button key={index} className="tags">
                {language}
              </button>
            ))}
            {props.tools.map((tool, index) => (
              <button key={index} className="tags">
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
