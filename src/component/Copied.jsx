import React from 'react';
import { getContrastYIQ } from '../helper';

export const Copied = ({color}) => {
    return (
        <div className="copied">
          <p style={{
            '--bgColor':`#${color}`,
            '--textColor':`${getContrastYIQ(color)}`
        }}> Copied  #{color} to Clipboard</p>
        </div>
    )
}
