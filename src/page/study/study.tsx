import styles from "./study.module.css"
import { useNavigate } from "react-router-dom";
export default function Study() {
    const navi = useNavigate();
    type data = {
        id: number,
        time: string,
        title: string,
        url: string,
        article:string
    }
    const blogs: data[] = [
        {
            id: 1,
            time: "2024 12 27",
            title: "markdown写作笔记",
            url: "/picture/illust_57171771_20241229_161057.jpg",
            article:"markdown写作笔记.md"
        },
        {
            id: 2,
            time: "2025 01 01",
            title: "新的一年",
            url: "/picture/illust_68296699_20241229_181841.png",
            article:"新的一年.md"
        },
        {
            id: 3,
            time: "2025 01 08",
            title: "服务器须知",
            url: "/picture/illust_78467431_20241229_182148.jpg",
            article:""
        },
    ];
    return (
        <>
            <div className={styles.container}>
                <div className={styles.timeline}>
                    {blogs.map((element) => {
                        return (
                            <div className={styles.item} data-name={element.time} key={element.id}>
                                <div className={styles.content} onClick={() => navi(`/note/${element.article}`)}>
                                    <img src={element.url} alt="" />
                                    <span className={styles.des}>{element.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
} 