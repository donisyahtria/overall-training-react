import { useEffect, useState } from "react";
import { aw } from "../../utils/aw";

const Content3 = () => {
  const [data, setData] = useState();

  const getData = async () => {
    const NOW_PLAYING = "now_playing?language=en-US&page=1";
    console.log(NOW_PLAYING);
    aw()
      .get(NOW_PLAYING)
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
      <h1>NOW PLAYING</h1>
      <div>
        {data &&
          data.map((item, idx) => (
            <div key={idx}>
              <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${item.poster_path}`} alt="Sunset in the mountains" />
              <div>
                <div>{item.original_title}</div>
                <p>{item.release_date}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Content3;
