import { default as styled } from "styled-components";

import CategoryCard from "./CategoryCard";

const CategoryList = ({ categories }) => {
  return (
    <StyledList>
      {categories.length > 0 ? (
        categories.map(category => (
          <CategoryCard category={category} key={category.id} />
        ))
      ) : (
        <p>This category is empty or does not exist.</p>
      )}
    </StyledList>
  );
};

// Styles
const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1.5rem;
  margin: 1rem 0rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default CategoryList;
