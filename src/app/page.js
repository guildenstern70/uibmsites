//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import './global.scss';
import {useState} from 'react';

import Image from 'next/image'
import Resources from "@/components/resources";
import WebsitesDev from "@/components/websites-dev";
import WebsitesTest from "@/components/websites-test";

const Environment = Object.freeze({
    DEV: Symbol("dev"),
    TEST: Symbol("test")
});

export default function Home()
{

    let [env, setEnv] = useState(Environment.DEV);

    const changeEnv = () =>
    {
        if (env === Environment.DEV)
        {
            setEnv(Environment.TEST);
        } else
        {
            setEnv(Environment.DEV);
        }
    }

    const RenderEnv = () =>
    {
        if (env === Environment.DEV)
        {
            return (<div className="uibm panel">
                <p className="panel-tabs">
                    <a onClick={changeEnv} className="is-active">Dev</a>
                    <a onClick={changeEnv}>Test</a>
                </p>
                <div className="panel-block">
                    <WebsitesDev/>
                </div>
            </div>)
        }

        return (<div className="uibm panel">
            <p className="panel-tabs">
                <a onClick={changeEnv}>Dev</a>
                <a onClick={changeEnv} className="is-active">Test</a>
            </p>
            <div className="panel-block">
                <WebsitesTest/>
            </div>
        </div>)
    }

    return (

        <>
            <div id="uibmlogo" className={"columns is-centered"}>
                <Image
                    src="/uibmlogo.jpg"
                    width={400}
                    height={224}
                    priority={true}
                    alt="UIBM Logo"
                />
            </div>

            <div className={"columns"}>
                <div className={"column"}>
                    <RenderEnv/>
                </div>
                <div className={"column"}>
                    <Resources/>
                </div>
            </div>

            <div className="spacer"></div>

        </>

    );
}
