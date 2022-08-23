import { useEffect, useState } from 'react';
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
import Spinner from '../component/Spinner';
import ListingItem from '../component/ListingItem';

function Offers() {
  const [listings, setListings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lastFetchedListings, setLastFetchedListings] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        //Get reference
        const listingRef = collection(db, 'listings');

        //create query
        const q = query(
          listingRef,
          where('offer', '==', true),
          orderBy('timestamp', 'desc'),
          limit(10)
        );

        //Execute query
        const querySnap = await getDocs(q);
        const lastVisible = querySnap.docs[querySnap.docs.length - 1];
        setLastFetchedListings(lastVisible);

        const listings = [];

        querySnap.forEach((doc) => {
          return listings.push({
            id: doc.id,
            data: doc.data()
          });
        });

        setListings(listings);
        setLoading(false);
      } catch (error) {
        toast('Could not fetch Listngs');
      }
    };

    fetchListing();
  }, []);

  //Pagination / Load More
  const onFetchMoreListing = async () => {
    try {
      //Get reference
      const listingRef = collection(db, 'listings');

      //create query
      const q = query(
        listingRef,
        where('offer', '==', true),
        orderBy('timestamp', 'desc'),
        startAfter(lastFetchedListings),
        limit(10)
      );

      //Execute query
      const querySnap = await getDocs(q);

      const lastVisible = querySnap.docs[querySnap.docs.length - 1];
      setLastFetchedListings(lastVisible);

      const listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data()
        });
      });

      setListings((prevState) => [...prevState, ...listings]);
      setLoading(false);
    } catch (error) {
      toast('Could not fetch Listngs');
    }
  };

  return (
    <div className="category">
      <header>
        <p className="pageHeader">Offers</p>
      </header>

      {loading ? (
        <Spinner />
      ) : listings && listings.length > 0 ? (
        <>
          <main>
            <ul className="categoryListings">
              {listings.map((listing) => (
                <ListingItem
                  listing={listing.data}
                  id={listing.id}
                  key={listing.id}
                />
              ))}
            </ul>
          </main>

          <br />
          <br />

          {lastFetchedListings && (
            <p className="loadMore" onClick={onFetchMoreListing}>
              Load More
            </p>
          )}
        </>
      ) : (
        <p>There are no current Offer</p>
      )}
    </div>
  );
}

export default Offers;
