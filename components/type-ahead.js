import React, { useState, useEffect } from 'react';
import { AutoComplete } from 'antd';


export default function Typeahead({
    dataUrl,
    data_global,
}) {
    if (!dataUrl && !data_global) {
        throw new Error('Typeahead: dataUrl is required');
    }
    const [data, setData] = useState(data_global);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [searching, setSearching] = useState(false);

    useEffect(() => {
        if (data){
            let updated = data.map((item, index) => {
                item.value = item.name;
                item.label = item.name;
                return item;
            });
            updated.sort((a, b) => {
                if (a.name < b.name) return -1;
                if (a.name > b.name) return 1;
                return 0;
            });
        }
        setData(updated);
    }, [data]);

    useEffect(() => {
        if (dataUrl) {
            setLoading(true);
            fetch(dataUrl)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                    setLoading(false);
                });
        }
    }, [])

    const onSelect = (data) => {
        console.log('onSelect', data);
    };

    const onSearch = (searchText) => {
        setValue(searchText);
        setSearching(true);
    }
    return (
        <>
            <AutoComplete
                options={data}
                style={{
                    width: 200,
                }}
                value={value}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="Teleport to..."
            />
        </>
    )
}