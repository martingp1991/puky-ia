import { useState } from 'react';
import imageData from '../data';
import { FaTimes } from 'react-icons/fa';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [largeImage, setLargeImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setLargeImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setLargeImage(null);
  };

  const handleImageClick = (image) => {
    setLargeImage(image);
  };

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full max-w-[1032px] mx-auto gap-6 lg:gap-8 p-6">
        {imageData.map((image, index) => (
          <li
            className="space-y-4 duration-1000 animate-slideUpAndFade"
            data-area="result-preview"
            key={index}
            onClick={() => openModal(image)}
          >
            <div className="relative block w-full overflow-hidden transition-all border rounded-lg shadow aspect-video border-zinc-200 hover:shadow-lg">
              <img
                alt={`Template for prompt: ${image.title}`}
                className="object-cover object-top transition-transform transform hover:cursor-pointer hover:scale-110"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: 'transparent'
                }}
                src={image.imageUrl}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img
                  alt=""
                  width="32"
                  height="32"
                  className="rounded-full shrink-0"
                  src={image.avatarUrl}
                />
                <p className="relative min-w-0 px-4 py-1 text-sm rounded-full bg-zinc-200">
                  <span className="absolute left-[-.38rem] top-1/2">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 0.246094C5.82471 6.23823 4.4614 9.13570.5 13.7461C6.61652 13.8194 9.62768 13.4401 13 10.7461L6 0.246094Z" fill="#e4e4e7" />
                    </svg>
                  </span>
                  <span className="block w-full min-w-0 truncate" title={image.title}>{image.title}</span>
                </p>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-200">{image.description}</p>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none cursor-pointer focus:outline-none animated fadeIn faster" onClick={closeModal}>
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative w-auto max-w-3xl mx-auto my-6">

            <div className="relative flex flex-col border-0 rounded-lg shadow-lg outline-none bg-zinc-200 sm:w-full w-96 focus:outline-none dark:bg-zinc-900" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-blueGray-200">
                <h3 className="text-xl font-semibold dark:text-zinc-200">
                  {selectedImage.title}
                </h3>

                <button
                  className="float-right p-1 ml-auto text-2xl leading-none text-black bg-transparent border-0 outline-none focus:outline-none"
                  onClick={closeModal}
                >
                  <FaTimes className='text-lg text-zinc-900 dark:text-zinc-200' />
                </button>
              </div>
              <div className="relative flex-auto p-6">
                <img
                  src={largeImage ? largeImage.imageUrl : ''}
                  alt={largeImage ? largeImage.title : ''}
                  className="max-w-full mx-auto mb-4 max-h-96"
                />
                <img
                  alt=""
                  width="32"
                  height="32"
                  className="mb-4 rounded-full shrink-0"
                  src={largeImage ? largeImage.avatarUrl : ''}
                />
                <p className="text-xs text-zinc-500 dark:text-zinc-200">
                  {largeImage ? largeImage.description : ''}
                </p>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  {selectedImage &&
                    [selectedImage.variant1ImageUrl, selectedImage.variant2ImageUrl, selectedImage.variant3ImageUrl].map((variantImageUrl, index) => (
                      <img
                        key={index}
                        src={variantImageUrl}
                        alt={`${selectedImage.title} - Variant ${index + 1}`}
                        className="object-cover object-top w-full h-32 transition-transform transform opacity-50 cursor-pointer hover:opacity-100 hover:cursor-pointer hover:scale-110"
                        onClick={() => handleImageClick({ ...selectedImage, imageUrl: variantImageUrl })}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
