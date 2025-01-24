//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//


'use client';

export default function AppMonitor({ name, xurl }) {

    let xclass = 'xxx';
    if (xurl === undefined || xurl.length === 0) {
        xclass = 'disabled';
    }

    return <>
        <a className={xclass} href={xurl}>{name}</a>
        <small className={'isup'}>&bull;</small>
    </>;

}

