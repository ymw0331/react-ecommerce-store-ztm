import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <div className="background-image" imageUrl={imageUrl} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
