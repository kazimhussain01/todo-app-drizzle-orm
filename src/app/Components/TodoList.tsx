"use client"

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import { useState } from 'react'
import { Plus } from 'lucide-react';

type Props = {};

export default function TodoLost({ }: Props) {
    const [todoItem, setTodotItem] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodotItem(e.currentTarget.value)
    }

    const handleAddTodo = async () => {
        const response = await fetch("/api/todo", {
            method: "POST",
            body: JSON.stringify({ todoItem })
        });

        const res = await response.json()
        console.log(res)
    }

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
            </div>
        </div>
    )
}
