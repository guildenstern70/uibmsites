//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

import styles from "./page.module.css";
import AppMonitor from "@/components/appmonitor";
import RestMonitor from "@/components/restmonitor";

export default function Home()
{
  return (

      <>
        <div id={styles["uibmlogo"]} className={"columns is-centered"}>
          <img src="/uibmlogo.png" width={400} alt="UIBM Logo"/>
        </div>

        <div className={"columns"}>
            <div className={"column"}>
            <h2 className={styles.title}>Front End</h2>
            <ul>
              <li><RestMonitor name={'Deposito & RDS [DEV]'}
                               appUrl={'https://uibm-fe-dev.net'}
                               apiUrl={'https://uibm-fe-dev.net/api/alive'}/>
              </li>
              <li><RestMonitor name={'Deposito & RDS [TEST]'}
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
            <div className={"column"}>
            <h2 className={styles.title}>APIs</h2>
            <ul>
              <li><RestMonitor name={'Common API [DEV]'}
                               appUrl={'https://uibm-common-api-dev.net'}
                               apiUrl={'https://uibm-common-api-dev.net/api/alive'}/>
              </li>
              <li><RestMonitor name={'Common API [TEST]'}
                               appUrl={'https://common.uibm-services-test.net/'}
                               apiUrl={'https://common.uibm-services-test.net/api/alive'}/>
              </li>
              <li><RestMonitor name={'Digital Identity API [DEV]'}
                               appUrl={'https://uibm-digitalid-api-dev.net'}
                               apiUrl={'https://uibm-digitalid-api-dev.net/api/alive'}/>
              </li>
              <li><RestMonitor name={'Digital Identity API [TEST]'}
                               appUrl={'https://digitalid.uibm-services-test.net/'}
                               apiUrl={'https://digitalid.uibm-services-test.net/api/alive'}/>
              </li>
              <li><RestMonitor name={'Classification API [DEV]'}
                               appUrl={'https://class.uibm-services-dev.net'}
                               apiUrl={'https://class.uibm-services-dev.net/api/alive'}/>
              </li>
              <li><RestMonitor name={'Classification API [TEST]'}
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
            <div className={"column"}>
            <h2 className={styles.title}>Wireframe</h2>
            <ul>
              <li><a
                  href="https://www.figma.com/design/BkWe7ggTQoJkan3V569mMh/DEV-Protos-show-v7-on-draft-team-vv2.2"
                  target="_blank">
                Deposito - Settembre #1</a></li>
              <li><a
                  href="https://www.figma.com/design/qcFMkpUGElm13Hi3RKfEaj/DEV-Protos-show-v8 "
                  target="_blank">
                Deposito - Settembre #2</a></li>
              <li><a href="https://www.figma.com/design/GrN0dEz9DFC9vorMHNnoFz/DEV9-Deposito?node-id=0-1&t=endQPDSpNb84zGth-0"
                     target="_blank">
                Nuovi UC (210 et al.)</a></li>
              <li>
                <a href="https://www.figma.com/design/znuGDeGB78qN2b2Iizi7qA/DEV3.1-Gepi?node-id=127-137946&p=f"
                   target="_blank">GEPI - New</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={"columns"}>
          <div className={"column"}>
            <h2 className={styles.title}>Test</h2>
            <ul>
              <li><a href="https://github.com/guildenstern70/uibm-test/issues">Issue Management</a></li>
            </ul>
          </div>
          <div className={"column"}>
            <h2 className={styles.title}>UIBM Team</h2>
            <ul>
              <li><a href="/credits">Credits</a></li>
            </ul>
          </div>
        </div>

      </>

  );
}
