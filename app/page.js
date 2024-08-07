/*
 * MiMIT UIBM CheatSheet
 *
 * Copyright (C) 2024 IBM Consulting Italy - All Rights Reserved
 * This is copyrighted software
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential by IBM Consulting
 *
 */

import styles from "./page.module.css";
import AppMonitor from "@/app/appmonitor";
import RestMonitor from "@/app/restmonitor";

export default function Home()
{
    return (
        <main className={styles.main}>

            <div>
                <img src="/uibmlogo.png" width={400} alt="UIBM Logo"/>
            </div>

            <div className={styles.grid}>
                <div className={styles.item}>
                    <h2 className={styles.title}>Front Ends</h2>
                    <ul>
                        <li><AppMonitor name={'New Deposito'}
                                        xurl={'ecs-uibm-fe-load-balancer-1325116318.eu-central-1.elb.amazonaws.com'}/>
                        </li>
                        <li><AppMonitor name={'XSARA'}
                                        xurl={'ecs-uibm-bo-fe-alb-1788755408.eu-central-1.elb.amazonaws.com'}/></li>
                        <li><AppMonitor name={'Workflow Manager'}
                                        xurl={'ecs-uibm-workflow-load-b-bg-486537510.eu-central-1.elb.amazonaws.com'}/>
                        </li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.title}>APIs</h2>
                    <ul>
                        <li><AppMonitor name={'Common API'}
                                        xurl={'ecs-uibm-api-load-balancer-1136427516.eu-central-1.elb.amazonaws.com'}
                                        api={'alive'} />
                        </li>
                        <li><AppMonitor name={'Digital Identity API'}
                                        xurl={'ecs-uibm-digidapi-loadbalancer-15080021.eu-central-1.elb.amazonaws.com'}
                                        api={'alive'} />
                        </li>
                        <li><AppMonitor name={'Classification API'}
                                        xurl={'ecs-uibm-class-api-alb-287839511.eu-central-1.elb.amazonaws.com'}
                                        api={'alive'} />
                        </li>
                        <li><AppMonitor name={'Backend For Frontends API'}
                                        xurl={'ecs-uibm-bff-load-balancer-144272593.eu-central-1.elb.amazonaws.com'}
                                         api={'alive'} />
                        </li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.title}>FIGMAs</h2>
                    <ul>
                        <li><a
                            href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=2015%3A312660&node-id=8002-198518&t=pKUos7TMInhAezID-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8002%3A198518&show-proto-sidebar=1">Parti
                            Comuni</a></li>
                        <li><a
                            href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=6001%3A344249&node-id=6001-344252&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A344250&show-proto-sidebar=1">Parti
                            Specifiche</a></li>
                        <li><a
                            href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=6001%3A209006&node-id=6001-209981&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A209981&show-proto-sidebar=1">Marchi
                            d&apos;Impresa</a></li>
                        <li><a
                            href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=4152%3A187029&node-id=6001-197659&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A198586&show-proto-sidebar=1">Brevetti</a>
                        </li>
                        <li><a
                            href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=6001%3A422803&node-id=6001-422806&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A422804">Dati
                            Identificativi</a></li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
