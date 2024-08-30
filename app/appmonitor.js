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

    let appUrl = 'http://' + xurl;
    let xclass = 'xxx';
    if (xurl.length === 0) {
        appUrl = '#';
        xclass = 'disabled';
    }

    return <>
        <a className={xclass} href={appUrl}>{name}</a>
    </>;

}
