import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelector';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import './collectionsOverview.scss';

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {collections.map(({ id, title, routeName, items }) => (
            <CollectionPreview
                key={id}
                title={title}
                routeName={routeName}
                items={items}
            />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
