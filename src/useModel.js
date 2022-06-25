import React from 'react'

export default function Model(defaultValue = '') {
    const [value, setValue] = React.useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value
    }
}