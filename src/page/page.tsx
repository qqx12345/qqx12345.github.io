import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css"
export default function Index() {
    const [open, setOpen] = useState(0);
    type Item = {
        id: number;
        content: string;
        url: string;
        link:string
    };
    const component: Item[] = [
        {
            id: 1,
            content: "my notes",
            url: "/picture/illust_123234640_20241227_154842.jpg",
            link:"/note"
        },
        {
            id: 2,
            content: "playgound",
            url: "/picture/illust_123388873_20241227_154837.jpg",
            link:"/playgound"
        },
        {
            id: 3,
            content: "about web",
            url: "/picture/illust_123255463_20241227_190540.jpg",
            link:"/note/web.md"
        }
    ];
    return (
        <>
            <div className={styles.title}><h1>welcome to my playground</h1></div>
            <div className={styles.button}><button onClick={() => setOpen((open + 1) % 2)} className={open==0?styles.start:styles.end}>start</button></div>
            <div className={styles.nav}>
                {component.map((element) => {
                    return (
                        <div className={styles.element} style={{ backgroundImage: `url(${element.url})`, opacity: open }} key={element.id}>
                            <div className={styles.number}>0{element.id}</div>
                            <div className={styles.body}>
                                <div className={styles.headline}>{element.content}</div>
                                <div className={styles.link}><Link to={element.link} className={styles.lnk}>view</Link></div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}