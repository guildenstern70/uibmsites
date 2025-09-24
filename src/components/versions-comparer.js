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
                            <VersionsDescriptor
                                name={'Common API'}
                                devUrl={SERVICES["Common API"].dev}
                                testUrl={SERVICES["Common API"].test} />
                            <VersionsDescriptor
                                name={'Digital Identity API'}
                                devUrl={SERVICES["Digital Identity API"].dev}
                                testUrl={SERVICES["Digital Identity API"].test} />
                            <VersionsDescriptor
                                name={'Classification API'}
                                devUrl={SERVICES["Classification API"].dev}
                                testUrl={SERVICES["Classification API"].test} />
                            <VersionsDescriptor
                                name={'Backend For Frontends API'}
                                devUrl={SERVICES["Backend For Frontends API"].dev}
                                testUrl={SERVICES["Backend For Frontends API"].test} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
