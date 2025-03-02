import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Modal from './components/Modal'
import style from '@/styles/dashboard.module.css'

export default function Dashboard() {
    const router = useRouter();
    const [todoText, setTodoText] = useState("");
    const [todolist, setTodolist] = useState([]);
    const [user, setUser] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [currentTask, setCurrentTask] = useState({
        id: null,
        task: "",
    });

    useEffect(() => {
        async function check() {
            try {
                const res = await fetch("/api/protected");
                const data = await res.json();
                if (res.status === 200) {
                    console.log(data.message);
                    setUser(data.user);
                } else {
                    console.log("Not authorized user, Please log in");
                    router.push("/login");
                }
            } catch (err) {
                console.log("An error occurred", err);
            }
        }
        check();
    }, []);

    useEffect(() => {
        if (user?.email) {
            fetchTasks();
        }
    }, [user]);

    const fetchTasks = async () => {
        if (!user?.email) {
            console.log("User email not set yet");
            return;
        }
        try {
            const res = await fetch('/api/getTodos', {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify({ user_email: user.email }),
            });
            const data = await res.json();
            setTodolist(data.user_tasks);
            if (res.status !== 200) {
                console.log("Failed to fetch the tasks", data.message);
            }
        } catch (err) {
            console.log("Error fetching tasks: ", err);
        }
    };

    const handleAdd = async () => {
        const taskData = {
            task: todoText,
            user_email: user.email,
        };
        try {
            const res = await fetch('/api/addTask', {
                method: 'POST',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(taskData),
            });
            if (res.status === 201) {
                console.log("Task insertion successful");
                setTodoText("");
                fetchTasks();
            }
        } catch (err) {
            console.log("Task not inserted:", err);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch('/api/removeTask', {
                method: 'DELETE',
                headers: { 'Content-Type': 'Application/json' },
                body: JSON.stringify(id)
            });
            if (response.status === 200) {
                fetchTasks();
            }
        } catch (err) {
            console.log("Error deleting", err);
        }
    };

    const handleUpdate = (id, task) => {
        setCurrentTask({ id: id, task: task });
        setModalOpen(true);
    };

    const handleSave = async (task) => {
        const response= await fetch('/api/updateTask',{
            method: 'POST',
            headers: {'Content-Type':'Application/json'},
            body: JSON.stringify({id:currentTask.id, task:task}),
        });
        if(response.status ===201){
            fetchTasks();
            setModalOpen(false);
        }
    };

    const handleLogout = async ()=>{
        try{
            const res =await fetch('/api/logout');
            const data = await res.json();
            console.log(data.message);
            router.push('/login');
        }
        catch(err){
            console.log("Error occurred: ", err.message)
        }
    }

    return (
        <div className={style.main_box}>
            <header className={style.header}>
            <p>Welcome {user.email}</p>
            <div>
                <button className={style.logout} onClick={handleLogout}>
                    Logout
                </button>
            </div>
            </header>
            
            <div className={style.box_1}>
                <input className={style.text} placeholder="What's on your mind?" onChange={(e) => setTodoText(e.target.value)} />
                <input className={style.add} type="button" value="Add" onClick={handleAdd} />
            </div>
            <div className={style.box_2}>
                {todolist.length > 0 ? (
                    todolist.map((item) => (
                        <div className={style.item} key={item.id}>
                            <div className={style.sno}>
                                {item.id} 
                            </div>
                            <div className={style.todo_item}><div><p>{item.task}</p></div>
                            <div>
                            <button onClick={() => handleDelete(item.id)}>
                                Delete
                            </button>
                            <button onClick={() => handleUpdate(item.id, item.task)}>Edit</button>
                            </div>
                                
                            
                            </div>
                            
                            
                        </div>
                    ))
                ) : (<p>No tasks to display</p>)}
            </div>
            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onSave={handleSave}
                initialValue={currentTask.task} />
            
        </div>
    );
}
