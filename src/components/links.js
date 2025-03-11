//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//


'use client';

import '../app/global.scss';

export default function Links({ title, urls }) {

    return <>
        <h2 className="title">{title}</h2>
        <ul>
            {urls.map((url, i) => <li key={i}><a href={url.href} target="_blank" rel="noopener noreferrer">{url.title}</a></li>)}
        </ul>
    </>;

}
