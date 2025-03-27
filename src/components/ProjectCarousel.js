import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ProjectCarousel = ({ imageUrls }) => {
    return (
        <div className="flex flex-wrap gap-4 mx-27 my-20 justify-center">
            {imageUrls.map((url, index) => (
                <Image 
                    key={index} 
                    src={url} 
                    alt="Portfolio image" 
                    width={600} 
                    height={350}
                    className="max-w-3/16 transition-transform hover:rotate-1 rounded-xl" 
                />
            ))}
        </div>
    );
};

ProjectCarousel.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCarousel;