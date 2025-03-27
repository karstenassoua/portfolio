import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const ProjectGallery = ({ imageUrls }) => {
    return (
        <div className="flex flex-wrap gap-6 mx-27 my-20 justify-center">
            {imageUrls
                .map((url, index) => (
                    <Image 
                        key={index} 
                        src={url} 
                        alt="Portfolio image" 
                        width={600} 
                        height={350}
                        className="transition-transform hover:rotate-1 max-w-7/16 rounded-xl" 
                    />
                ))}
        </div>
    );
};

ProjectGallery.propTypes = {
    imageUrls: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectGallery;