import './directoryItem.styles.jsx';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directoryItem.styles.jsx';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title,route } = category;
  const Navigate = useNavigate()
  const onNavigateHandler =()=>{Navigate(route)}

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
