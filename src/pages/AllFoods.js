import React, { useState, useEffect } from 'react';
import Helmet from '../components/Helmet/Helmet.js';
import CommonSection from '../components/UI/common-section/CommonSection.js';

import { Container, Row, Col } from 'reactstrap';
import ProductCard from '../components/UI/product-card/ProductCard.js';
import ReactPaginate from 'react-paginate';
import products from '../assets/fake-data/products.js';


import '../styles/all-foods.css';
import '../styles/pagination.css';


const AllFoods = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const [productData, setProductData] = useState(products);
    const [pageNumber, setPageNumber] = useState(0);

    const searchedProduct = products.filter((item) => {
        if(searchTerm.value === "") return item;
        if(item.title.toLowerCase()
        .includes(searchTerm.toLowerCase()))
        return item;
    })

    const productPerPage = 8;
    const visitedPage = pageNumber * productPerPage;
    const displayPage = searchedProduct.slice(visitedPage, visitedPage + productPerPage);

    const pageCount = Math.ceil(searchedProduct.length / productPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    

    return (
        <Helmet title='All-Foods'>
            <CommonSection title='All Foods'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='6' md='6' sm='6' xs='12' className="mt-4">
                            <div className="search_widget d-flex align-items-center justify-content-between ">
                                <input type="text" placeholder="Search for food here..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                                <span><i className="ri-search-line"></i></span>
                            </div>
                        </Col>
                        <Col lg='6' md='6' sm='6' className="mb-5" >
                            <div className="sorting_widget text-end ">
                                <select className="mt-4 w-100">
                                    <option>Default</option>
                                    <option value="ascending">Alphabetically, A-Z</option>
                                    <option value="descending">Alphabetically, Z-A</option>
                                    <option value="high-price">High Price</option>
                                    <option value="low-price">Low Price</option>
                                </select>
                            </div>
                        </Col>
                        {
                            displayPage
                            .filter((item) => {
                                if(searchTerm.value === "") return item;
                                if(item.title.toLowerCase()
                                .includes(searchTerm.toLowerCase()))
                                return item;
                            })
                            .map(item =>( 
                           <Col lg='3' md='4' sm='6' xs='6' className="mb-5" key={item.id} >
                            {" "}
                            <ProductCard item={item} /></Col> 
                           ))
                        
                        }

                        <div>
                            <ReactPaginate pageCount={pageCount} onPageChange={changePage} 
                            previousLabel={'Prev'} nextLabel={'Next'} containerClassName="paginationBttns"
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default AllFoods
