import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

function Contact() {
  const [message, setMessage] = useState('');
  const [landloard, setLandLoard] = useState(null);

  return <div>Contact</div>;
}

export default Contact;
