import React, { useEffect, useState } from 'react';
import { getImagesServise, perPage } from 'service/getImageServise';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from 'components/App.styled';

export function App() {
  const [query, setQuery] = useState(' ');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowButton, setIsShowButton] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(' ');

  const handleSubmit = querySearchbar => {
    if (querySearchbar !== query && querySearchbar !== ' ') {
      setQuery(querySearchbar);
      setImages([]);
      setPage(1);
      setIsShowButton(false);
    }
  };

  useEffect(() => {
    if (query === ' ') {
      return;
    }

    const getImages = async () => {
      try {
        setIsLoading(true);

        const data = await getImagesServise(query, page);
        const { totalHits: total, hits: hitsImage } = data;
        if (hitsImage.length === 0) {
          toast.error("Not found");
          return;
        }

        setImages(prevImages => [...prevImages, ...hitsImage]);
        setIsShowButton(page < Math.ceil(total / perPage));
      } catch (error) {
        toast.error("A download error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    if ((prevQuery => prevQuery !== query) || (prevPage => prevPage !== page)) {
      getImages(query, page);
    }
  }, [query, page]);

  const handleClickButton = () => {
    setPage(prevPage => prevPage + 1);
  };

  const showModal = largeImageURL => {
    setIsShowModal(true);
    setModalImage(largeImageURL);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const isShowImages = images.length > 0;
  return (
    <Container>
      <Searchbar onSubmit={handleSubmit} />

      {isShowImages && <ImageGallery images={images} showModal={showModal} />}

      {isShowModal && <Modal closeModal={closeModal} modalImage={modalImage} />}

      {isLoading && <Loader />}

      {isShowButton && <Button onClickButton={handleClickButton} />}
      <ToastContainer autoClose={3000} theme="colored" />
    </Container>
  );
}
