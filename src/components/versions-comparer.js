//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import VersionsDescriptor from "@/components/versions-descriptor";
import {SERVICES} from "@/app/config";

export default function VersionsComparer() {

    return <div className="uibm panel">
        <div className="fixed-grid has-1-cols">
            <div className="grid">
                <div className="cell">
                    <h2 className="title my-4 has-text-centered">Environments Versions</h2>
                </div>
                <div className="cell">
                    <div id="versions" >
                        <table className="table is-fullwidth is-striped is-hoverable">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Dev</th>
                                <th>Test</th>
                            </tr>
                            </thead>
                            <tbody>
                            {Object.keys(SERVICES).map((serviceName) => (
                                <VersionsDescriptor
                                    key={serviceName}
                                    name={serviceName}
                                    devUrl={SERVICES[serviceName].dev}
                                    testUrl={SERVICES[serviceName].test}
                                />
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
