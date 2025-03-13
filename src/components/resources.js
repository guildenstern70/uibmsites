//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

'use client';

import Links from "@/components/links";

export default function Resources() {

    const wireframe_links = [
        {
            title: "Deposito - Settembre #1",
            href: "https://www.figma.com/design/BkWe7ggTQoJkan3V569mMh/DEV-Protos-show-v7-on-draft-team-vv2.2"
        },
        {
            title: "Deposito - Settembre #2",
            href: "https://www.figma.com/design/qcFMkpUGElm13Hi3RKfEaj/DEV-Protos-show-v8"
        },
        {
            title: "Nuovi UC (210 et al.)",
            href: "https://www.figma.com/design/GrN0dEz9DFC9vorMHNnoFz/DEV9-Deposito?node-id=0-1&t=endQPDSpNb84zGth-0"
        },
        {
            title: "GEPI - New",
            href: "https://www.figma.com/design/znuGDeGB78qN2b2Iizi7qA/DEV3.1-Gepi?node-id=127-137946&p=f"
        }
    ]

    return <div className="uibm panel">
        <p className="panel-tabs">
            <a className="is-active">Resources</a>
        </p>
        <div className="panel-block">
            <div className="control columns">
                <div className="column is-three-fifths">
                    <Links title="Wireframe" urls={wireframe_links} />
                </div>
                <div className="column">
                    <Links title={"Test"} urls={[
                        {
                            title: "Issue Management",
                            href: "https://github.com/guildenstern70/uibm-test/issue"
                        }]} />
                    <div className="mt-5" />
                </div>
            </div>
        </div>
    </div>

}
