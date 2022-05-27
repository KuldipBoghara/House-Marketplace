import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  cllection,
  getDocs,
  query,
  where,
  orderBy,
  limit,
  startAfter,
  collection
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

function Category() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();

  useEffect(() => {
    const fetchListing = async () => {
      try {
        //Get reference
        const listingRef = collection(db, 'listings');

        //create query
        const q = query(
          listingRef,
          where('type', '==', params.categoryName),
          orderBy('timestamp', 'desc'),
          limit(10)
        );

        //Execute query
        const querySnap = await getDocs(q);

        const listings = [];
        console.log(querySnap);

        querySnap.forEach((doc) => {
          console.log(doc.data());
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchListing();
  });

  return <div>Category</div>;
}

export default Category;
