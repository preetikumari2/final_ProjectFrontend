import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import categoryimg1 from "../../../assets/Images/Category1.png";
import categoryimg2 from "../../../assets/Images/Category2.png";
// import categoryimg3 from "../../../assets/Images/category-03.png";
// import categoryimg4 from "../../../assets/Images/Category4.png";
import '../../../styles/category.css';


const categoryData = [
    {
        display: 'Veg',
        imgUrl: categoryimg1
    },
    {
        display: 'Non-Veg',
        imgUrl: categoryimg2
    },
    // {
    //     display: 'Rice',
    //     imgUrl: categoryimg3
    // },
    // {
    //     display: 'Momos',
    //     imgUrl: categoryimg4
    // },
]
const Category = () => {
    return (
        <Container>
            <Row>
                {
                    categoryData.map((item, index) =>(
                        <Col lg='3' md='4' sm='6' xs='6' className="mb-4">
                            <div className="category_item d-flex align-items-center mt-3">
                                <div className="category_img">
                                    <img src={item.imgUrl} alt='category_item'/>
                                </div>
                                <h6>{item.display}</h6>
                            </div>
                        </Col>
                    ))
                }
            
            </Row>
        </Container>
    )
}

export default Category
 