import React, { useState } from 'react';

export default function NumericInput() {

    const [value, setValue] = useState('');
    const onValueChange = (e) => {
        // no default value is submitted
        e.preventDefault();
        console.log({value, setValue});
        
    }

    return (
        <form onSubmit={onValueChange}>
            <input
            type="text"
            value={value}
            pattern='[0-9]+'
            required placeholder='Age'
            onChange={(e) => setValue(e.target.value)}
            />
            {/* for testing in console */}
            <input type="submit" value="submit" />
        </form>
    );

}