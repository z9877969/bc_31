import s from './TabsPage.module.css';
const tasksColumns = [
    {
        id: 1,
        title: "Title-1",
        tasksList: [
            {
                id: 1.1,
                descr: "Lorem ipsum dolor sit amet."
            },
            {
                id: 1.2,
                descr: "Lorem ipsum dolor sit amet consectetur adipisicing."
            },
            
            {
                id: 1.3,
                descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, culpa?"
            }
        ]
    }
]

const TabsPage = () => {
    return ( 
    <>
        <ul className={s.table}>
            {
                tasksColumns.map(el => 
                    <li key={el.id} className={s.column}>
                        <h2 className={s.columnTitle}>{el.title}</h2>
                        <ul className={s.tasksList}>
                            {
                                el.tasksList.map(el => (
                                    <li key={el.id} className={s.task}>{el.descr}</li>
                                ))
                            }
                        </ul>
                    </li>
                )
            }
            
        </ul>
    </>
    );
}
 
export default TabsPage;