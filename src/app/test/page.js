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
                    <div className="tabs">
                        <ul>
                            <li><a href={"/"}>Dev</a></li>
                            <li className="is-active"><a>Test</a></li>
                        </ul>
                    </div>
                </div>
                <div className={"column"}>
                </div>
            </div>
        </>
    );
}
