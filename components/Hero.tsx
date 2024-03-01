import React from "react";
import {motion} from "framer-motion";

type Props = {};

export default function Hero({}: Props) {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div>
                    <div className="px-0 md:px-10 space-y-20">
                        <h1>
                            <span className="text-5xl font-bold">ChatHub</span>
                            <br/>
                            <span className="text-3xl text-gray-500">Your ultimate communication solution</span>
                        </h1>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center text-center overflow-hidden">
                        <motion.img
                            initial={{opacity: 0, y: 200}}
                            transition={{duration: 1.2}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}} src="images/figure/hero-light.png"/>
                    </div>
                    <div className="px-0 md:px-10 space-y-20">
                        <p className="text-18 space-y-20">
                            ChatHub redefines messaging with its versatile Messenger, AI Assistant for streamlined
                            conversations, and Plugin Center for endless possibilities. It comes with an built-in role
                            management, open integration, and multi-platform support. ChatHub is more than just a chat
                            app — it's your <b> ultimate communication solution</b>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}