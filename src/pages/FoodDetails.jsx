import React from 'react'
import Helmet from '../assets/components/Helmet/Helmet'
import CommonSection from '../assets/components/UI/category/common-section/CommonSection'
import { Col, Row, Container } from 'reactstrap'
import productImg from '../assets/images/product_01.1.jpg'
import '../../src/styles/product-details.css'
const FoodDetails = () => {
  return (
    <Helmet title="Product-details">
    <CommonSection title={'Product 01'} />

    <section>
      <Container>
        <Row>
          <Col lg="2" md="2">
            <div className="product__images ">
              <div
                className="img__item mb-3"
                // onClick={() => setPreviewImg(product.image01)}
              >
                <img src={productImg} alt="" className="w-50" />
              </div>
              <div
                className="img__item mb-3"
                // onClick={() => setPreviewImg(product.image02)}
              >
                <img src={productImg}  alt="" className="w-50" />
              </div>

              <div
                className="img__item"
                // onClick={() => setPreviewImg(product.image03)}
              >
                <img src={productImg}  alt="" className="w-50" />
              </div>
            </div>
          </Col>

          <Col lg="4" md="4">
            <div className="product__main-img">
              <img src={productImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="single__product-content">
              <h2 className="product__title mb-3">Pizz with mushroom</h2>
              <p className="product__price">
                {" "}
                Price: <span>$34</span>
              </p>
              <p className="category mb-5">
                Category: <span>Burger</span>
              </p>

              <button onClick={"addItem"} className="addTOCart__btn">
                Add to Cart
              </button>
            </div>
          </Col>

          <Col lg="12">
            <div className="tabs d-flex align-items-center gap-5 py-3">
              <h6
                // className={` ${tab === "desc" ? "tab__active" : ""}`}
                // onClick={() => setTab("desc")}
              >
                Description
              </h6>
              <h6
                // className={` ${tab === "rev" ? "tab__active" : ""}`}
                // onClick={() => setTab("rev")}
              >
                Review
              </h6>
            </div>

            {"tab" === "desc" ? (
              <div className="tab__content">
                <p>{"desc"}</p>
              </div>
            ) : (
              <div className="tab__form mb-3">
                <div className="review pt-5">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">jhon1@gmail.com</p>
                  <p className="feedback__text">great product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">jhon1@gmail.com</p>
                  <p className="feedback__text">great product</p>
                </div>

                <div className="review">
                  <p className="user__name mb-0">Jhon Doe</p>
                  <p className="user__email">jhon1@gmail.com</p>
                  <p className="feedback__text">great product</p>
                </div>
                <form className="form" 
                // onSubmit={submitHandler}
                >
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      // onChange={(e) => setEnteredName(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      // onChange={(e) => setEnteredEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form__group">
                    <textarea
                      rows={5}
                      type="text"
                      placeholder="Write your review"
                      // onChange={(e) => setReviewMsg(e.target.value)}
                      required
                    />
                  </div>

                  <button type="submit" className="addTOCart__btn">
                    Submit
                  </button>
                </form>
              </div>
            )}
          </Col>

          {/* <Col lg="12" className="mb-5 mt-4">
            <h2 className="related__Product-title">You might also like</h2>
          </Col>

          {relatedProduct.map((item) => (
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4" key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))} */}
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default FoodDetails
