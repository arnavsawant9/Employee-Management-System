import React from 'react'

const CompleteTask = ({completedTaskData}) => {
  return (
    <>
        <div className="h-full flex-shrink-0 w-[300px] bg-gray-800 rounded-xl p-4 flex flex-col shadow-lg transition-transform transform hover:scale-105">
            {/* Original Div with Priority and Date */}
            <div className="bg-red-600 rounded-xl p-2 flex items-center justify-between w-full mb-3">
                {/* <h2 className="text-white text-lg font-semibold px-3 py-1 rounded-md">{completedTaskData.priority}</h2> */}
                <h3 className="text-gray-200 font-medium">{new Date(completedTaskData.date).toLocaleDateString()}</h3>
            </div>

            {/* Task Title and Description */}
            <h1 className="text-white text-xl font-bold mb-1">{completedTaskData.title}</h1>
            <p className="text-gray-300 mb-4 overflow-hidden text-ellipsis whitespace-nowrap">{completedTaskData.description}</p>

            {/* Action Buttons */}
            <div className="flex gap-3 mt-auto">
                <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 ease-in-out focus:outline-none focus:ring focus:ring-green-300">Completed</button>
            </div>
        </div>
    </>
  )
}

export default CompleteTask