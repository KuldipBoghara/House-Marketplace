import { useNavigate } from 'react-router-dom';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import Spinner from './Spinner';
import { useState } from 'react';
import { useEffect } from 'react';

function ExploreSlider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const listingRef = collection(db, 'listings');
    const q = query(listingRef, orderBy('timestamp', 'desc'), limit(5));
  }, []);

  return <div>ExploreSlider</div>;
}

export default ExploreSlider;
