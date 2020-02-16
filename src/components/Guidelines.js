import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {Redirect} from 'react-router-dom';

const Guidelines = () => {

    return (
       <div className="centering spacing">
            <div className="w-60">
                <p className="f1 fw7 color-green  mv0">
                Cite your sources
                </p>
                <p className="f3 fw3 color-black mv0">
                The more sources the better!
                </p>
                <p className="f1 fw7 color-green  mv0">
                Use credible studies
                </p>
                <p className="f3 fw3 color-black mv0">
                Make sure they follow the scientific method and are reasonably recent.
                </p>
                <p className="f1 fw7 color-green  mv0">
                Use our tools to create your article!
                </p>
                <p className="f3 fw3 color-black mv0">
                Using our tools, we can help prevent modification of photos and news.
                </p>
                <p className="f1 fw7 color-green  mv0">
                How do you get certified with our brand?
                </p>
                <p className="f3 fw3 color-black mv0">
                Tell us what kind of article it is and provide us with proof that you followed most of the guidelines above.
                </p>
                
            </div>
        </div>
    )
}

Guidelines.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired
}

export default Guidelines
