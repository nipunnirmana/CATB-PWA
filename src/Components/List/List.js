import React, { useEffect, useState } from 'react';
import { doc, getDoc } from "firebase/firestore";
import '../../fire';

import { getFirestore } from 'firebase/firestore'

export default function List() {


    const [firstName, setFirstName] = useState();
    const currentHour = new Date().getHours();
    const greeting = currentHour < 12 ? 'Good Morning' : currentHour < 18 ? 'Good Afternoon' : 'Good Evening';

    useEffect(() => {


        async function fetchData() {
            const db = getFirestore();

            const { uid = false } = JSON.parse(localStorage.getItem('customer')) || {};
            const docRef = doc(db, "drivers", uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const { first_name } = docSnap.data();
                setFirstName(first_name);
            } else {
                console.log("No such document!");
            }
        }
        fetchData();


    }, [])

    return (
        <div>
            <h1 onClick={() => window.location.reload()}>LOGGED IN PAGE </h1>
            <h2> {firstName ? `${greeting} ${firstName}, You have` : 'Loading...'} </h2>
        </div>
    );
}
