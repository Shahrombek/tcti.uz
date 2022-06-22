import React, { useEffect, useState } from "react";
import { StatisticsWrapper } from "./StatisticsWrapper";
import { FaUsers, FaUserFriends, FaUserPlus } from "react-icons/fa";
import CountUp from "react-countup";

const Statistics = () => {
  const [scrollHeight, setScrollHeight] = useState(false);

  // useEffect(() => {
  //   if (wrapper)
  //     wrapper.onscroll = (event) => {
  //       window.innerWidth >= 1100 && event.target.scrollTop > 1200
  //         ? setScrollHeight(true)
  //         : setScrollHeight(false);
  //     };
  // }, []);

  const getHeight = () => {
    console.log(window.scrollY);

    window.innerWidth >= 1250 && window.scrollY > 1150 ||
    window.innerWidth >= 900 && window.scrollY > 1300 ||
    window.innerWidth >= 600 && window.scrollY > 1650 ||
    window.innerWidth >= 200 && window.scrollY > 2940 
      ? setScrollHeight(true)
      : setScrollHeight(false);
  };
  useEffect(() => {
    getHeight();
  }, []);
  window.addEventListener("scroll", getHeight);

  return (
    <StatisticsWrapper>
      <h2 className="title">Statistikalar</h2>
      <div className="statistics__content">
        <div className="statistics__card">
          <button>
            <FaUsers />
          </button>
          {scrollHeight ? (
            <CountUp
              className="number__students"
              start={0}
              end={3619}
              duration={4}
            />
          ) : (
            <p className="number__students">3619</p>
          )}
          <p>Oylik hujjat topshirgan talabalar soni</p>
        </div>
        <div className="statistics__card">
          <button>
            <FaUserFriends />
          </button>
          {scrollHeight ? (
            <CountUp
              className="number__students"
              start={0}
              end={1523}
              duration={3}
            />
          ) : (
            <p className="number__students">1523</p>
          )}
          <p>Haftalik hujjat topshirgan talabalar soni</p>
        </div>
        <div className="statistics__card">
          <button>
            <FaUserPlus />
          </button>
          {scrollHeight ? (
            <CountUp
              className="number__students"
              start={0}
              end={274}
              duration={2.25}
            />
          ) : (
            <p className="number__students">274</p>
          )}
          <p>Kunlik hujjat topshirgan talabalar soni</p>
        </div>
      </div>
    </StatisticsWrapper>
  );
};

export default Statistics;
