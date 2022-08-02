import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import Header from "./components/Header";
import JobListing from "./components/JobListing";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

import data from "./data/data.json";

function App() {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    updateFilteredJobs();

    setIsPending(false);
    // eslint-disable-next-line
  }, [keywords]);

  const updateFilteredJobs = () => {
    if (keywords.length) {
      const newJobs = data.filter((job) =>
        keywords.every(
          (elem) =>
            job.role === elem ||
            job.level === elem ||
            job.languages.includes(elem) ||
            job.tools.includes(elem)
        )
      );

      setFilteredJobs(newJobs);
    } else {
      setFilteredJobs(data);
    }
  };

  const addToFiltered = (e) => {
    let newValue = e.target.textContent;
    if (e.target.className === "tags") {
      if (!keywords.includes(newValue)) {
        setKeywords([...keywords, newValue]);
      }
    }
  };

  const removeFilter = (keyword) => {
    const filteredArr = keywords.filter((value) => value !== keyword);
    setKeywords(filteredArr);
  };

  const clearFilter = () => setKeywords([]);

  return (
    <div className="container-fluid wrapper">
      <Header />
      <JobListing
        jobs={filteredJobs}
        keywords={keywords}
        addToFiltered={addToFiltered}
        removeFilter={removeFilter}
        clearFilter={clearFilter}
        isPending={isPending}
      />
      <Footer />
    </div>
  );
}

export default App;
