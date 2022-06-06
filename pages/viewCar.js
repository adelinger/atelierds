import React from 'react';
import PropTypes from 'prop-types';


function viewCar({car}) {
    return (
        <div>
            {car.carModel + ' ' + car.carMake}
        </div>
    );
}

export default viewCar;