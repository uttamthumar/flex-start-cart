import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { CHECK_CART_QTY, PRODUCT_LISTS } from "../redux/action.type";
import axios from "axios";
import toast from "react-hot-toast";
import { productAllData } from "../utils/constant";

export default function Product({ sectionRefs }) {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log("------>", apiUrl);
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState();
  const { isCartExists } = useSelector((state) => state.productData);

  const handleAddToCart = (id) => {
    let temp = JSON.parse(JSON.stringify(productList));
    const isEsists = (isEsists) => isEsists.id === id;
    const findProduct = temp.find((item) => item.id === id);
    findProduct.qty = 1;
    const checkQuantaty = cart?.some(isEsists);
    if (!checkQuantaty) {
      const update = [
        ...cart,
        {
          ...findProduct,
        },
      ];
      setCart(update);
      dispatch({ type: CHECK_CART_QTY, payload: update });

      toast.success("order added");
    } else {
      toast.error("Item is already in the cart");
    }
  };

  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  useEffect(() => {
    setProductList(productAllData);
    dispatch({ type: PRODUCT_LISTS, payload: productAllData });
  }, []);

  useEffect(() => {
    if (isCartExists) return setCart(isCartExists);
  }, [isCartExists]);


  // API CALLING //
  // const fetchProducts = async () => {
  //   const testforhost = await axios.get("https://fakestoreapi.com/products");
  //   console.log("-----", testforhost);
  //     const res = await axios.get(`${apiUrl}/beforeauth/get-plan`);
  //     setProductList(res.data.data);
  //     dispatch({ type: PRODUCT_LISTS, payload: res.data.data });
  //   };

  return (
    <div id="product" ref={sectionRefs.product} className="my-5">
      <header className="text-center ">
        <h4 className="text-primary font-bold text-uppercase">Pricing</h4>
        <p>Odit est perspiciatis laborum et dicta</p>
      </header>
      <Container className="product">
        <Row>
          {productList?.map((item, index) => (
            <Col key={index} lg={3} className="mb-4">
              <div className="product__card">
                {item.tag.length > 0 && <span className="tag">{item.tag}</span>}
                <Image
                  src={item?.image}
                  alt={item.id}
                  fluid
                  className="img-fluid"
                />
                <h3 className="text-center">{item.title}</h3>
                <h5 className="text-primary">Price: {item.price}</h5>
                <p className="description">{item.description}</p>
                <div className="text-center">
                  <Button onClick={() => handleAddToCart(item.id)}>
                    Buy Now
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
