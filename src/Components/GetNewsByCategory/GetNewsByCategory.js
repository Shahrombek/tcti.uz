import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { GetData } from "../../Api";
import { GetNewsWrapper } from "./GetNewsWrapper";

const GetNewsByCategory = ({ language }) => {
  var { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const type = pathname.includes("news") ? "news" : "announcements";

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(pathname);

  useEffect(async () => {
    const res = await GetData(type);
    if (res.success) {
      setLoading(false);
      setData(res.data);
    }
  }, []);

  if (!loading) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <>
      {loading ? (
        <div className="loading">
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        </div>
      ) : (
        <GetNewsWrapper>
          <div className="left__content">
            {data.map((item) => {
              return (
                item.id == id && (
                  <div key={item.id} className={"select__category"}>
                    <img src={item.img} alt={item.id} />
                    <h3 className="title">
                      {language === 0
                        ? item.title_uz
                        : language === 1
                        ? item.title_ru
                        : item.title_en}
                    </h3>
                    <p
                      className="body"
                      dangerouslySetInnerHTML={{
                        __html:
                          language === 0
                            ? item.body_uz
                            : language === 1
                            ? item.body_ru
                            : item.body_en,
                      }}
                    ></p>
                  </div>
                )
              );
            })}
          </div>
          <div className="right__content">
            <h4>BOSHQA MAVZULAR</h4>
            {data.map((item) => {
              return (
                <div key={item.id} className="img__content">
                  <img
                    onClick={() => navigate(`/${type}/${item.id}`)}
                    src={item.img}
                    alt={item.id}
                  />
                </div>
              );
            })}
          </div>
        </GetNewsWrapper>
      )}
    </>
  );
};

export default GetNewsByCategory;
