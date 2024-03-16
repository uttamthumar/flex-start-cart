import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { TbShoppingCartExclamation } from "react-icons/tb";
import { CHECK_CART_QTY } from "../redux/action.type";
import Header from "./header";
import { AiOutlinePlusSquare } from "react-icons/ai";

import { FiMinusSquare } from "react-icons/fi";

import { BsCart4 } from "react-icons/bs";

export default function Cart() {
  const dispatch = useDispatch();
  const [cartProductArrays, setCartProductArrays] = useState([]);
  const checkQty = useSelector((state) => state.productData.isCartExists);

  useEffect(() => {
    setCartProductArrays(checkQty);
  }, []);

  const handlePlus = (id) => {
    const findIndex = cartProductArrays?.find((item) => item.id === id);
    setCartProductArrays((prev) => {
      const update = prev.map((item) => {
        if (item.id === findIndex.id) {
          return { ...item, qty: item.qty + 1 };
        } else {
          return item;
        }
      });
      dispatch({ type: CHECK_CART_QTY, payload: update });
      return update;
    });
  };
  const handleMinus = (id) => {
    const findIndex = cartProductArrays?.find((item) => item.id === id);
    if (findIndex.qty === 1) {
      const updatedCart = cartProductArrays.filter((item) => item.id !== id);
      setCartProductArrays(updatedCart);
      dispatch({ type: CHECK_CART_QTY, payload: updatedCart });
    } else {
      setCartProductArrays((prev) => {
        const update = prev.map((item) => {
          if (item.id === findIndex.id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
        dispatch({ type: CHECK_CART_QTY, payload: update });
        return update;
      });
    }
  };
  const calculation = () => {
    const productTotal = cartProductArrays?.reduce((acc, item) => {
      return acc + item.price * item.qty;
    }, 0);

    return productTotal;
  };

  return (
    <>
      <Header />
      {checkQty === null || !checkQty.length ? (
        <Container className="empty__cart ">
          <span className="empty__icon">
            <TbShoppingCartExclamation />
          </span>
          <span className="fs-1">Empty</span>
        </Container>
      ) : (
        <Container className="cart__container">
          <div className="d-flex justify-content-center flex-wrap mt-5 text-center ">
            <header className="text-center mt-5">
              <h1 className="">
                {" "}
                <span className="">
                  <BsCart4 />
                </span>{" "}
                Shopping Cart
              </h1>
            </header>
            <Table className="my-5" striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartProductArrays?.map((item, index) => (
                  <tr key={item?.id}>
                    <td>{index + 1}</td>
                    <td>{item?.title}</td>
                    <td>${item?.price}</td>
                    <td className="fs-5">
                      <span onClick={() => handlePlus(item?.id)}>
                        <AiOutlinePlusSquare />
                      </span>{" "}
                      {item?.qty}{" "}
                      <span onClick={() => handleMinus(item?.id)}>
                        <FiMinusSquare />
                      </span>
                    </td>
                    <td>{item?.qty * item?.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <h2 className="text-danger border px-5 py-2 rounded-lg bg-warning">
              Total: {calculation()}
            </h2>
          </div>
        </Container>
      )}
    </>
  );
}
