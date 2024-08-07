/*
 * MiMIT UIBM CheatSheet
 *
 * Copyright (C) 2024 IBM Consulting Italy - All Rights Reserved
 * This is copyrighted software
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential by IBM Consulting
 *
 */

'use client';

import {useEffect, useState} from "react";

export default function RestMonitor({ name, xurl, api }) {

    const appUrl = 'http://' + xurl;
    const apiUrl = 'http://' + xurl + '/api/' + api;
    const [alive, setAlive] = useState('[down]');
    const [aliveCss, setAliveCss] =  useState('isdown');

    useEffect(() => {
        fetch(apiUrl, { method: 'GET' })
            .then(
                (response) => response.json()
            )
            .then((data) => {
                console.log(name + " = " + JSON.stringify(data));
                if (data.alive) {
                    console.log("Site is alive");
                    setAlive('[up]');
                    setAliveCss('isup');
                }
            })
            .catch(error => console.error('Error:', error));
    });

    return <div>
        <a href={appUrl}>{name}</a>&nbsp;<small className={aliveCss}>&bull;</small>
    </div>;

}