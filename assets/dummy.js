import { IoPeopleOutline, IoHomeOutline } from 'react-icons/io5';
import { BiSwim } from 'react-icons/bi';
import { TbHomeCheck, TbAirConditioning, TbToolsKitchen2, TbWashMachine } from 'react-icons/tb';
import { MdOutlineAttachMoney } from 'react-icons/md';
import { LuDog } from 'react-icons/lu';
import { FaCarOn } from 'react-icons/fa6';
import { IoIosWifi } from 'react-icons/io';
import { IoCarOutline } from 'react-icons/io5';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { PiTelevisionSimple } from 'react-icons/pi';
import { GiMountains } from 'react-icons/gi';
import { CgSmartHomeRefrigerator } from 'react-icons/cg';

export const DUMMY_POSTS = [
  {
    id: '1',
    title: '홍천의 자연 속 편하게 휴식할 숙소의 글램핑203동(2단지)',
    location: '일본 나가노',
    distance: '990km 거리',
    date: '11월 14일 ~ 19일',
    price: '259,800',
    tags: ['Seo-myeon', 'Hongcheon', '한국의 텐트'],
    houseInfo: {
      location: { lat: 36, lng: 127 },
      maxPeople: 10,
      bedRooms: 5,
      beds: 5,
      restRooms: 1,
      features: ['selfCheckIn', 'superHost', 'freeParking', 'swimmingPool'],
      facilities: [
        {
          name: '주방',
          icon: <TbToolsKitchen2 />,
        },
        { name: '무선 인터넷', icon: <IoIosWifi /> },
        { name: '건물 내 무료 주차', icon: <IoCarOutline /> },
        { name: '세탁기', icon: <TbWashMachine /> },
        { name: '업무 전용 공간', icon: <HiOutlineDesktopComputer /> },
        { name: '에어컨', icon: <TbAirConditioning /> },
        { name: 'TV', icon: <PiTelevisionSimple /> },
        { name: '산 전망', icon: <GiMountains /> },
        { name: '수영장', icon: <BiSwim /> },
        { name: '냉장고', icon: <CgSmartHomeRefrigerator /> },
        { name: '반려동물', icon: <LuDog /> },
      ],
    },
    hostInfo: {
      name: 'Hong',
      intro: `문의 사항이 있으시다면 언제든지 연락주세요 !🥰`,
      languages: ['English', 'Bahasa Indonesia'],
      careerTime: 5,
      answerRate: 100,
      superHost: true,
      reviewCount: 20,
      registeredDate: {
        year: 2023,
        month: 4,
      },
      verification: true,
      thumbnail: 'https://a0.muscache.com/im/pictures/user/2a99af4d-78d6-4fbb-b842-ecbb0ba472dd.jpg?im_w=240',
    },
    detailImages: [
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-841707871546139828/original/98be09a2-9209-40d0-a022-5ed4fa2c99fa.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-841707871546139828/original/9475a435-f98e-475b-8f4c-7dcbc2356051.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-841707871546139828/original/581b2f07-0bfa-4626-847a-314e5e2d3255.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-841707871546139828/original/f7c45539-c8a3-466e-ae69-f6410029c955.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-841707871546139828/original/1e607778-88cf-4768-96e8-dc528b6a28f5.jpeg?im_w=720',
    ],
  },
  {
    id: '2',
    title: '숲 속에서 즐기는 캠핑, 감성인테리어 카라반 실루엣(오두막/난방완비)',
    location: '서울특별시',
    distance: '1200km 거리',
    date: '12월 10일 ~ 20일',
    price: '300,000',
    tags: ['Kecamatan', 'Banjar', '인도네시아의 텐트의 개인실'],
    houseInfo: {
      location: { lat: 36, lng: 127 },
      maxPeople: 8,
      bedRooms: 4,
      beds: 2,
      restRooms: 2,
      features: ['publicSpace', 'superHost', 'allowedPet'],
      facilities: [
        {
          name: '주방',
          icon: <TbToolsKitchen2 />,
        },
        { name: '무선 인터넷', icon: <IoIosWifi /> },
        { name: '건물 내 무료 주차', icon: <IoCarOutline /> },
        { name: '세탁기', icon: <TbWashMachine /> },
        { name: '업무 전용 공간', icon: <HiOutlineDesktopComputer /> },
        { name: '에어컨', icon: <TbAirConditioning /> },
        { name: 'TV', icon: <PiTelevisionSimple /> },
        { name: '산 전망', icon: <GiMountains /> },
        { name: '수영장', icon: <BiSwim /> },
        { name: '냉장고', icon: <CgSmartHomeRefrigerator /> },
        { name: '반려동물', icon: <LuDog /> },
      ],
    },
    hostInfo: {
      name: 'Park',
      intro: `섬 관리인인 빈센트 플로레스가 여러분의 필요와 우려사항을 처리해드릴 수 있습니다.\n그는 유리 오두막 옆의 집에 살고 있습니다.\n예약이 확정되면 연락처를 보내드리겠습니다.`,
      languages: ['English', 'Korean'],
      careerTime: 3,
      answerRate: 88,
      superHost: true,
      reviewCount: 32,
      registeredDate: {
        year: 2023,
        month: 5,
      },
      verification: true,
      thumbnail: 'https://a0.muscache.com/im/pictures/user/f2db371d-ce72-4dc8-88bf-8cfe26240f16.jpg?im_w=240',
    },
    detailImages: [
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-872082150412967376/original/ceb9391d-e6ed-4fd1-a909-8929b8f35134.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-872082150412967376/original/b638ce75-58cb-475c-9358-6283016eeb0e.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-872082150412967376/original/c6f784ed-7828-4c17-9848-778f4a14cd33.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-872082150412967376/original/cdd92638-639d-436d-a9bf-78bd0c182ec9.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/prohost-api/Hosting-872082150412967376/original/09d772f8-7c38-4efb-b425-cc04825500c5.jpeg?im_w=720',
    ],
  },
  {
    id: '3',
    title: '썬문 호수 마을 자연 - 도심에서 탈출/썬문 호수/레이지 캠프/프라이빗 메도우 (AB)',
    location: '프랑스 파리',
    distance: '56km 거리',
    date: '11월 11일 ~ 12일',
    price: '125,000',
    tags: ['Nagiso', 'Kiso District', '일본의 텐트의 개인실'],
    houseInfo: {
      location: { lat: 36, lng: 127 },
      maxPeople: 8,
      bedRooms: 7,
      beds: 3,
      restRooms: 2,
      features: ['superHost', 'allowedPet', 'publicSpace'],
      facilities: [
        {
          name: '주방',
          icon: <TbToolsKitchen2 />,
        },
        { name: '무선 인터넷', icon: <IoIosWifi /> },
        { name: '건물 내 무료 주차', icon: <IoCarOutline /> },
        { name: '세탁기', icon: <TbWashMachine /> },
        { name: '업무 전용 공간', icon: <HiOutlineDesktopComputer /> },
        { name: '에어컨', icon: <TbAirConditioning /> },
        { name: 'TV', icon: <PiTelevisionSimple /> },
        { name: '산 전망', icon: <GiMountains /> },
        { name: '수영장', icon: <BiSwim /> },
        { name: '냉장고', icon: <CgSmartHomeRefrigerator /> },
        { name: '반려동물', icon: <LuDog /> },
      ],
    },
    hostInfo: {
      name: 'Choi Park',
      intro: `ONDA는 다양한 숙박업소분들과 함께 일하는 팀입니다.\n
      한국의 각 지역의 멋진 숙박업소를 찾아 고객님께 연결해주는 일을 하고 있습니다.\n
      업무시간은 한국시간으로 10:00~18:00입니다.\n
      예약이 완료 되시면 ONDA로 예약확정 문자를 드립니다.\n
      문자에 업체연락처가 있으니 확인 부탁드립니다.\n
      예약확정 문자가 오지 않았을 경우 예약이 완료되었거나 예약에 문제가 발생한 것이니, 메세지로 꼭 확인을 요청하시기 바랍니다.\n
      숙소 연락처는 예약 확정 후 고객님의 휴대폰으로 발송됩니다.`,
      languages: ['English', 'Korean', 'Japanese'],
      careerTime: 3,
      answerRate: 90,
      superHost: true,
      reviewCount: 32,
      registeredDate: {
        year: 2023,
        month: 5,
      },
      verification: true,
      thumbnail: 'https://a0.muscache.com/im/pictures/user/d1c44a23-ea62-4887-81cd-35bdb60c4604.jpg?im_w=240',
    },
    detailImages: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-790104764371300975/original/4bcc9c3a-b52c-424a-b4d7-13c48117ed64.jpeg?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-790104764371300975/original/8f8ec638-d616-4266-a050-2ec066a4ae9f.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-790104764371300975/original/253a631a-45e7-45c3-93bd-578bf14c43d6.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-790104764371300975/original/ce1a6d30-e448-44c5-86ad-623c596cad0d.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-790104764371300975/original/56e71a90-7987-4c36-b4e8-7f1458fe766b.jpeg?im_w=720',
    ],
  },
  {
    id: '4',
    title: '일상에서 벗어나 자연과 감성을 동시에 느끼며 힐링할 수 있는 숙소의 글램핑일반6',
    location: '북한 평양',
    distance: '120km 거리',
    date: '12월 12일 ~ 19일',
    price: '689,000',
    tags: ['Naega-myeon', 'Ganghwa-gun', '한국의 방'],
    houseInfo: {
      location: { lat: 36, lng: 127 },
      maxPeople: 4,
      bedRooms: 3,
      beds: 4,
      restRooms: 2,
      features: ['selfCheckIn', 'freeParking', 'publicSpace', 'allowedPet'],
      facilities: [
        {
          name: '주방',
          icon: <TbToolsKitchen2 />,
        },
        { name: '무선 인터넷', icon: <IoIosWifi /> },
        { name: '건물 내 무료 주차', icon: <IoCarOutline /> },
        { name: '세탁기', icon: <TbWashMachine /> },
        { name: '업무 전용 공간', icon: <HiOutlineDesktopComputer /> },
        { name: '에어컨', icon: <TbAirConditioning /> },
        { name: 'TV', icon: <PiTelevisionSimple /> },
        { name: '산 전망', icon: <GiMountains /> },
        { name: '수영장', icon: <BiSwim /> },
        { name: '냉장고', icon: <CgSmartHomeRefrigerator /> },
        { name: '반려동물', icon: <LuDog /> },
      ],
    },
    hostInfo: {
      name: 'Hotsix',
      intro: `라투 서바이벌에 오신 것을 환영합니다.
      저희는 생태관광 활동 서비스를 제공하는 현지 대리인입니다.
      저희 서비스는 환경 관광의 두 수준 또는 범주로 평가됩니다.
      1. 조호르 국립공원 엔다우 롬핀셀라이에서의 활동 (1번 게이트)
      2. 엔다우 롬핀 페타, 조호르 국립공원에서의 활동 (2번 게이트)
      조호르 주변 3가지 액티비티 (자연)',`,
      languages: ['Chinese', 'Korean', 'Japanese'],
      careerTime: 7,
      answerRate: 98,
      superHost: true,
      reviewCount: 130,
      registeredDate: {
        year: 2023,
        month: 1,
      },
      verification: true,
      thumbnail:
        'https://a0.muscache.com/im/pictures/user/User-250449653/original/77f3e9d1-e109-4d06-a2b0-f2a18e1fa121.jpeg?im_w=240',
    },
    detailImages: [
      'https://a0.muscache.com/im/pictures/miso/Hosting-961783026171501937/original/7b20e161-fd8c-44a8-befd-380006d490b4.png?im_w=1200',
      'https://a0.muscache.com/im/pictures/miso/Hosting-961783026171501937/original/3f5cdc2e-120a-4491-ae83-389541d951a5.png?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-961783026171501937/original/b635c535-08b1-4fe5-9649-4cb7e6feca30.png?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-961783026171501937/original/59345603-2018-490c-9eaa-98834261bfe0.jpeg?im_w=720',
      'https://a0.muscache.com/im/pictures/miso/Hosting-961783026171501937/original/f4f53c96-3175-4a10-a830-dc563c4f1f13.png?im_w=720',
    ],
  },
];

export const HOUSE_INFO = {
  superHost: {
    icon: <IoPeopleOutline size={24} />,
    title: `슈퍼호스트입니다.`,
    description: '슈퍼호스트는 풍부한 경험과 높은 평점을 자랑하는 호스트입니다.',
  },
  publicSpace: {
    title: '공용 공간',
    icon: <IoHomeOutline size={24} />,
    description: '숙소 일부 공간을 다른 사람과 함께 사용합니다.',
  },
  swimmingPool: {
    icon: <BiSwim size={24} />,
    title: '마음껏 물놀이를 즐기세요',
    description: '해당 지역에서 수영장을 갖춘 몇 안 되는 숙소 중 하나입니다.',
  },
  selfCheckIn: {
    icon: <TbHomeCheck size={24} />,
    title: '셀프 체크인',
    description: '건물 직원의 도움을 받아 체크인하실 수 있습니다.',
  },
  freeCancelDate: {
    icon: <MdOutlineAttachMoney size={24} />,
    title: `전까지 무료 취소 가능`,
    description: '',
  },
  allowedPet: {
    icon: <LuDog size={24} />,
    title: '반려동물 환영',
    description: '반려동물 동반이 허용되는 숙소입니다.',
  },
  freeParking: {
    icon: <FaCarOn size={24} />,
    title: '무료 주차 혜택을 누리세요',
    description: '해당 지역에서 무료 주차가 가능한 몇 안 되는 숙소 중 하나입니다.',
  },
};
