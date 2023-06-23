/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { aw } from "../../utils/aw";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState();
  const params = useParams();
  const getData = async () => {
    const DETAIL = `/${params.id}?language=en-US`;
    console.log(DETAIL);
    aw()
      .get(DETAIL)
      .then((response) => {
        console.log("DETAIL", response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <div>
          <div>
            <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${data?.poster_path}`} alt="pic" />
          </div>

          <div>
            <p>{data?.original_title}</p>
            <hr data-content=""></hr>
            <p>{data?.overview}</p>

            <div className="text-xs">
              {data?.genres?.map((item, index) => (
                <button key={index} type="button">
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
