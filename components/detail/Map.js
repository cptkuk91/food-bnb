import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import classNames from 'classnames/bind';

import styles from './Map.module.scss';

const cx = classNames.bind(styles);

const loader = new Loader({
  apiKey: 'AIzaSyC5UwM7iln-x8KqqpqOAxar9VtTOgqW1L4',
  version: 'weekly',
  libraries: ['places', 'marker'],
});

const mapOptions = {
  center: {
    lat: 0,
    lng: 0,
  },
  zoom: 4,
};

const Map = ({ location }) => {
  const mapRef = useRef();

  useEffect(() => {
    // Google Maps API 키 설정
    const loader = new Loader({
      apiKey: 'AIzaSyC5UwM7iln-x8KqqpqOAxar9VtTOgqW1L4',
      version: 'weekly',
      libraries: ['places', 'marker'],
    });

    // Google Maps API 로드
    loader.load().then((google) => {
      // 지도 생성
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 }, // 지도 초기 중심 좌표 (샌프란시스코)
        zoom: 13, // 초기 줌 레벨
      });

      // 마커 생성
      const marker = new google.maps.Marker({
        position: { lat: location.lat, lng: location.lng }, // 마커 위치 좌표
        map, // 마커를 표시할 지도 객체
      });

      map.setCenter({ lat: location.lat, lng: location.lng });
    });
  }, []);

  return <div ref={mapRef} className={cx('container')} />;
};

export default Map;
