import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './directory-item.styles'

export const DirectoryItem = ({ category: { id, imageUrl, title } }) => (
  <DirectoryItemContainer id={id}>
    <BackgroundImage imageUrl={imageUrl} />
    <Body>
      <h2>{title}</h2>
      <p>Shop Now</p>
    </Body>
  </DirectoryItemContainer>
)
