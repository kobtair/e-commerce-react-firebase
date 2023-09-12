import { useNavigate } from "react-router-dom";

import { CategoryItemContainer, BackgroundImage, Body } from "./category-item.styles";

export default function CategoryItem({ cat }) {
  const { title, imageUrl, route } = cat;
  const navigateTo = useNavigate()
  const navigationHandler = () => navigateTo(route)
  return (
    <CategoryItemContainer onClick={navigationHandler}>
      {/* Filter out the 'imageUrl' prop */}
      <BackgroundImage $imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </CategoryItemContainer>
  );
}
