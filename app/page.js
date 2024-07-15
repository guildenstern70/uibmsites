import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>

      <div>
        <img src="/uibmlogo.png" width={400} alt="UIBM Logo" />
      </div>

      <div className={styles.grid}>
        <div className={styles.item}>
          <h2 className={styles.title}>Front Ends</h2>
          <ul>
            <li><a href="http://ecs-uibm-fe-load-balancer-1325116318.eu-central-1.elb.amazonaws.com/"
                   target="_blank"
                   rel="noopener noreferrer">New Deposito</a></li>
            <li><a href="http://ecs-uibm-bo-fe-alb-1499102185.eu-central-1.elb.amazonaws.com/"
                   target="_blank"
                   rel="noopener noreferrer">XSARA</a></li>
            <li><a href="http://ecs-uibm-workflow-load-b-bg-486537510.eu-central-1.elb.amazonaws.com/"
                   target="_blank"
                   rel="noopener noreferrer">Workflow Manager</a></li>
          </ul>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>APIs</h2>
          <ul>
            <li><a href="http://ecs-uibm-api-load-balancer-1136427516.eu-central-1.elb.amazonaws.com/">Common API</a></li>
            <li><a href="http://ecs-uibm-digidapi-loadbalancer-15080021.eu-central-1.elb.amazonaws.com/">Digital Identity API</a></li>
            <li><a href="http://ecs-uibm-bff-load-balancer-144272593.eu-central-1.elb.amazonaws.com/">Backend For Frontends API</a></li>
          </ul>
        </div>
        <div className={styles.item}>
          <h2 className={styles.title}>FIGMAs</h2>
          <ul>
            <li><a href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=2015%3A312660&node-id=8002-198518&t=pKUos7TMInhAezID-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=8002%3A198518&show-proto-sidebar=1">Parti Comuni</a></li>
            <li><a href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=6001%3A344249&node-id=6001-344252&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A344250&show-proto-sidebar=1">Parti Specifiche</a></li>
            <li><a href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=6001%3A209006&node-id=6001-209981&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A209981&show-proto-sidebar=1">Marchi d&apos;Impresa</a></li>
            <li><a href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=4152%3A187029&node-id=6001-197659&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A198586&show-proto-sidebar=1">Brevetti</a></li>
            <li><a href="https://www.figma.com/proto/oAhCO0JsyBDT1Rpqyh6IFu/DEV-Protos-show-v7-on-draft-team-vv2?page-id=6001%3A422803&node-id=6001-422806&t=DEQjnAVfVCt5jM4n-0&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=6001%3A422804">Dati Identificativi</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
