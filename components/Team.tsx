import React from "react";

type Props = {};

export default function Team({}: Props) {
    return (
        <div><div
                className="h-screen/3 relative max-w-7xl pt-32 flex flex-col mx-auto justify-evenly items-center text-center md:text-left md:flex-row">
                <h3 className="absolute bottom-36 top-12 uppercase tracking-[20px] text-gray-500 text-2xl">
                    &nbsp;Deployment Team
                </h3>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/diogo.jpg"
                            alt="Diogo Paiva Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 15}}>
                            Diogo Paiva
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:diogopaiva21@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/DiogoPaiva21" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/guilherme.png"
                            alt="Guilherme Antunes Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 15}}>
                            Guilherme Antunes
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:guilherme.antunes@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/SysteM1922" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card w-52">
                    <figure className="px-10 ">
                        <img
                            src="images/team/joao.jpg"
                            alt="João Fonseca Image"
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title" style={{fontSize: 15}}>
                            João Fonseca
                        </h2>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <a href="mailto:joao.fonseca@ua.pt" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/email.svg" style={{height: 20, width: 20}}/>
                            </a>
                            <a href="https://github.com/joaompfonseca" target="_blank" style={{marginInline: 5}}>
                                <img src="images/icon/github.svg" style={{height: 20, width: 20}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
