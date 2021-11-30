import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Explore from '../Explore/Explore';

const Detail = () => {
    const [projects, setProjects] = useState([]);
    const { detailId } = useParams();

    useEffect(() => {
        fetch('/fackDb.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])


    const remaining = projects?.filter(project => project.id === parseInt(detailId))
    return (
        <div>
            {
                remaining.map(data => <Explore
                    key={data.id}
                    data={data}
                />)
            }
        </div>
    );
};

export default Detail;