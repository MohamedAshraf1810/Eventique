import React from 'react'
const Calendly = () => {

    const time_API = 'https://calendly.com/karimali01999/30min'

    return (
        <iframe
            title="collaboration Time"
            className='Calendly-Embed'
            src={time_API}
            width='100%'
            height='100%'
        >
        </iframe >
    )
}

export default Calendly