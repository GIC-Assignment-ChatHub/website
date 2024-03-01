import React from "react";

type Props = {};

export default function Footer({}: Props) {
    return (<footer
            className="sticky top-0 cursor-pointer flex items-start justify-between mx-auto z-20 xl:items-center max-h-24 pr-20 pl-20 bg-slate-800"
            style={{width: "100%"}}>
            <div className="px-0 md:px-10 py-5 text-center space-y-5">
                <p className="text-10">
                    We are a group of students from the University of Aveiro, developing a project for a course in the
                    Master's in Computer Science and Engineering. We are using Tailchat as a base for our project, under
                    a different name (ChatHub) and logo. We are not affiliated with Tailchat in any way.
                </p>
                <p className="text-10">
                    Management of Computation Infrastructures 2023/24, University of Aveiro
                </p>
            </div>
        </footer>
    );
}
