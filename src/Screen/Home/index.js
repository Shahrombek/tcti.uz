import { useEffect, useState } from "react";
import ParticlesBg from "particles-bg";
import { Ariza } from "../../Components/Language";
import { Card, Col, Row } from "antd";
import { YoutubeFilled } from "@ant-design/icons";
import ReactPaginate from "react-paginate";
import qabulHero from "../../images/qabulHero.png";

import { GetData } from "../../Api";

import { useNavigate } from "react-router-dom";
import Statistics from "../../pages/Statistics/Statistics";
import {NewsData, AnnoData} from '../../data/PostData'

const Home = ({ setUserName, language }) => {
  const navigate = useNavigate();
  const { news, announcement, router } = Ariza;

  // work with API
  const [newss, setNewss] = useState(NewsData);
  const [announcements, setAnnouncements] = useState(AnnoData);

  // useEffect(async () => {
  //   const announcements = await GetData("announcements");
  //   const news = await GetData("news");

  //   console.log(announcement, news);
  //   setAnnouncements(announcements);
  //   setNewss(news);
  // }, []);

  // data
  const [pageNumber, setPageNumber] = useState(0);
  const postsPerPage = 4;

  const displayPosts = newss.map((post, index) => {
    return (
      <Col className="gutter-row" span={6} key={post.id}>
        <div
          className={"data__Card"}
          onClick={() => navigate(`/news/${post.id}`)}
        >
          <Card
            style={{ height: 380, width: 250 }}
            cover={<img alt="" style={{ height: 180 }} src={post.img} />}
          >
            <div style={{ height: 100 }}>
              <a href="/">
                {language === 0
                  ? post.title_uz
                  : language === 1
                  ? post.title_ru
                  : post.title_en}
              </a>
            </div>
            <h4>{post.date}</h4>
          </Card>
        </div>
      </Col>
    );
  });

  const pageCount = newss && Math.ceil(newss.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // data 2
  const [pageNumber2, setPageNumber2] = useState(0);

  const postsPerPage2 = 3;

  const displayPosts2 = announcements.map((post, index) => {
    return (
      <Col className="gutter-row" span={6} key={post.id}>
        <div
          className={"data__Card"}
          onClick={() => navigate(`/announcements/${post.id}`)}
        >
          <Card
            style={{ height: 380, width: 250 }}
            cover={<img alt="" style={{ height: 180 }} src={post.img} />}
          >
            <div style={{ height: 100 }}>
              <a href="/">
                {language === 0
                  ? post.title_uz
                  : language === 1
                  ? post.title_ru
                  : post.title_en}
              </a>
            </div>
            <h4>{post.date}</h4>
          </Card>
        </div>
      </Col>
    );
  });

  const pageCount2 =
    announcements && Math.ceil(announcements.length / postsPerPage2);

  const changePage2 = ({ selected }) => {
    setPageNumber2(selected);
  };
  return (
    <>
      <ParticlesBg color="#0d3b66" type="cobweb" num={35} bg={true} />

      <div className={"home-img"}>
        <img src={qabulHero} alt="" />
      </div>

      <div className={"rectangle"}>
        <div className={"home-title"}>
          <h1
            style={{
              color: "#00a0e9",
              marginTop: 15,
            }}
          >
            {news[language]}
          </h1>
        </div>

        <div>
          {!announcements ? (
            <div className="loading">
              <div className="spinner-container">
                <div className="loading-spinner"></div>
              </div>
            </div>
          ) : (
            <div
              className="row"
              style={{
                marginBottom: 30,
              }}
            >
              {displayPosts}
              <ReactPaginate
                breakLabel="..."
                previousLabel="<"
                nextLabel=">"
                onPageChange={changePage}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName={"react-pagination-me"}
                previousLinkClassName={"prevPaginateBtn"}
                nextLinkClassName={"prevPaginateBtn"}
                disabledClassName={"not-active-paginate"}
                activeClassName={"active-paginate"}
              />
            </div>
          )}
        </div>
      </div>

      <div className={"announcement"}>
        <div className={"home-title"}>
          <h1
            style={{
              color: "#00a0e9",
              marginTop: 15,
            }}
          >
            {announcement[language]}
          </h1>
        </div>

        <div>
          {!announcements ? (
            <div className="loading">
              <div className="spinner-container">
                <div className="loading-spinner"></div>
              </div>
            </div>
          ) : (
            <div className="row row2">
              {displayPosts2}
              <ReactPaginate
                breakLabel="..."
                previousLabel="<"
                nextLabel=">"
                onPageChange={changePage2}
                pageRangeDisplayed={5}
                pageCount={pageCount2}
                renderOnZeroPageCount={null}
                containerClassName={"react-pagination-me"}
                previousLinkClassName={"prevPaginateBtn"}
                nextLinkClassName={"prevPaginateBtn"}
                disabledClassName={"not-active-paginate"}
                activeClassName={"active-paginate"}
              />
            </div>
          )}
        </div>
      </div>

      {/*  */}

      <Statistics />

      {/*  */}

      <div className={"rectangle"}>
        <div className={"home-title"}>
          <h1
            style={{
              color: "#00a0e9",
              marginTop: 15,
            }}
          >
            {router[language]}
          </h1>
        </div>

        <div className="row">
          <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
            <div
              style={{
                width: 300,
                textAlign: "center",
              }}
            >
              <div className="numbers">
                <b>1</b>
              </div>

              <div>
                <h1
                  style={{
                    color: "#00a0e9",
                  }}
                >
                  Arizani to'ldiring
                </h1>
              </div>
              <div>
                <h3
                  style={{
                    color: "#00a0e9",
                  }}
                >
                  Ariza formasini to'ldiring va kerakli hujjatlarni tizimga
                  yuklang
                </h3>
              </div>
            </div>
          </Col>

          <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
            <div
              style={{
                width: 300,
                textAlign: "center",
              }}
            >
              <div className="numbers">
                <b>2</b>
              </div>

              <div>
                <h1
                  style={{
                    color: "#00a0e9",
                  }}
                >
                  Yo'nalishni tanlang
                </h1>
                <h3
                  style={{
                    color: "#00a0e9",
                  }}
                >
                  Ariza topshirmoqchi bo'lgan ta'lim yo'nalishlaridan birini
                  tanlang
                </h3>
              </div>
            </div>
          </Col>

          <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
            <div
              style={{
                width: 300,
                textAlign: "center",
              }}
            >
              <div className="numbers">
                <b>3</b>
              </div>

              <div>
                <h1
                  style={{
                    color: "#00a0e9",
                  }}
                >
                  Arizani tasdiqlang
                </h1>
                <h3
                  style={{
                    color: "#00a0e9",
                  }}
                >
                  Ariza va hujjatlaringiz universitet qabul komissiyasi
                  tomonidan ko'rib chiqilib tasdiqlanadi
                </h3>
              </div>
            </div>
          </Col>
          <div className="gutter-row">
            <Col span={6} gutter={[6, 12, 12, 24]} className="gutter-row">
              <div
                style={{
                  width: 300,
                  textAlign: "center",
                }}
              >
                <div className="numbers">
                  <b>4</b>
                </div>

                <div>
                  <h1
                    style={{
                      color: "#00a0e9",
                    }}
                  >
                    Qaydnomani yuklab oling
                  </h1>
                </div>
                <div>
                  <h3
                    style={{
                      color: "#00a0e9",
                    }}
                  >
                    Login va parol orqali tizimga kiring hamda abituriyent
                    qaydnomasini yuklab oling
                  </h3>
                </div>
              </div>
            </Col>
          </div>
        </div>
        <div className="youtube">
          <button className="youtube-btn">
            <a
              style={{
                color: "red",
              }}
              href="/"
            >
              <YoutubeFilled />
              <b>TO'LIQ YO'RIQNOMA</b>
            </a>
          </button>
        </div>
      </div>

      <br />
    </>
  );
};

export default Home;
