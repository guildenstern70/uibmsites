//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import '../global.scss';

import Resources from "@/components/resources";
import WebsitesTest from "@/components/websites-test";

export default function Test()
{
    return (

        <>
            <div id="uibmlogo" className={"columns is-centered"}>
                <img src="/uibmlogo.png" width={400} alt="UIBM Logo"/>
            </div>

            <div className={"columns"}>
                <div className={"column"}>
                    <WebsitesTest />
                </div>
                <div className={"column"}>
                    <Resources/>
                </div>
            </div>

            <div className="spacer"></div>

        </>

    );
}
