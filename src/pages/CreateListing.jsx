import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Spinner from '../component/Spinner';

function CreateListing() {
  const [geolocationEnabled, setGeolocationEnabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({ ...initialFormData, userRef: user.uid });
      } else {
        navigate('/sign-in');
      }
    });

    return unsub;

    /* if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/sign-in');
        }
      });
    }

    return () => {
      isMounted.current = false;
    }; */

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth, navigate]);

  if (loading) {
    return <Spinner />;
  }
  return <div>CreateListing</div>;
}

const initialFormData = {
  type: 'rent',
  name: '',
  bedrooms: 1,
  bathrooms: 1,
  parking: false,
  furnished: false,
  offfer: false,
  regularprice: 0,
  discountedprice: 0,
  images: {},
  latitude: 0,
  loongitude: 0
};

export default CreateListing;
