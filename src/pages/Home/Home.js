import React from "react";
import {
  Apply,
  Contact,
  Header,
  Location,
  Location2,
  Navbar,
  Purpose,
  Reviewers,
  Reviewers2,
  Schedual,
  South,
  Spread,
  Talent,
} from "../../components";
const Home = () => {
  return (
    <div>
      <div className="bg-primary h-[110vh]  text-primary">
        <Navbar />
        <Header />
      </div>
      <div>
        <div className=" mt-[130px]">
          <Purpose />
          <Reviewers />
          <Talent />
          <Spread />
          <Location />
          <Reviewers2 />
          <Location2 />
          <South />
          <Schedual />
          <Apply />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
