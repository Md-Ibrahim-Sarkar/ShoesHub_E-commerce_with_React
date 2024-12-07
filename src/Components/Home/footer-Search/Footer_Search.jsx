import React from 'react'

function Footer_Search() {
    return (
        <div className='flex justify-center my-7'>
            <div className="flex items-center overflow-hidden border rounded-lg">
                <input
                    type="text"
                    placeholder="Search query..."
                    className="w-64 px-4 py-2 text-gray-500 border-blue-200 focus:outline-none"
                />
                <button className="px-4 py-2 text-white bg-blue-500">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Footer_Search