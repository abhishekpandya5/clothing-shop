import React from "react";
import { Link } from 'react-router-dom';
import CollectionItem from "../CollectionItem/CollectionItem.js";

import "./collectionPreview.scss";

const CollectionPreview = ({ title, items, routeName }) => {
  return (
    <div className="collection-preview">
      <Link to={`shop/${routeName}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
      </Link>
      <div className="preview">
        {items.filter((item, idx) => idx < 4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
