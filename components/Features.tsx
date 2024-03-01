import {motion} from "framer-motion";
import React from "react";

type Props = {};

export default function Features({}: Props) {
    return (
        <div className="space-y-20">
            <div
                className="top-10 flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <h3 className="top-28 uppercase tracking-[20px] text-gray-500 text-2xl">
                    &nbsp;Features
                </h3>
            </div>
            <div
                className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <motion.img
                    initial={{opacity: 0, x: -200}}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    src="images/figure/hello.png"
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[525px] xl:h-[300px]"
                />
                <div className="px-0 md:px-10 space-y-3">
                    <h1>
                        <span className="text-3xl font-bold">Messenger</span>
                    </h1>
                    <p>
                        Basic message support, multi message type like text/link/mention/image/file etc. and support
                        append reaction for anything you want with messages.
                    </p>
                    <p>
                        You can join multiple groups, and discuss different topics, perhaps information and
                        notifications, through multiple panels in the group. Not just a simple chat.
                    </p>
                    <p>
                        In the inbox, you can receive anything you need to know, such as mention or plugin notification.
                        Or you can push anything on yourself.
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <div className="px-0 md:px-10 space-y-3">
                    <h1>
                        <span className="text-3xl font-bold">AI Assistant</span>
                    </h1>
                    <p>
                        Communicate by AI, AI Assistant will help you improve your word, simplify your expression and
                        even summary history messages.
                    </p>
                    <p>
                        Thanks for ChatGPT, Communicate with people will be easier and friendly.
                    </p>
                </div>
                <motion.img
                    initial={{opacity: 0, x: 200}}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    src="images/figure/ai.png"
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[400px] xl:h-[300px]"
                />
            </div>
            <div
                className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <motion.img
                    initial={{opacity: 0, x: -200}}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    src="images/figure/plugins.png"
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[525px] xl:h-[300px]"
                />
                <div className="px-0 md:px-10 space-y-3">
                    <h1>
                        <span className="text-3xl font-bold">Plugin Center</span>
                    </h1>
                    <p>
                        ChatHub has a complete plugin system. With plugins, you can integrate your apps and projects
                        into your chat app in any form you want. Unlike VSCode, ChatHub has fewer restrictions on the
                        form of expression. I think ChatHub is not only a chat app, but also a platform for integrating
                        different applications. You can start a video conference, listen to music, use online tools and
                        more in ChatHub.
                    </p>
                    <p>
                        At the same time, through plugins, you can further improve the chat experience, such as topic
                        panel, end-to-end encryption, rich text, message notification, online drawing, receiving push
                        from third-party applications, etc.
                    </p>
                </div>
            </div>
            <div
                className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <div className="px-0 md:px-10 space-y-3">
                    <h1>
                        <span className="text-3xl font-bold">Group Roles</span>
                    </h1>
                    <p>
                        ChatHub has a builtin RBAC permission management system. Based on the combination of role
                        assignment and permission points, various permission combinations can be matched. At the same
                        time, permission points can be easily integrated by plugins, which are a very flexible design.
                    </p>
                </div>
                <motion.img
                    initial={{opacity: 0, x: 200}}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    src="images/figure/roles.png"
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[525px] xl:h-[300px]"
                />
            </div>
            <div
                className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
                <motion.img
                    initial={{opacity: 0, x: -200}}
                    transition={{duration: 1.2}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    src="images/figure/github-bot.png"
                    className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-96 md:h-95 xl:w-[525px] xl:h-[300px]"
                />
                <div className="px-0 md:px-10 space-y-3">
                    <h1>
                        <span className="text-3xl font-bold">Bot and Open Platform</span>
                    </h1>
                    <p>
                        ChatHub has a very simple way to integrate third-party applications with bot like most
                        applications. A simple url request or add openapi app or even create a backend plugin. You can
                        use anyway to connect anything, its free!
                    </p>
                </div>
            </div>
        </div>
    );
}
