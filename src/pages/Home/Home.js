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
      <div className="bg-primary  xl:h-[110vh] lg:h-[110vh] h-[75vh]  text-primary">
        <Navbar />
        <Header />
      </div>
      <div>
        <div className=" xl:mt-[130px] lg:mt-[130px] mt-10 overflow-hidden">
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
