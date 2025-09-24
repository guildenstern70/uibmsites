//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import '../app/global.scss';

import RestMonitor from "@/components/restmonitor";
import AppMonitor from "@/components/appmonitor";
import {SERVICES} from "@/app/config";

export default function WebsitesTest()
{

    return <div className="control grid">
        <div className={"cell"}>
            <h2 className="title">Front End</h2>
            <ul>
                <li><RestMonitor name={'Deposito & RDS'}
                                 appUrl={'https://uibm-fe-test.net/'}
                                 apiUrl={'https://uibm-fe-test.net/api/alive'}/>
                </li>
                <li><RestMonitor name={'Gestione Proprietà Industriale (GEPI)'}
                                 appUrl={'https://uibm-bo-test.net/'}
                                 apiUrl={'https://uibm-bo-test.net/api/alive'}/>
                </li>
                <li><AppMonitor name={'Dashboard'}
                                xurl={'https://dash.uibm-fe-dev.net/'}/>
                </li>
                <li><AppMonitor name={'Workflow Designer'}
                                xurl={'http://ecs-uibm-wf-designer-alb-1860146931.eu-central-1.elb.amazonaws.com'}/>
                </li>
            </ul>
        </div>
        <div className={"cell"}>
            <h2 className="title">REST API</h2>
            <ul>
                <li><RestMonitor name={'Common API'}
                                 appUrl={SERVICES["Common API"].test}
                                 apiUrl={SERVICES["Common API"].test + '/api/alive'}/>
                </li>
                <li><RestMonitor name={'Digital Identity API'}
                                 appUrl={SERVICES["Digital Identity API"].test}
                                 apiUrl={SERVICES["Digital Identity API"].test + '/api/alive'}/>
                </li>
                <li><RestMonitor name={'Classification API'}
                                 appUrl={SERVICES["Classification API"].test}
                                 apiUrl={SERVICES["Classification API"].test + '/api/alive'}/>
                </li>
                <li><RestMonitor name={'Backend For Frontends API'}
                                 appUrl={SERVICES["Backend For Frontends API"].test}
                                 apiUrl={SERVICES["Backend For Frontends API"].test + '/api/alive'}/>
                </li>
                <li><AppMonitor name={'Workflow Manager'}
                                xurl={'https://uibm-workflow-dev.net/'}/>
                </li>
            </ul>
        </div>
    </div>

}
