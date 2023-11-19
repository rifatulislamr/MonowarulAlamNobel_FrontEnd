

import { useEffect, useState } from 'react';
import RecentNews from './RecentNews';


const RecentNewsItems = () => {

    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('allFile.json')
            .then(res => res.json())
            .then(data => {
                setMenu(data)
            })
    }, [])
    return (
        <div>

            {
                menu.map(item => <RecentNews
                    key={item._id}
                    item={item}
                ></RecentNews>)
            }

        </div>
    );
};

export default RecentNewsItems;