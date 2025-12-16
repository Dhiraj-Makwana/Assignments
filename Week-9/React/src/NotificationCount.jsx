import { useState } from 'react';

export default function Notification() {
    const [notification, setNotification] = useState(0);

    return (
        <div>
            <button onClick={()=> {setNotification(notification + 1)}}>Notification</button>
            <br />
            {"Notification Count: "+ notification}
        </div>
    )
}