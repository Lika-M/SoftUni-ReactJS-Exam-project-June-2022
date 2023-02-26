import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as dataService from '../../services/dataService.js';

import Dashboard from '../Dashboard/Dashboard.js';
import './Catalog.css';

export default function Catalog() {

    const [plantTypes, setPlantTypes] = useState({ items: [], currentType: '' });
    const [isLoading, setIsLoading] = useState(true);
    const { type } = useParams();

    useEffect(() => {
        dataService.getAll(type ? type[0].toUpperCase() + type.slice(1) : 'all')
            .then(result => {
                setPlantTypes({ items: result, currentType: type });
                setIsLoading(false);
            });
    }, [type]);

    if (isLoading) {
        return (<p>Loading...</p>);
    };

    return (
        <Dashboard plantTypes={plantTypes} />
    );
}
