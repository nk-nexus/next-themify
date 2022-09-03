import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import style from "./Users.module.scss";

const Users = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user, setUser] = useState<any>({});

  // useEffect(() => {
  //   if (id) {
  //     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setUser(data);
  //       });
  //   }
  // }, [id]);
  
  useEffect(() => {
    const controller = new AbortController()
    const signal = controller.signal;

    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
        })
        .catch(err => {
          if (err.name === "AbortError") {
            console.log('cancelled!')
          } else {
            // todo:handle error
          }
        });
    }

    return () => {
      controller.abort();
    }
  }, [id]);

  return (
    <div className={style.container}>
      <p>
        Name: <strong>{user.name}</strong>
      </p>
      <p>
        Username: <strong>{user.username}</strong>
      </p>
      <p>
        Email: <strong>{user.email}</strong>
      </p>
      <Link href={"/users/1"}>Fetch User 1</Link>
      <Link href={"/users/2"}>Fetch User 2</Link>
      <Link href={"/users/3"}>Fetch User 3</Link>
    </div>
  );
};

export default Users;
