import axios from "axios";
import { useEffect, useState } from "react";

export const Home = () => {
  const [message, setMessage] = useState("You are not logged in");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user", {
          withCredentials: true,
        });
        const user = response.data;
        setMessage(`Hi ${user.first_name} ${user.last_name}`);
      } catch (error) {
        console.error("You are not logged in");
      }
    })();
  }, []);

  return <div className="container mt-5 text-center">{message}</div>;
};
