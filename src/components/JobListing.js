import Card from "./Card";
import JobFilter from "./JobFilter";

const JobListing = (props) => {
  // const filtered = props.filtered;
  return (
    <main className="container main_content_wrapper">
      {props.keywords.length > 0 ? (
        <JobFilter
          keywords={props.keywords}
          removeFilter={props.removeFilter}
          clearFilter={props.clearFilter}
        />
      ) : (
        ""
      )}

      {props.isPending ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="job_filterings">
          {props.jobs.map((job) => (
            <Card
              id={job.id}
              key={job.id}
              company={job.company}
              position={job.position}
              contract={job.contract}
              postedAt={job.postedAt}
              location={job.location}
              role={job.role}
              level={job.level}
              logo={job.logo}
              languages={job.languages}
              new={job.new}
              featured={job.featured}
              tools={job.tools}
              addToFiltered={props.addToFiltered}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default JobListing;
