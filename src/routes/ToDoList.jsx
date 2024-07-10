import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import axios from 'axios';

export default function TasksList() {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editingTask, setEditingTask] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    const navigate = useNavigate();

    // Fetch/Read : get all
    useEffect(() => {
        axios.get("http://localhost:3001/tasks")
            .then(response => setTasks(response.data))
            .catch(error => console.error(error));
    }, []);

    // Create
    const addTask = (e) => {
        e.preventDefault();
        const task = { title, description };

        axios.post(`http://localhost:3001/tasks`, task)
            .then(response => setTasks([...tasks, response.data]))
            .catch(error => console.error(error));
        
        setTitle("");
        setDescription("");
    }

    // Update
    const saveTask = (id) => {
        const task = tasks.find(t => t.id === id);

        axios.put(`http://localhost:3001/tasks/${id}`, { ...task, title: editingTask.title, description: editingTask.description })
            .then(response => {
                setTasks(tasks.map(t => t.id === id ? response.data : t));
                setEditingTask(null);
                setIsEditing(false);
            })
            .catch(error => console.error(error));
    }

    // Delete
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:3001/tasks/${id}`)
            .then(() => setTasks(tasks.filter(t => t.id !== id)))
            .catch(error => console.error(error));
    };

    // Start editing a task
    const editTask = (task) => {
        setEditingTask({ ...task });
    }

    // Annuler l'ajout de la tâche
    const cancelAddTask = () => {
        setTitle("");
        setDescription("");
        setIsEditing(false);
    }

    // Annuler la modification de la tâche
    const cancelEditTask = () => {
        setEditingTask(null);
        setIsEditing(false);
    }

    return (
        <div className="flex flex-col justify-center px-6 py-4 gap-8">
            <form className="min-w-96 flex flex-col gap-3 mt-4 border p-3 rounded-xl" onSubmit={(e) => { e.preventDefault(); addTask(); }}>
                <h2 className="text-xl text-center font-bold underline">ToDo List</h2>

                <Input 
                    type="text"
                    value={title} 
                    onChange={e => setTitle(e.target.value)}
                    placeholder="Titre..."
                />
                <Input
                    type="text"
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Description..."
                />

                <div className="flex justify-end space-x-2">
                    <Button className="bg-green-500 hover:bg-green-600" onClick={addTask}>Ajouter</Button>
                    <Button onClick={cancelAddTask}>Annuler</Button>
                </div>
            </form>

            <Table>
                <TableCaption>Liste de vos tâches...</TableCaption>

                <TableHeader>
                    <TableRow>
                        <TableHead className="w-1/3">Titre</TableHead>
                        <TableHead className="w-1/3">Description</TableHead>
                        <TableHead className="w-1/6">Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {tasks.map(task => (
                        <TableRow key={task.id}>
                            <TableCell className="font-medium w-1/3 whitespace-normal break-words">
                                {editingTask?.id === task.id ? (
                                    <Input
                                        type="text"
                                        value={editingTask.title}
                                        onChange={e => setEditingTask({ ...editingTask, title: e.target.value })}
                                    />
                                ) : (
                                    task.title
                                )}
                            </TableCell>
                            <TableCell className="w-1/3" whitespace-normal break-words>
                                {editingTask?.id === task.id ? (
                                    <Input
                                        type="text"
                                        value={editingTask.description}
                                        onChange={e => setEditingTask({ ...editingTask, description: e.target.value })}
                                    />
                                ) : (
                                    task.description
                                )}
                            </TableCell>
                            <TableCell className="flex space-x-2 w-1/6">
                                {editingTask?.id === task.id ? (
                                    <Button className="bg-green-500 hover:bg-green-600" onClick={() => saveTask(task.id)}>Enregistrer</Button>
                                ) : (
                                    <Button onClick={() => editTask(task)}>Modifier</Button>
                                )}
                                {editingTask?.id === task.id ? (
                                    <Button onClick={cancelEditTask}>Annuler</Button>
                                ) : (
                                    <Button className="bg-red-500 hover:bg-red-600" onClick={() => deleteTask(task.id)}>Supprimer</Button>
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}