'use client';

import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './page.module.scss';

const cx = classNames.bind(styles);

type Props = {};

function Page({}: Props) {
  const [postData, setPostData] = useState({
    title: '',
    content: '',
    rating: '',
    images: ['', '', ''],
    location: '',
    latitude: '',
    longitude: '',
    userId: '', // 사용자 ID는 어떻게 설정할지 별도의 로직 필요
    category: '',
    hashtags: [],
    priceRange: '',
    openingHours: '',
    isDeleted: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // 서버에 데이터 전송 로직
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  // 이미지 선택 함수
  const handleImageChange = (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);

      setPostData((prevState) => {
        const newImages = [...prevState.images];
        newImages[index] = imageUrl;
        return { ...prevState, images: newImages };
      });
    }
  };

  // 이미지 제거 함수
  const handleRemoveImage = (index: number) => () => {
    setPostData((prevState) => {
      const newImages = [...prevState.images];
      newImages[index] = ''; // 지정된 인덱스의 이미지를 제거
      return { ...prevState, images: newImages };
    });
  };

  return (
    <div className={cx('container')}>
      <h1>게시글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div className={cx('titleGroup')}>
          <label htmlFor="title" className={cx('titleLabel')}>
            제목
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={postData.title}
            onChange={handleChange}
            className={cx('titleInput')}
          />
        </div>
        <label htmlFor="title" className={cx('imageLabel')}>
          이미지 첨부
        </label>
        <div className={cx('imageUploadGroup')}>
          {postData.images.map((image, index) => (
            <div key={index} className={cx('imageUploadBox')}>
              <input type="file" accept="image/*" onChange={handleImageChange(index)} className={cx('imageInput')} />
              {image && (
                <div className={cx('imageContainer')}>
                  <img src={image} alt={`image-${index}`} className={cx('imagePreview')} />
                  <button onClick={handleRemoveImage(index)} className={cx('removeImageButton')}>
                    X
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* 다른 필드들도 이와 비슷한 방식으로 추가 */}
        <button type="submit">게시글 작성</button>
      </form>
    </div>
  );
}

export default Page;
