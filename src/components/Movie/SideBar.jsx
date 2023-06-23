import { Link } from "react-router-dom";

export const SideBar = () => {
  const menu = [
    { id: 1, title: "UP COMING", path: "up_coming" },
    { id: 2, title: "POPULAR", path: "popular" },
    { id: 3, title: "NOW PLAYING", path: "now_playing" },
  ];

  return (
    <div>
      {menu.map((item) => (
        <Link key={item.id} to={`./${item.path}`}>
          <div>
            <p>{item.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
