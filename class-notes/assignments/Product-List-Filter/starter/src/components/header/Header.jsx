import React from "react";
import { Button, Container, Stack } from "react-bootstrap";
import "./Header.scss";
import { categories, products } from "../../helper/data"

export const Header = ({ setSelected }) => {

  const handleEqual = (e) => {

    setSelected(e)
    console.log("ee tıkladı")
  }






  return (
    <Container className="header">
      <h1>Products List</h1>
      <Stack
        direction="vertical"
        gap={3}
        className="btns justify-content-center flex-md-row"
      >

        {categories.map((e) =>

          <Button variant="primary" type="button" className="btn btn-light" onClick={() => handleEqual(e)}>
            {e}
          </Button>
        )}










      </Stack>
    </Container>
  );
};
