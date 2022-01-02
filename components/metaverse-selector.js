import React, { useState, useEffect } from 'react';
import {
    initialState
} from '../data/thetwosents/metaverse-selector'
import Typeahead from './type-ahead';

export default function MetaverseSelector() {
    const [state, setState] = useState(initialState);
    const [selected, setSelected] = useState(null);
    return (
        <>
            <Typeahead
                data_global={state.metaverses} />
        </>
    )
}