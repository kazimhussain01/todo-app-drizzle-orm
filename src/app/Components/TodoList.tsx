"use client"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useEffect, useState } from 'react'
import { Plus } from 'lucide-react';
import ViewTodo from './ViewTodo';

type Props = {
    todoList: any
};

export default function TodoLost({ }: Props) {
    const [todoItem, setTodoItem] = useState("");
    const [todoList, setTodoList] = useState("")
    const [isloading, setIsLoading] = useState(false)

    const getTodo = async () => {
        setIsLoading(true);
        const response = await fetch("/api/todo");
        const res = await response.json()
        setTodoList(res.message)
        console.log("after loading", res)
        setIsLoading(false);
    }

    useEffect(() => {
        getTodo();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoItem(e.currentTarget.value);
    };
    const handleAddTodo = async () => {
        const response = await fetch("/api/todo", {
            method: "POST",
            body: JSON.stringify({ todoItem }),
        });
        const res = await response.json();
        getTodo()
    };

    return (
        <div className='flex justify-center items-center'>
            <div className='w-[60%] bg-gray-200 shadow-md rounded-md p-7'>
                <div className='flex justify-center items-center gap-6'>
                    <div className='w-[70%]'>
                        <Input
                            id='todoitem'
                            placeholder='Enter Todo Here'
                            value={todoItem}
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                    <Button onClick={handleAddTodo} className="font-poppins">
                        <Plus size={18} />
                        Add Todo
                    </Button>
                </div>
                {isloading ? (<div>Loading....</div>) :
                    todoList.length > 0 ? (
                        <ViewTodo todoList={todoList} />
                    ) : (
                        <div className='text-center p-5 font-poppins'>No Todo Found!</div>
                    )
                }
            </div>
        </div>
    )
}
