import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';

import * as dataService from '../../services/dataService.js';
import './Catalog.css';
import Dashboard from '../Dashboard/Dashboard.js';

export default function Catalog() {

    const [plantTypes, setPlantTypes] = useState({ items: [], currentType: '' });
    const { type } = useParams();

    useEffect(() => {
        dataService.getAll(type? type[0].toUpperCase() + type.slice(1) :'all')
            .then(result => {
                setPlantTypes({ items: result, currentType: type });
            })
    }, [type])

    return (
       <Dashboard plants={plantTypes} />
    );
}
