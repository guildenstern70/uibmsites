//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import {useEffect, useState} from "react";

export default function RestMonitor({ name, appUrl, apiUrl }) {

    const [aliveCss, setAliveCss] =  useState('isdown');

    useEffect(() => {
        fetch(apiUrl, { method: 'GET' })
            .then(
                (response) => response.json()
            )
            .then((data) => {
                if (data.alive) {
                    console.log(name + " site is alive");
                    setAliveCss('isup');
                }
            })
            .catch(error => console.error('Error:', error));
    });

    return <>
        <a href={appUrl} target="_blank" rel="noreferrer">{name}</a>&nbsp;
        <small className={aliveCss}>&bull;</small>
    </>;

}

