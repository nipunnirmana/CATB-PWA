import React, { useContext } from 'react';
import { Context } from '../../Store/MyStore';
import { OPTION_LIST } from '../../Store/MyReducer';
import './OptionSelector.scss';

export default function OptionSelector() {
    const [
        { options: {
            data = [],
            title = false,
            onClickEvent = () => { }
        } = {} }, dispatch] = useContext(Context);
    const hasOptions = data?.length;

    const handleClose = (event) => {
        if (event.target.classList.contains("option-selector-wrapper")) {
            dispatch({ type: OPTION_LIST, payload: [] });
        }
    }

    return (
        <div className={`option-selector-wrapper ${hasOptions ? 'active' : ''}`} onClick={handleClose}>
            <ul>
                {title ? <li className='title' key="title">{title}</li> : false}
                {data.map(({ name, value, selected }) =>
                    <li key={value} className="list-item" onClick={() => onClickEvent(value)}>
                        <i className={`icon-radio-${selected ? 'selected' : 'default'}`} />
                        {name}
                    </li>
                )}
            </ul>
        </div>
    );
}
