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

export default function AppMonitor({ name, xurl }) {

    const appUrl = 'http://' + xurl;
    console.log(name + " = " + appUrl);
    return <div>
        <a href={appUrl}>{name}</a>
    </div>;

}
