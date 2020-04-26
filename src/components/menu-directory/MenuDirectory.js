import React from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectDirectoryCategories } from '../../redux/directory/directorySelector';

import MenuItem from '../menu-item/MenuItem';

import './menuDirectory.scss';

const MenuDirectory = ({ categories }) => (
    <div className="menu-directory">
        {
            categories.map(({ title, id, imageUrl, size, linkUrl }) => (
                <MenuItem
                    title={title}
                    key={id}
                    imageUrl={imageUrl}
                    size={size}
                    linkUrl={linkUrl}
                />
            ))
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    categories: selectDirectoryCategories
})

export default connect(mapStateToProps)(MenuDirectory);