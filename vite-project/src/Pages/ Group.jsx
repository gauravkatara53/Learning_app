import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from '../Components/Navbar';

const Group = ({ goToDashboard }) => {
  const [groups, setGroups] = useState(['General', 'Study Group', 'Project Team']);
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [messages, setMessages] = useState({
    General: [],
    'Study Group': [],
    'Project Team': []
  });
  const [message, setMessage] = useState('');

  const handleCreateGroup = (groupName) => {
    setGroups([...groups, groupName]);
    setMessages({ ...messages, [groupName]: [] });
  };

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages({
        ...messages,
        [selectedGroup]: [...messages[selectedGroup], { text: message, sender: 'Me', timestamp: new Date().toLocaleTimeString() }]
      });
      setMessage('');
    }
  };

  return (
    <>
    
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 text-white p-4 hidden lg:block relative">
        <h2 className="text-2xl font-bold mb-4">Groups</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const groupName = e.target.elements.groupName.value.trim();
            if (groupName) {
              handleCreateGroup(groupName);
              e.target.elements.groupName.value = '';
            }
          }}
          className="mb-4"
        >
          <div className="flex">
            <input
              type="text"
              name="groupName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="New group name"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Create
            </button>
          </div>
        </form>
        <ul>
          {groups.map((group, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 mb-2 rounded ${selectedGroup === group ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => handleSelectGroup(group)}
            >
              {group}
            </li>
          ))}
        </ul>
        {/* Go Back to Dashboard Button */}
        
        {/* Link to Courses Section */}
        <Link to="/courses" className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
          Go to Courses
        </Link>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-gray-800 p-4 flex items-center justify-between shadow">
          <div className="lg:hidden">
            <button
              className="bg-gray-700 p-2 rounded text-white"
              onClick={() => document.getElementById('mobileSidebar').classList.toggle('hidden')}
            >
              Menu
            </button>
          </div>
          <h2 className="text-xl font-bold">{selectedGroup}</h2>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-auto">
          {messages[selectedGroup]?.map((msg, index) => (
            <div key={index} className="mb-4 flex flex-col">
              <div className={`p-2 rounded shadow ${msg.sender === 'Me' ? 'bg-blue-700 self-end' : 'bg-gray-700'}`}>
                <p className="font-bold">{msg.sender}</p>
                <p>{msg.text}</p>
                <p className="text-xs text-right text-gray-400">{msg.timestamp}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 bg-gray-800 flex">
          <input
            type="text"
            className="flex-1 shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
          >
            Send
          </button>
        </form>
      </div>

      {/* Mobile Sidebar */}
      <div id="mobileSidebar" className="fixed inset-0 bg-gray-800 bg-opacity-90 p-4 z-50 hidden lg:hidden">
        <button
          className="bg-gray-700 p-2 rounded text-white mb-4"
          onClick={() => document.getElementById('mobileSidebar').classList.toggle('hidden')}
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">Groups</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const groupName = e.target.elements.groupName.value.trim();
            if (groupName) {
              handleCreateGroup(groupName);
              e.target.elements.groupName.value = '';
            }
          }}
          className="mb-4"
        >
          <div className="flex">
            <input
              type="text"
              name="groupName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="New group name"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
            >
              Create
            </button>
          </div>
        </form>
        <ul>
          {groups.map((group, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 mb-2 rounded ${selectedGroup === group ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
              onClick={() => {
                handleSelectGroup(group);
                document.getElementById('mobileSidebar').classList.add('hidden');
              }}
            >
              {group}
            </li>
          ))}
        </ul>
        {/* Link to Courses Section */}
        <Link to="/courses" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 block">
          Go to Courses
        </Link>
      </div>
    </div>
    </>
  );
};

export default Group;
