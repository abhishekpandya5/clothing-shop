import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cartActions";

// import CustomButton from "../CustomButton/CustomButton";
import {
  CollectionItemContainer, BackgroundImage,
  CollectionFooterContainer, NameContainer, PriceContainer, AddButton
} from "./CollectionItemStyles";

// import './collectionItem.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>

      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
