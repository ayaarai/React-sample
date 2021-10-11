import React from 'react';
//import ReactDOM from 'react-dom';
import './index.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button  from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css"; //bootstrap

function FormArea(){
    return(
        <Container className="mt-4">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>メールアドレス</Form.Label>
              <Form.Control type="email" placeholder="(例)aaa.@bbb.co.jp" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>パスワード</Form.Label>
              <Form.Control type="password" placeholder="●●●●●●●" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="次回から自動ログイン適応" />
            </Form.Group>
            <Button variant="primary" type="submit">
              ログイン
            </Button>
          </Form>
        </Container>
    );
}
export default FormArea;