import React from 'react';
import styled from 'styled-components';

const SideBarContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f2f2f2;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #444444;
`;

const Category = styled.div`
  margin-bottom: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #444444;
`;

const SubCategory = styled.div`
  margin-left: 20px;
`;

const SubCategoryTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 5px;
  color: #666666;
`;

const Link = styled.a`
  display: block;
  text-decoration: none;
  color: #666666;
  padding: 5px 0;
  transition: all 0.3s ease;

  &:hover {
    color: #444444;
    background-color: #f5f5f5;
  }
`;

const Navbar = () => {
 return (
    <div>
    <SideBarContainer>
      <Title>My Sidebar</Title>
      <Category>
        <CategoryTitle>Category 1</CategoryTitle>
        <SubCategory>
          <SubCategoryTitle>Subcategory 1.1</SubCategoryTitle>
          <Link href="#">Link 1.1.1</Link>
          <Link href="#">Link 1.1.2</Link>
          <SubCategoryTitle>Subcategory 1.2</SubCategoryTitle>
          <Link href="#">Link 1.2.1</Link>
          <Link href="#">Link 1.2.2</Link>
        </SubCategory>
      </Category>
      <Category>
        <CategoryTitle>Category 2</CategoryTitle>
        <SubCategory>
          <SubCategoryTitle>Subcategory 2.1</SubCategoryTitle>
          <Link href="#">Link 2.1.1</Link>
          <Link href="#">Link 2.1.2</Link>
          <SubCategoryTitle>Subcategory 2.2</SubCategoryTitle>
          <Link href="#">Link 2.2.1</Link>
          <Link href="#">Link 2.2.2</Link>
        </SubCategory>
      </Category>
    </SideBarContainer>
 
 </div>
 );
};

export default Navbar;