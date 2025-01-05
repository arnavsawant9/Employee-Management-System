import React from 'react'

const NewTask = () => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] bg-gray-800 rounded-xl p-4 flex flex-col shadow-lg transition-transform transform hover:scale-105">
        {/* Original Div with Priority and Date */}
        <div className="bg-red-600 rounded-xl p-2 flex items-center justify-between w-full mb-3">
            <h2 className="text-white text-lg font-semibold px-3 py-1 rounded-md">High Priority</h2>
            <h3 className="text-gray-200 font-medium">{new Date('2024-02-20').toLocaleDateString()}</h3>
        </div>

        {/* Task Title and Description */}
        <h1 className="text-white text-xl font-bold mb-1">Task Title</h1>
        <p className="text-gray-300 mb-4 overflow-hidden text-ellipsis whitespace-nowrap">This is the description of the task, providing necessary details for completion.</p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out focus:outline-none focus:ring focus:ring-green-300">Accept task</button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-200 ease-in-out focus:outline-none focus:ring focus:ring-red-300">Reject task</button>
        </div>
    </div>
  )
}

export default NewTask