// components/ImageCard.jsx
import Image from 'next/image';

/**
 * ImageCard Component
 * Renders a grid of cards with icons, titles, and descriptions.
 *
 * @param {Object[]} arr - Array of card data objects
 * @param {string} arr[].id - Unique identifier
 * @param {string} arr[].title - Card title
 * @param {string} arr[].description - Card description
 * @param {string} arr[].img - Image path (local or URL)
 */
const ImageCard = ({ arr }) => {
  return (
    <div className="row gx-lg-8 gx-xl-10 gy-10 align-items-center justify-content-center">
      {arr.map(({ id, title, description, img }) => (
        <div className="col-lg-4 col-md-6 d-flex justify-content-center" key={id}>
          <div className="card-services text-center w-100">
            {/* Icon or service image */}
            <Image
              alt={`${title} | HRMate`}
              src={img}
              width={50}
              height={50}
              className="position-static mb-1"
            />

            {/* Card Content */}
            <div className="p-4 shadow-lg rounded content">
              <h3 className="fs-22 mb-1">{title}</h3>
              <p className="text-justify p-1">{description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCard;
