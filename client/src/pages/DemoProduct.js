import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../firebaseConfig'; // Corrected import path



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

function DemoProduct() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, 'contacts'), formData);
            console.log('Document written with ID: ', docRef.id);
            // Optionally reset form or show success message
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <div>
            <NavBar />
            <h1>Demo Product</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" required />
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" required />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                <input type="text" name="phone_number" value={formData.phone_number} onChange={handleChange} placeholder="Phone Number" required />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" required />
                <button type="submit">Submit</button>
            </form>
            <Footer />
        </div>
    );
}

export default DemoProduct;
