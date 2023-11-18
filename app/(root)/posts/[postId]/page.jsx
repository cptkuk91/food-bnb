'use client';
import React, { useMemo } from 'react';
import { useParams } from 'next/navigation';
import classNames from 'classnames/bind';
import { BiShare, BiHeart } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa6';
import { FaUserCheck, FaMedal } from 'react-icons/fa';

import styles from './page.module.scss';
import { DUMMY_POSTS, HOUSE_INFO } from '@/assets/dummy';
import Map from '@components/detail/Map';

const cx = classNames.bind(styles);

function page() {
  const { postId } = useParams();

  const post = useMemo(() => {
    return DUMMY_POSTS.find((post) => post.id === postId);
  }, [postId]);

  if (post === undefined) return;

  return (
    <div className={cx('container')}>
      <div className={cx('header')}>
        <h2>{post.title}</h2>
        <div className={cx('utils')}>
          <div className={cx('share')}>
            <BiShare /> <span>공유하기</span>
          </div>
          <div className={cx('save')}>
            <BiHeart /> <span>저장</span>
          </div>
        </div>
      </div>
      <div className={cx('images')}>
        <div className={cx(['column', 'main'])}>
          <img src={post.detailImages[0]} alt="detailImage" />
        </div>
        <div className={cx(['column', 'quatro'])}>
          {post.detailImages.map((image) => (
            <img src={image} alt="detailImage" />
          ))}
        </div>
      </div>
      <div className={cx('main')}>
        <div className={cx('left')}>
          <div className={cx('tags')}>
            {post.tags.map((tag, index) => (
              <span>
                {tag}
                {post.tags.length - 1 !== index && ','}&nbsp;
              </span>
            ))}
          </div>
          <div className={cx('roomInfo')}>
            <span>최대 인원 {post.houseInfo?.maxPeople}명</span>
            <span>침실 {post.houseInfo?.bedRooms}개</span>
            <span>침대 {post.houseInfo?.beds}개</span>
            <span>공동 사용 욕실 {post.houseInfo?.restRooms}개</span>
          </div>
          <div className={cx('bar')} />
          <div className={cx('hostInfo')}>
            <div className={cx('thumbnail')}>
              <img src={post.hostInfo.thumbnail} alt="thumbnail" />
            </div>
            <div className={cx('meta')}>
              <div className={cx('name')}>호스트: {post.hostInfo.name} 님</div>
              <div className={cx('career')}>호스팅 경력 {post.hostInfo.careerTime}년</div>
            </div>
          </div>
          <div className={cx('bar')} />
          <div className={cx('features')}>
            {post.houseInfo.features.map((feature, index) => (
              <div key={index} className={cx('feature')}>
                <div className={cx('icon')}>{HOUSE_INFO[feature].icon}</div>
                <div className={cx('meta')}>
                  <div className={cx('title')}>{HOUSE_INFO[feature].title}</div>
                  <div className={cx('description')}>{HOUSE_INFO[feature].description}</div>
                </div>
              </div>
            ))}
          </div>
          <div className={cx('bar')} />
          <div className={cx('intro')}>
            {post.hostInfo.intro.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            <div className={cx('detail')}>더 보기 &gt;</div>
          </div>
          <div className={cx('bar')} />
          <div className={cx('facilities')}>
            <div className={cx('title')}>숙소 편의시설</div>
            <div className={cx('wrapper')}>
              {post.houseInfo.facilities?.map((facility) => (
                <div className={cx('facility')}>
                  <div className={cx('icon')}>{facility.icon}</div>
                  <div className={cx('name')}>{facility.name}</div>
                </div>
              ))}
            </div>
            <div className={cx('bottom')}>
              <button type="button" className={cx('button')}>
                편의 시설 모두 보기
              </button>
            </div>
          </div>
        </div>
        <div className={cx('right')}>
          <div className={cx('card')}>
            <div className={cx('price')}>
              <span className={cx('regular')}>₩169,085</span>
              <span className={cx('discount')}>₩128,000</span>
              <span>/박</span>
            </div>
            <div className={cx('options')}>
              <div className={cx('check')}>
                <div className={cx('in')}>
                  <span>체크인</span>
                  <span>2023. 11. 19.</span>
                </div>
                <div className={cx('out')}>
                  <span>체크아웃</span>
                  <span>2023. 11. 24.</span>
                </div>
              </div>
              <div className={cx('personnel')}>
                <span>인원</span>
                <span>게스트 1명</span>
              </div>
            </div>
            <div className={cx('button')}>계속 진행하기</div>
            <div className={cx(['dayPrice', 'group'])}>
              <span>₩128,000 x 5박</span>
              <span>₩640,000</span>
            </div>
            <div className={cx(['commission', 'group'])}>
              <span>에어비앤비 서비스 수수료</span>
              <span>₩99,388</span>
            </div>
            <div className={cx('bar')} />
            <div className={cx('totalPrice')}>
              <span>총 합계</span>
              <span>₩739,388</span>
            </div>
          </div>
        </div>
      </div>
      <div className={cx('bar')} />
      <div className={cx('hostIntro')}>
        <div className={cx('left')}>
          <div className={cx('profile')}>
            <div className={cx('thumbnail')}>
              <img src={post.hostInfo.thumbnail} alt="profile" />
            </div>
            <div className={cx('meta')}>
              <span className={cx('host')}>호스트: {post.hostInfo.name}님</span>
              <span className={cx('registeredDate')}>
                회원 가입일: {`${post.hostInfo.registeredDate.year}년 ${post.hostInfo.registeredDate.month}월`}
              </span>
            </div>
          </div>
          <div className={cx('qualification')}>
            {post.hostInfo.reviewCount > 0 && (
              <div>
                <FaStar />
                <span>후기 {`${post.hostInfo.reviewCount}개`}</span>
              </div>
            )}
            {post.hostInfo.verification && (
              <div>
                <FaUserCheck />
                <span>본인 인증 완료</span>
              </div>
            )}
            {post.hostInfo.superHost && (
              <div>
                <FaMedal />
                <span>슈퍼 호스트</span>
              </div>
            )}
          </div>
          <p>{post.hostInfo.intro}</p>
        </div>
        <div className={cx('right')}>
          <span>응답률: {post.hostInfo.answerRate}%</span>
          <span>응답 시간: 1시간 이내</span>
          <button type="button">호스트에게 연락하기</button>
        </div>
      </div>
      <div className={cx('bar')} />
      <div className={cx('location')}>
        <div className={cx('title')}>호스팅 지역</div>
        <Map location={post.houseInfo.location} />
      </div>
    </div>
  );
}

export default page;
