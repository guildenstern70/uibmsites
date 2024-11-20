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
                        <li><RestMonitor name={'Deposito'}
                                         xurl={'dep.uibm-fe-dev.net'}
                                         api={'alive'}/>
                        </li>
                        <li><RestMonitor name={'Gestione Proprietà Intellettuale (GEPI)'}
                                         xurl={'bo.uibm-fe-dev.net'}
                                         api={'alive'}/>
                        </li>
                        <li><RestMonitor name={'Ricerca Dati e Statistiche (RDS)'}
                                         xurl={'bd.uibm-fe-dev.net'}
                                         api={'alive'}/>
                        </li>
                        <li><AppMonitor name={'Dashboard'}
                                        xurl={''}/>
                        </li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.title}>APIs</h2>
                    <ul>
                    <li><RestMonitor name={'Common API'}
                                         xurl={'uibm-common-api-dev.net'}
                                         api={'alive'}/>
                        </li>
                        <li><RestMonitor name={'Digital Identity API'}
                                         xurl={'uibm-digitalid-api-dev.net'}
                                         api={'alive'}/>
                        </li>
                        <li><RestMonitor name={'Classification API'}
                                         xurl={'class.uibm-services-dev.net'}
                                         api={'alive'}/>
                        </li>
                        <li><RestMonitor name={'Backend For Frontends API'}
                                         xurl={'bff.uibm-services-dev.net'}
                                         api={'alive'}/>
                        </li>
                        <li><AppMonitor name={'Workflow Manager'}
                                        xurl={'http://ecs-uibm-workflow-load-b-bg-486537510.eu-central-1.elb.amazonaws.com'}/>
                        </li>
                    </ul>
                </div>
                <div className={styles.item}>
                    <h2 className={styles.title}>FIGMAs</h2>
                    <ul>
                        <li><a
                            href="https://www.figma.com/design/BkWe7ggTQoJkan3V569mMh/DEV-Protos-show-v7-on-draft-team-vv2.2"
                            target="_blank">
                            Deposito - Settembre #1</a></li>
                        <li><a
                            href="https://www.figma.com/design/qcFMkpUGElm13Hi3RKfEaj/DEV-Protos-show-v8 "
                            target="_blank">
                            Deposito - Settembre #2</a></li>
                        <li>
                            <a href="https://www.figma.com/proto/eMTjsOAf7chM0l0Fto8zAo/DEV2.2-Gepi?page-id=0%3A1&node-id=1-12917&node-type=canvas&t=7pTkoFxWGuExqI8d-0&scaling=min-zoom&content-scaling=fixed"
                               target="_blank">GEPI - Novembre #1</a>
                        </li>
                    </ul>
                </div>
            </div>

        </main>
    );
}
