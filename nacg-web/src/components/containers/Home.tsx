import React, {useState} from 'react';
import {Row, Container, Col} from "react-bootstrap";
import langrensha from "../../images/langrensha.jpg";
import baolingqiu from "../../images/baolingqiu.jpg";
import wangba from "../../images/wangba.jpg";
import mishitaotuo from "../../images/mishitaotuo.jpg";
import youxiting from "../../images/youxiting.jpg";
import zhuoqiu from "../../images/zhuoqiu.jpg";
import lanqiu from "../../images/lanqiu.jpg";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <Container>室内活动
            <Row>
                <Col>
                    <Link to="/activities/langrensha">
                    <img  src={langrensha} alt={"/activities/langrensha"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/zhuoqiu">
                    <img  src={zhuoqiu} alt={"/activities/zhuoqiu"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/wangba">
                    <img  src={wangba} alt={"/activities/wangba"}/>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/activities/baolingqiu">
                    <img  src={baolingqiu} alt={"/activities/baolingqiu"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/youxiting">
                    <img  src={youxiting} alt={"/activities/youxiting"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/mishitaotuo">
                    <img  src={mishitaotuo} alt={"/activities/mishitaotuo"}/>
                    </Link>
                </Col>
            </Row>
            <br/>
            室外活动
            <Row>
                <Col>
                    <Link to="/activities/lanqiu">
                        <img  src={lanqiu} alt={"/activities/laniqu"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/lanqiu">
                        <img  src={lanqiu} alt={"/activities/lanqiu"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/lanqiu">
                        <img  src={lanqiu} alt={"/activities/lanqiu"}/>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/activities/lanqiu">
                        <img  src={lanqiu} alt={"/activities/lanqiu"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/lanqiu">
                        <img  src={lanqiu} alt={"/activities/lanqiu"}/>
                    </Link>
                </Col>
                <Col>
                    <Link to="/activities/lanqiu">
                        <img  src={lanqiu} alt={"/activities/lanqiu"}/>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;