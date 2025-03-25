import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState({});

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://813cecfc1deed960.mokky.dev/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка", console.log(error));
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Загрузка...";
  }

  return (
    <div className="content">
      <div className="container">
        <img src={pizza.imageUrl} alt="" />
        <h2>{pizza.title}</h2>
        <br />

        <br />
        <h4>{pizza.price} ₽</h4>
      </div>
    </div>
  );
};

export default FullPizza;
