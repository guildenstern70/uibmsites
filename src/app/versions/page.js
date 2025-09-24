//
// Copyright (c) 2024-25 Alessio Saltarin. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.
//

import '../global.scss';
import Image from 'next/image';
import VersionsComparer from "@/components/versions-comparer";
import Link from "next/link";

export default function VersionsPage() {
    return (
        <>
            <div className={"columns is-centered"}>
                <Image
                    src="/uibmlogo.jpg"
                    width={300}
                    height={180}
                    priority={true}
                    alt="UIBM Logo"
                />
            </div>

            <div id="uibmservices" className={"columns"}>
                <div className={"column"}>
                    &nbsp;
                </div>
                <div className={"column is-two-thirds"}>
                     <VersionsComparer />
                </div>
                <div className={"column"}>
                    &nbsp;
                </div>
            </div>

            <div className="spacer"></div>

            <div className="has-text-centered mt-2">
                <Link className="is-size-7 has-text-grey-light" href="/">Back Home</Link>
            </div>

            <div className="spacer"></div>


        </>
    );
}
