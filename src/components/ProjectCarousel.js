import React from 'react';
import PropTypes from 'prop-types';

const ProjectCarousel = ({ imageUrls }) => {
    return (
        <div className="flex flex-wrap gap-4 mx-27 my-20 justify-center">
            {imageUrls
                .map((url, index) => (
                    <img key={index} src={url} alt={`Gallery item ${index + 1}`} className="max-w-3/16 rounded-xl" />
                ))}
        </div>
    );
};

ProjectCarousel.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCarousel;