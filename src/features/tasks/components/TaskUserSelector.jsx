import { useEffect, useState } from "react";
import { userService } from "../../../services/user.service";

const usersFounded = [
  {
    _id: "69ce2b9f4c212c3c01ece93e",
    firstName: "duck",
    lastName: "donald",
    email: "duck@test.be",
  },
];

export function TaskUserSelector({ onUserSelected = () => {} }) {
  const [userIdSelected, setUserIdSelected] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setData(null);
    setError(null);
    userService
      .getAll()
      .then((user) => {
        setData(user);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleUserClick = (user) => {
    setUserIdSelected(user._id);
    onUserSelected(user);
  };
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data !== null ? (
        <ul>
          {data.map((user) => (
            <li key={user.id} onClick={() => handleUserClick(user)}>
              {user.firstName} {user.lastName}
            </li>
          ))}
        </ul>
      ) : (
        <p>Problem with request</p>
      )}
    </div>
  );
}
