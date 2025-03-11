//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import './global.scss';

import WebsitesDev from "@/components/websites-dev";
import Resources from "@/components/resources";

export default function Home()
{
    return (

        <>
            <div id="uibmlogo" className={"columns is-centered"}>
                <img src="/uibmlogo.png" width={400} alt="UIBM Logo"/>
            </div>

            <div className={"columns"}>
                <div className={"column"}>
                    <WebsitesDev/>
                </div>
                <div className={"column"}>
                    <Resources/>
                </div>
            </div>

            <div className="spacer"></div>

        </>

    );
}
