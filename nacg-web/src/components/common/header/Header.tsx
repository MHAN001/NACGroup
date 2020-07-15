import React, {useState} from "react";
import styles from './Header.scss';
import classnames from 'classnames/bind';
import logo from './logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, FormControl, Nav, NavDropdown, Navbar} from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const cx = classnames.bind(styles);

const Header = () => {
    const [date, setDate] = useState<Date>(new Date());
    const handleDateChange = () => {
        setDate(date);
    }
    return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home">
            <img className={cx("Headerlogo")} src={logo} alt="NACG-logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/home">主页</Nav.Link>
                <DatePicker
                    selected={date}
                    onChange={handleDateChange}
                />
                <NavDropdown title="地区" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/boston">波士顿</NavDropdown.Item>
                    <NavDropdown.Item href="/seatle">西雅图</NavDropdown.Item>
                    <NavDropdown.Item href="/sf">旧金山</NavDropdown.Item>
                </NavDropdown>
                <Form inline>
                    <FormControl type="text" placeholder="搜索" className="mr-sm-2" />
                    <Button variant="outline-success">搜索</Button>
                </Form>
                <Nav.Link href="/signup">注册</Nav.Link>
                <Nav.Link href="/login">登陆</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)}

export default Header;
