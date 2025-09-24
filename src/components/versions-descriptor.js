//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';


import {useEffect, useState} from "react";

export default function VersionsDescriptor({ name, devUrl, testUrl }) {

    const [devVersion, setDevVersion] = useState('?');
    const [testVersion, setTestVersion] = useState('?');

    useEffect(() => {
        let cancelled = false;

        async function fetchVersion(baseUrl) {
            try {
                const res = await fetch(baseUrl + '/api/alive');
                if (!res.ok) {
                    console.error('Cannot retrieve version info for ' + name);
                }
                const data = await res.json();
                return data && data.version ? data.version : '?';
            } catch (err) {
                console.error('VersionsDescriptor fetch error for', baseUrl, err);
                return null;
            }
        }

        async function checkVersions() {
            const [devRes, testRes] = await Promise.allSettled([
                fetchVersion(devUrl),
                fetchVersion(testUrl)
            ]);

            if (cancelled) return;

            const devVal = devRes.status === 'fulfilled' && devRes.value ? devRes.value : 'N/A';
            const testVal = testRes.status === 'fulfilled' && testRes.value ? testRes.value : 'N/A';

            setDevVersion(devVal);
            setTestVersion(testVal);
        }

        checkVersions().then(
            () => console.log('Versions retrieved for ' + name));

        return () => { cancelled = true; };
    }, [devUrl, testUrl, name]);

    const nameClass = (devVersion === testVersion) ? 'has-text-success' : 'has-text-warning';

    return <tr>
        <td className={nameClass}>{name}</td>
        <td>v.{devVersion}</td>
        <td>v.{testVersion}</td>
    </tr>
}
