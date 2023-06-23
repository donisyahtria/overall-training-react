import { useEffect, useState } from "react";
import { aw } from "../../utils/aw";
import { Link } from "react-router-dom";

const Content2 = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const POPULAR = "popular?language=en-US&page=1";
    aw()
      .get(POPULAR)
      .then((response) => {
        console.log(response.data.results);
        setData(response.data.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>LIST MOVIE POPULAR</h1>
      <div>
        {data &&
          data.map((item, idx) => (
            <Link key={idx} to={`/popular/${item.id}`}>
              <div>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="Sunset in the mountains" />
                <div>
                  <div>{item.original_title}</div>
                  <p>{item.release_date}</p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Content2;
