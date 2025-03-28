import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
const FullPizza: React.FC = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>({
    imageUrl: "",
    title: "",
    price: 0,
  });

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          `https://813cecfc1deed960.mokky.dev/items/${id}`
        );
        setPizza(data);
      } catch (error) {
        alert("Ошибка");
        navigate("/");
      }
    }
    fetchPizza();
  }, []);

  return (
    <div className="content">
      <div className="container">
        <img src={pizza.imageUrl} alt="" />
        <h2>{pizza.title}</h2>
        <br />
        <h4>{pizza.price} ₽</h4>ы
      </div>
    </div>
  );
};

export default FullPizza;
