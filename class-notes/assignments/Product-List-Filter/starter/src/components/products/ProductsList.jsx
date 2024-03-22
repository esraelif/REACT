import React, { useState } from 'react';
import { Container, Form, Row } from 'react-bootstrap';
import ProductCard from './ProductCard'; // ProductCard bileşenini içeri aktarıyoruz
import './Products.scss'; // CSS dosyasını içeri aktarıyoruz
import { products, categories } from '../../helper/data'; // Veri kaynağını içeri aktarıyoruz
import { Header } from '../header/Header'; // Header bileşenini içeri aktarıyoruz

const ProductsList = () => {
  // State'lerin tanımlanması: 
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchInput, setSearchInput] = useState('');

  // Filtrelenmiş ürünlerin hesaplanması:
  // - Öncelikle, seçilen kategoriye göre ürünler filtrelenir
  // - Daha sonra, arama girişindeki metne göre ürünler filtreleme
  const filteredProducts = products.filter((product) =>
    selectedCategory === 'all' ? true : product.category === selectedCategory
  ).filter((product) => {
    return product.title.toLowerCase().includes(searchInput.toLowerCase());
  });

  // Kategori değişikliği işlevi: Seçilen kategoriyi güncelleme
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  //  Arama girişindeki metni güncelleme
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <>
      {/*  kategori seçimi */}
      <Header setSelected={handleCategoryChange} />
      {/* Search için */}
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={handleSearchInputChange}
      />
      {/* Ürün kartlarının listelendiği konteyner */}
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">
          {/* Filtrelenmiş ürünlerin her biri için ProductCard bileşenini oluşturma */}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;