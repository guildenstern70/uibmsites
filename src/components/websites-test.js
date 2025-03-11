//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import '../app/global.scss';

import RestMonitor from "@/components/restmonitor";
import AppMonitor from "@/components/appmonitor";

export default function WebsitesTest() {

    return <div className="panel">
        <p className="panel-tabs">
            <a href={"/"}>Dev</a>
            <a href={"/test"} className="is-active">Test</a>
        </p>
        <div className="panel-block">
            <div className="control grid">
                <div className={"cell"}>
                    <h2 className="title">Front End</h2>
                    <ul>
                        <li><RestMonitor name={'Deposito & RDS'}
                                         appUrl={'https://uibm-fe-test.net/'}
                                         apiUrl={'https://uibm-fe-test.net/api/alive'}/>
                        </li>
                        <li><RestMonitor name={'Gestione Proprietà Intellettuale (GEPI)'}
                                         appUrl={'https://bo.uibm-fe-dev.net'}
                                         apiUrl={'https://bo.uibm-fe-dev.net/api/alive'}/>
                        </li>
                        <li><AppMonitor name={'Dashboard'}
                                        xurl={'https://axsaxs-search-7628008329.apps.bonsaisearch.net/app/home#'}/>
                        </li>
                        <li><AppMonitor name={'Workflow Designer'}
                                        xurl={'http://ecs-uibm-wf-designer-alb-1860146931.eu-central-1.elb.amazonaws.com'}/>
                        </li>
                    </ul>
                </div>
                <div className={"cell"}>
                    <h2 className="title">APIs</h2>
                    <ul>
                        <li><RestMonitor name={'Common API'}
                                         appUrl={'https://common.uibm-services-test.net/'}
                                         apiUrl={'https://common.uibm-services-test.net/api/alive'}/>
                        </li>
                        <li><RestMonitor name={'Digital Identity API'}
                                         appUrl={'https://digitalid.uibm-services-test.net/'}
                                         apiUrl={'https://digitalid.uibm-services-test.net/api/alive'}/>
                        </li>
                        <li><RestMonitor name={'Classification API'}
                                         appUrl={'https://class.uibm-services-test.net/'}
                                         apiUrl={'https://class.uibm-services-test.net/api/alive'}/>
                        </li>
                        <li><RestMonitor name={'Backend For Frontends API'}
                                         appUrl={'https://bff.uibm-services-dev.net'}
                                         apiUrl={'https://bff.uibm-services-dev.net/api/alive'}/>
                        </li>
                        <li><AppMonitor name={'Workflow Manager'}
                                        xurl={'http://ecs-uibm-workflow-load-b-bg-486537510.eu-central-1.elb.amazonaws.com'}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

}
